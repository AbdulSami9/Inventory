<template lang="">
    <div class="container mt-5">        
        <div class="row mt-5">            
        </div>
        <ag-grid-vue
          class="ag-theme-alpine"
          style="height: 500px"
          :columnDefs="columnDefs.value"
          :rowData="rowData.value"
          :defaultColDef="defaultColDef"
          rowSelection="multiple"
          animateRows="true"
          @cell-clicked="cellWasClicked"
          @cellValueChanged="onCellValueChanged"
          @grid-ready="onGridReady"
        >
        </ag-grid-vue>
  
    </div>
</template>
<script>
import { getProducts, updateProductById } from '../services/ProjectData'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { reactive, onMounted, ref } from "vue";
import { useToast } from 'vue-toastification'
import { AgGridVue } from "ag-grid-vue3";
export default {
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null);
    const stockList = reactive({})
    const minValue = reactive(150)
    const toast = useToast();
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };
    const currencyFormatter = function currencyFormatter(params) {
      return params.value == null ? '' : '₩' + params.value;
    };
    const rowData = reactive({});

    const columnDefs = reactive({
      value: [
        { field: "productname" },
        { field: "category" },
        {
          field: "stock", editable: true, cellStyle: params => {
            if (params.value < minValue) {
              return { color: 'red', backgroundColor: '#e9ecef' };
            }
            return { backgroundColor: '#e9ecef' };
          }
        },
        { field: "price", valueFormatter: currencyFormatter, },
      ],
    });

    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1
    };
    const onCellValueChanged = ({ data }) => {
      let updatedData = {
        productname: data.productname,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category: data.category,
      }
      updateProductById(data.id, updatedData)
      toast.success(`${data.productname} stock updated sucessfully`);
    };

    const checkStock = () => {
      console.log(stockList)
      stockList.value.map((stock) => {
        if (stock.stock < minValue) {
          console.log('this is', stock.productname)
          toast.info(`${stock.productname} stock is low`);
        }
      })
    };
    onMounted(() => {
      let remoteRowData = getProducts();
      stockList.value = remoteRowData;
      rowData.value = remoteRowData
      checkStock();
    });

    return {
      stockList,
      onGridReady,
      columnDefs,
      rowData,
      checkStock,
      defaultColDef,
      onCellValueChanged,

    };
  },

}


</script>
<style lang="css">
.ag-theme-alpine .ag-root-wrapper {
  border-radius: 20px;
}

.ag-theme-alpine .ag-header {
  background: #171215;
  color: white;
  text-align: center;
}

.ag-theme-alpine .ag-header-row {
  background: #171215;
  color: white;
}

.ag-theme-alpine .ag-header-icon {
  color: white;
}

.ag-theme-alpine .ag-center-cols-viewport {
  text-align: left;
}
</style>