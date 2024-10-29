<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts' // echarts theme
import resize from './mixins/resize'
require('echarts/theme/macarons')

const animationDuration = 3000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')

      const plantCap = [
        {
          name: '管理员'
        },
        {
          name: '医生'
        },
        {
          name: '护工'
        },
        {
          name: '护士'
        },
        {
          name: '其他人员'
        }
      ]

      const datalist = [
        {
          offset: [30, 75],
          symbolSize: 54,
          opacity: 0.95,
          color: '#37D287'
        },
        {
          offset: [20, 43],
          symbolSize: 40,
          opacity: 0.84,
          color: '#2CC2DE'
        },
        {
          offset: [53, 45],
          symbolSize: 23,
          opacity: 0.8,
          color: '#E96750'
        },
        {
          offset: [36, 30],
          symbolSize: 29,
          opacity: 0.75,
          color: '#43A3EC'
        },
        {
          offset: [64, 20],
          symbolSize: 35,
          opacity: 0.7,
          color: '#E2AD7B'
        }
      ]
      const data = datalist.map((item, i) => {
        return {
          name: plantCap[i].name,
          value: item.offset,
          symbolSize: item.symbolSize,
          itemStyle: {
            color: item.color,
            opacity: item.opacity
          }
        }
      })
      const option = {
        grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [
          {
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
          }
        ],
        series: [
          {
            type: 'effectScatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
              show: true,
              formatter: '{b}',
              color: '#fff',
              fontSize: 12,
              textBorderWidth: 0
            },
            data
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>
