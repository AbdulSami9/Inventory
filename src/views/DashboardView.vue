<template>
    <div class="my-2">
        <div class="row mt-4">
            <div class="col-md-6 top-pad ">
                <div class="graph-div">
                    <div class="d-flex justify-content-center">
                        <div class="ag-chart ">
                            <select class=" form-select float-right mt-3 mr-3 select-input select-form" id="myDropdown"
                                v-model="timePeriod" @change="comparisonChartPeriod">
                                <option value="year">Year</option>
                                <option value="month">Month</option>
                                <option value="day">Day</option>
                            </select>
                            <ag-charts-vue :options="options"></ag-charts-vue>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 top-pad ">
                <div class="row ">
                    <div class="col-md-6 pr-lg-0">
                        <div class="card card-border-1">
                            <div class="card-body py-5 ">
                                <h4 class="card-text  mb-1 font-weight-bold"><img src="../assets/images/cart-dash.svg"
                                        class="pr-2 pb-1 fs-1" alt=""> Total
                                    Orders</h4>
                                <h5 class="p-0 m-0 font-weight-bold">{{ totalOrders }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pl-lg-0">
                        <div class="card card-border-2">
                            <div class="card-body py-5">
                                <h4 class="card-text  mb-1 font-weight-bold"><img src="../assets/images/diagram-2-fill.svg"
                                        class="pr-2 pb-1" alt="">
                                    Total Products</h4>
                                <h5 class="p-0 m-0 font-weight-bold">{{ totalProducts }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pr-lg-0">
                        <div class="card card-border-3">
                            <div class="card-body py-5">
                                <h4 class="card-text mb-1 font-weight-bold"> <img src="../assets/images/cash-stack.svg"
                                        class="pr-2 pb-1" alt="">Total
                                    Sales
                                </h4>
                                <h5 class="p-0 m-0 font-weight-bold">{{ totalSales }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pl-lg-0">
                        <div class="card card-border-4">
                            <div class="card-body py-5">
                                <h4 class="card-text  mb-1 font-weight-bold"><img src="../assets/images/tags-fill.svg"
                                        class="pr-2 pb-1" alt="">Categories
                                </h4>
                                <h5 class="p-0 m-0 font-weight-bold">3</h5>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="row mt-4">
            <div class="col-md-6 top-pad ">
                <div class="graph-div">
                    <div class="d-flex justify-content-center">
                        <div class="ag-chart ">
                            <select class=" form-select float-right mt-3 mr-3 select-input select-form" id="myDropdown"
                                v-model="timePeriod" @change="salesChartPeriod">
                                <option value="year">Year</option>
                                <option value="month">Month</option>
                                <option value="day">Day</option>
                            </select>
                            <ag-charts-vue :options="options2"></ag-charts-vue>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 top-pad ">
                <div class="graph-div">
                    <div class="d-flex justify-content-center">
                        <div class="ag-chart">
                            <ag-charts-vue :options="options3"></ag-charts-vue>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>;
<script>
import { time } from 'ag-charts-community';
import { AgChartsVue } from 'ag-charts-vue3';
import '@vuepic/vue-datepicker/dist/main.css';
import { getSales, CategoriesWise, getProducts } from '../services/ProjectData';

export default {
    name: 'DashboardView',
    components: {
        'ag-charts-vue': AgChartsVue,
    },

    data() {
        return {
            timePeriod: 'month',
            options: null,
            options2: null,
            options3: null,
            ordersData: null,
            totalProducts: 0,
            totalOrders: 0,
            totalSales: 0,
        }
    },
    computed: {
        sales() {
            let sales = getSales()
            return sales.reduce((sum, obj) => sum + parseInt(obj.sales), 0);

        },
    },
    created() {
        this.getSalesData()
        this.comparisonChart()
        this.salesChart()
        this.categoryData()
        console.log(this.$route.meta);
    },
    async mounted() {
        this.totalProducts = getProducts().length
        this.totalOrders = this.getSalesData().length
        this.totalSales = this.sales
    },
    methods: {
        comparisonChartPeriod() {
            const options = { ...this.options };
            let timePeriod = this.timePeriod
            options.axes[0].tick.interval = time[timePeriod];

            this.options = options;
        },
        salesChartPeriod() {
            const options = { ...this.options2 };
            let timePeriod = this.timePeriod
            options.axes[0].tick.interval = time[timePeriod];

            this.options2 = options;
        },
        getSalesData() {
            const sortedAsc = getSales().sort(
                (objA, objB) => Number(objA.date) - Number(objB.date),
            );
            return sortedAsc
        },
        comparisonChart() {
            this.options = {
                autoSize: true,
                data: this.getSalesData(),
                theme: {
                    baseTheme: "ag-default",
                    palette: {
                        fills: ["#3248F2",],
                        strokes: ["gray"],
                    },
                },
                // title: {
                //     text: 'Cost vs Sales Comparison',
                //     fontSize: 18,
                //     spacing: 25,
                // },
                series: [
                    {
                        type: 'line',
                        xKey: 'date',
                        yKey: 'sales',
                        stroke: '#01c185',
                        marker: {
                            stroke: '#01c185',
                            fill: '#01c185',
                        },
                        //   tooltip,
                    },
                    {
                        type: 'line',
                        xKey: 'date',
                        yKey: 'cost',
                        // stroke: '#01c185',
                        // marker: {
                        //     stroke: '#01c185',
                        //     fill: '#01c185',
                        // },
                        //   tooltip,
                    },
                ],
                axes: [
                    {
                        position: 'bottom',
                        type: 'time',
                        tick: {
                            interval: time.month,
                        },
                        title: {
                            text: 'Date',
                        },
                        label: {
                            autoRotate: true,
                        },
                    },
                    {
                        position: 'left',
                        type: 'number',
                        title: {
                            text: 'Price in pence',
                        },
                        label: {
                            autoRotate: true,
                        },
                    },
                ],
            };
        },
        salesChart() {
            this.options2 = {

                title: {
                    text: "Total Sales",
                },
                subtitle: {
                    text: 'in Dollars',
                },
                theme: {
                    baseTheme: "ag-default",
                    palette: {
                        fills: ["#3248F2",],
                        strokes: ["gray"],
                    },

                },
                data: this.getSalesData(),
                series: [
                    {
                        type: 'column',
                        xKey: 'date',
                        yKey: 'sales',
                    },
                ],
                axes: [
                    {
                        position: 'bottom',
                        type: 'time',
                        tick: {
                            interval: time.month,
                        },
                        title: {
                            text: 'Date',
                        },
                        label: {
                            autoRotate: true,
                        },
                    },
                    {
                        position: 'left',
                        type: 'number',
                        title: {
                            text: 'Price in pence',
                        },
                        label: {
                            autoRotate: true,
                        },
                    },
                ],

            };
        },
        categoryData() {
            this.options3 = {
                autoSize: true,
                title: {
                    text: "Categories",
                },
                subtitle: {
                    text: 'Category wise sale',
                },
                theme: {
                    baseTheme: "ag-default",
                    palette: {
                        fills: ["#3248F2", "#d7d7d7", "#10ce93", "#01c185", "#F76700", "#D30018"],
                        strokes: ["white"],
                    },

                },
                data: CategoriesWise(),
                series: [
                    {
                        type: 'pie',
                        calloutLabelKey: 'category',
                        angleKey: 'sales',
                        innerRadiusOffset: -40,
                    },
                ],


            };
        }
    },


}


</script>
