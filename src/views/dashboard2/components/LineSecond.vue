<template>
  <div ref="barEmployment" style="height: 3rem"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'LineSecond',
  mounted () {
    const employmentChart = echarts.init(this.$refs.barEmployment)
    employmentChart.setOption({
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      tooltip: {
        trigger: 'axis',
        // 鼠标滑过时的样式
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        textStyle: {
          color: '#4c9bfd'
        },
        right: '10%'
      },
      grid: {
        left: '0%',
        top: '15%',
        right: '3%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, .5)' // x轴刻度盘颜色
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 12,
            width: 50,
            overflow: 'truncate'
          },
          splitLine: {
            // 分隔线，分割x轴，这里设置为不显示
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, .1)', // y轴颜色
              width: 1
            }
          },
          splitLine: {
            // 分隔线，分割y轴
            lineStyle: {
              color: 'rgba(255, 255, 255, .1)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 12
          }
        }
      ],
      series: [
        {
          name: 'Line 1',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            color: '#0184d5',
            width: 2
          },
          // 拐点初始不显示，鼠标经过显示
          showSymbol: false,
          // 设置拐点 小圆点
          symbol: 'circle',
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
          name: 'Line 2',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            color: '#00d887',
            width: 2
          },
          showSymbol: false,
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 282, 111, 234, 220, 340, 310]
        }
      ]
    })

    // 监听窗口大小变化, 这里需要添加throttle
    window.addEventListener('resize', () => {
      employmentChart.resize()
    })
  }
}
</script>
