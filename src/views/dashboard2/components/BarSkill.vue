<template>
  <div ref="barSkill" style="height: 3rem"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'BarSkill',
  mounted () {
    const chart = echarts.init(this.$refs.barSkill)
    chart.setOption({
      grid: {
        top: '10%',
        left: '22%',
        bottom: '10%'
      },
      xAxis: {
        show: false, // 不显示x轴的相关信息
        type: 'value'
      },
      yAxis: [
        {
          type: 'category',
          data: ['技能一', '技能二', '技能三', '技能四', '技能五', '技能六'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          inverse: true
        },
        {
          type: 'category',
          data: [700, 356, 120, 111, 234, 456],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          inverse: true
        }
      ],
      series: [
        {
          name: '技能',
          data: ['20', '30', '90', '10', '60', '80'],
          type: 'bar',
          yAxisIndex: 0,
          itemStyle: {
            borderRadius: 20,
            color: function (params) {
              const colors = [
                '#1089E7',
                '#F57474',
                '#56D0E3',
                '#F8B448',
                '#8B78F6',
                '#F56C6C',
                '#E6A23C'
              ]
              return colors[params.dataIndex]
            }
          },
          // 柱子之间的间距
          barCategoryGap: 50,
          // 柱子的宽度
          barWidth: 10,
          // 显示柱子内的文字
          label: {
            show: true,
            position: 'inside',
            // {c} 会自动的解析为 数据  data里面的数据
            formatter: '{c}%'
          }
        },
        {
          name: '人数',
          type: 'bar',
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100, 100],
          showBackground: true,
          // 柱子之间的间距
          barCategoryGap: 50,
          // 柱子的宽度
          barWidth: 15,
          itemStyle: {
            borderRadius: 15,
            color: 'none',
            borderWidth: 2,
            borderColor: '#00c1de'
          },
          label: {
            show: false
          },
          backgroundStyle: {
            color: 'none'
          }
        }
      ]
    })

    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
}
</script>
