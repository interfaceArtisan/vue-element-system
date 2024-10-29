<template>
  <div ref="barEmployment" style="height: 3rem"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'PieEmployment',
  mounted () {
    const employmentChart = echarts.init(this.$refs.barEmployment)
    employmentChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        bottom: '2%',
        left: 'center',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: 12
        }
      },
      color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          center: ['50%', '50%'],
          // 可修改饼的大小，第一个值为内圆的半径 第二个值为外圆的半径
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false
            }
          },
          // 链接图形与文字的线条
          labelLine: {
            show: false
          },
          data: [
            { value: 1, name: '1岁以下' },
            { value: 735, name: '1~10岁' },
            { value: 580, name: '11~30岁' },
            { value: 484, name: '30岁以上' }
          ]
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
