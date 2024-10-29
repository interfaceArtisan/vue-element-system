<template>
    <div ref="barEmployment" style="height: 3rem;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  mounted () {
    const employmentChart = echarts.init(this.$refs.barEmployment)
    employmentChart.setOption({
      xAxis: {
        type: 'category',
        data: ['旅游业', '电商业', '餐饮业', '服务业-长文本长文本长文本', '其他1', '其他2'],
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, .5)', // x轴颜色
            width: 1
          }
        },
        axisTick: {
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
          // showMinLabel: true,
        },
        splitLine: { // 分隔线，分割x轴，这里设置为不显示
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, .2)'
          }

        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)', // y轴颜色
            width: 1
          }
        },
        splitLine: { // 分隔线，分割y轴
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)'
          }

        },
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12
        }

      },
      series: [{
        data: [120, 200, 150, 80, 700, 1110],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'none'
        },
        itemStyle: {
          borderRadius: [8, 8, 0, 0]
        },
        barWidth: '50%'
      }],
      color: '#2f89cf',
      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      }
    })

    // 监听窗口大小变化, 这里需要添加throttle
    window.addEventListener('resize', () => {
      employmentChart.resize()
    })
  }
}
</script>
