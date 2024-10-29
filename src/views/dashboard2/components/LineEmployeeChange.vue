<template>
  <div ref="barEmployment" style="height: 3rem"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarEmployment',
  mounted () {
    const employmentChart = echarts.init(this.$refs.barEmployment)
    employmentChart.setOption({
      legend: {
        // 如果series有了name属性，legend得data就可以不用设置
        // data: ['新增粉丝', '活跃粉丝'],
        textStyle: {
          color: '#4c9bfd'
        },
        right: '10%'
      },
      xAxis: {
        type: 'category',
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        boundaryGap: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, .5)', // x轴颜色
            width: 1
          }
        },
        axisTick: {
          show: false
          // alignWithLabel: true,
          // lineStyle: {
          //     color: 'rgba(255, 255, 255, .5)', // x轴刻度盘颜色
          // }
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12,
          width: 50,
          overflow: 'truncate'
          // showMinLabel: true,
        },
        splitLine: {
          // 分隔线，分割x轴，这里设置为不显示
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
      },
      series: [
        {
          name: '新增粉丝',
          data: [120, 200, 150, 80, 700, 1110, 190],
          type: 'line',
          // true 可以让我们的折线显示带有弧度
          smooth: true
        },
        {
          name: '活跃粉丝',
          data: [90, 20, 15, 8, 70, 111, 19],
          type: 'line',
          smooth: true
        }
      ],
      color: ['#00f2f1', '#ed3f35'],
      grid: {
        left: '0%',
        top: '15%',
        right: '3%',
        bottom: '0%',
        show: true,
        borderColor: '#012f4a',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      }
    })

    // 监听窗口大小变化, 这里需要添加throttle
    window.addEventListener('resize', () => {
      employmentChart.resize()
    })
  }
}
</script>
