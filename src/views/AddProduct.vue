<template lang="">
  <div class="mask d-flex gradient-custom-3 mt-5">
    <div class="container">
      <div class="row d-flex justify-content-center ">
        <div class="col-12 col-md-9 col-lg-7 col-xl-8">
          <div class="card " style="border-radius: 15px;">
            <div class="card-body p-5">
              <form class="text-left">
                <div class="form-outline mb-2 text-center">
                  <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" :style="{ width: '50px', height: '50px', border: '1px solid #ccc', borderRadius: '50%' }" />

                </div>
                
                <div class="form-outline mb-3">
                  <label class="font-weight-bold">Product Name</label>
                    <input type="text" class="form-control rounded-pill" v-model="model.productName" id="name"  placeholder="eg. Jacket" required/>
                </div>
                <div class="form-outline mb-3">
                  <label class="font-weight-bold">Product Description</label>
                    <textarea type="text" class="form-control rounded-2" v-model="model.description" id="description" placeholder="Product Description" required></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-outline mb-3">
                    <label class="font-weight-bold">Price</label>
                    <input type="number" class="form-control rounded-pill" v-model="model.price" id="price" placeholder="Enter Product price" required/>
                </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-outline mb-3">
                    <label class="font-weight-bold">Active Stock</label>
                    <input type="number" class="form-control rounded-pill" v-model="model.stock" id="stock" placeholder="Enter Product Stock" required/>
                </div>
                  </div>
                </div>
                <div class="form-outline mb-3">
                  <label class="font-weight-bold">Product Category</label>
                    <select v-model="model.category" id="category" class="form-select form-select-lg mb-3 w-100 p-2 border border-gray rounded-pill"  aria-label=".form-select-lg example" placeholder="Select Category" required>
                        <option value="">Select Category</option>
                        <option v-for="(category, index) in categories" :value="category" :key="index">{{category}}</option>
                    </select>
                </div>
                <div class="form-outline mb-3">
                  <label class="font-weight-bold">Product Image</label>
                  <input type="file" class="form-control pb-2" @change="handleFileChange" />
                </div>
                <span v-if="isError" class="fill-error">Please fill above fields</span>
                <button type="button" class="btn btn-primary float-right btn-md gradient-custom-4 rounded-pill text-light" @click.prevent="saveProduct">Add product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { updateProductData } from '../services/ProjectData'
import { useToast } from 'vue-toastification'
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
import '../assets/style.css'
import { getCategories } from '../services/ProjectData'
export default {
  setup() {
    const categories = getCategories()
    const toast = useToast();
    const router = useRouter();
    const imageUrl = ref('');
    const isEmpty = ref(true);
    const isError = ref(false);
    const model = reactive({
      productName: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    })
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const isAnyPropertyEmpty = (product) => {
      return Object.values(product).some(value => {
        return !value;
      });
    }
    const saveProduct = async () => {
      isEmpty.value = isAnyPropertyEmpty(model)
      console.log(isEmpty.value)

      if (!isEmpty.value) {


        let data = {
          productname: model.productName,
          description: model.description,
          price: model.price,
          stock: model.stock,
          category: model.category,
        }
        updateProductData(data)
        router.push('/inventory')
        toast.success("Product added to inventory");
      } else {
        console.log('Please fill first')
        isError.value = true
      }
    }
    return { toast, isError, isAnyPropertyEmpty, model, saveProduct, categories, imageUrl, handleFileChange }
  },


}
</script>
<style lang="scss"></style>