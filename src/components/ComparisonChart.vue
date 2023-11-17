<template lang="">
    <div>
        <div>
            <ag-charts-vue v-if="options2" :options="options2"></ag-charts-vue>
        </div>
    </div>
</template>
<script>
import { time } from 'ag-charts-community';
import { AgChartsVue } from 'ag-charts-vue3';
export default {
    components: {
        // Bar,
        // Line, 
        // VueDatePicker,
        'ag-charts-vue': AgChartsVue,
    },
    props: {
        salesData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            options2: null,
        }
    },
    created() {
        this.setChartData2()
    },
    methods: {
        setChartData2() {
            this.options2 = {

                title: {
                    text: "Total Sales",
                },
                subtitle: {
                    text: 'in billion U.S. dollars',
                },
                theme: {
                    baseTheme: "ag-default",
                    palette: {
                        fills: ["#3248F2",],
                        strokes: ["gray"],
                    },

                },
                data: this.messageObject,
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
    }
}
</script>
<style lang="">
    
</style>