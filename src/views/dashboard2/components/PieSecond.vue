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
      grid: {
        top: '0%',
        left: '22%',
        bottom: '30%'
      },
      legend: {
        bottom: '0%',
        left: 'center',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: 12
        }
      },
      color: [
        '#006cff',
        '#60cda0',
        '#ed8884',
        '#ff9f7f',
        '#0096ff',
        '#9fe6b8',
        '#32c5e9',
        '#1d9dff'
      ],
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          center: ['50%', '50%'],
          roseType: 'radius',
          // 可修改饼的大小，第一个值为内圆的半径(以容器weidth为基准) 第二个值为外圆的半径
          radius: ['10%', '70%'],
          // avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            fontSize: 10,
            color: '#fff', // 字体颜色，在这里统一生效，但是优先级低于data里的label文字颜色
            textBorderColor: 'none' // 文字边框
          },
          // 链接图形与文字的线条
          labelLine: {
            show: true,
            lenght: 6,
            lenght2: 8
          },
          data: [
            { value: 20, name: '云南', label: { color: '#006cff' } }, // 如果需要修改每个label数据的样式，可以在这里修改
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '四川' },
            { value: 42, name: '湖北' }
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
