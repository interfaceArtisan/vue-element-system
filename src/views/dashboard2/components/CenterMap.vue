<template>
  <div ref="chinaMap" class="chart-container"></div>
</template>

<script>
import * as echarts from 'echarts'
import mapFeatures from '@/utils/china'

export default {
  name: 'CenterMap',
  mounted () {
    console.log(mapFeatures)
    const chinaMapChart = echarts.init(this.$refs.chinaMap)

    const mapName = 'china'
    const data = [
      { name: '北京', value: 177 },
      { name: '天津', value: 42 },
      { name: '河北', value: 102 },
      { name: '山西', value: 81 },
      { name: '内蒙古', value: 47 },
      { name: '辽宁', value: 67 },
      { name: '吉林', value: 82 },
      { name: '黑龙江', value: 66 },
      { name: '上海', value: 24 },
      { name: '江苏', value: 92 },
      { name: '浙江', value: 114 },
      { name: '安徽', value: 109 },
      { name: '福建', value: 116 },
      { name: '江西', value: 91 },
      { name: '山东', value: 119 },
      { name: '河南', value: 137 },
      { name: '湖北', value: 116 },
      { name: '湖南', value: 114 },
      { name: '重庆', value: 91 },
      { name: '四川', value: 125 },
      { name: '贵州', value: 62 },
      { name: '云南', value: 83 },
      { name: '西藏', value: 9 },
      { name: '陕西', value: 80 },
      { name: '甘肃', value: 56 },
      { name: '青海', value: 10 },
      { name: '宁夏', value: 18 },
      { name: '新疆', value: 67 },
      { name: '广东', value: 123 },
      { name: '广西', value: 59 },
      { name: '海南', value: 14 }
    ]

    const toolTipData = [
      {
        name: '北京',
        value: [
          { name: '文科', value: 95 },
          { name: '理科', value: 82 }
        ]
      },
      {
        name: '天津',
        value: [
          { name: '文科', value: 22 },
          { name: '理科', value: 20 }
        ]
      },
      {
        name: '河北',
        value: [
          { name: '文科', value: 60 },
          { name: '理科', value: 42 }
        ]
      },
      {
        name: '山西',
        value: [
          { name: '文科', value: 40 },
          { name: '理科', value: 41 }
        ]
      },
      {
        name: '内蒙古',
        value: [
          { name: '文科', value: 23 },
          { name: '理科', value: 24 }
        ]
      },
      {
        name: '辽宁',
        value: [
          { name: '文科', value: 39 },
          { name: '理科', value: 28 }
        ]
      },
      {
        name: '吉林',
        value: [
          { name: '文科', value: 41 },
          { name: '理科', value: 41 }
        ]
      },
      {
        name: '黑龙江',
        value: [
          { name: '文科', value: 35 },
          { name: '理科', value: 31 }
        ]
      },
      {
        name: '上海',
        value: [
          { name: '文科', value: 12 },
          { name: '理科', value: 12 }
        ]
      },
      {
        name: '江苏',
        value: [
          { name: '文科', value: 47 },
          { name: '理科', value: 45 }
        ]
      },
      {
        name: '浙江',
        value: [
          { name: '文科', value: 57 },
          { name: '理科', value: 57 }
        ]
      },
      {
        name: '安徽',
        value: [
          { name: '文科', value: 57 },
          { name: '理科', value: 52 }
        ]
      },
      {
        name: '福建',
        value: [
          { name: '文科', value: 59 },
          { name: '理科', value: 57 }
        ]
      },
      {
        name: '江西',
        value: [
          { name: '文科', value: 49 },
          { name: '理科', value: 42 }
        ]
      },
      {
        name: '山东',
        value: [
          { name: '文科', value: 67 },
          { name: '理科', value: 52 }
        ]
      },
      {
        name: '河南',
        value: [
          { name: '文科', value: 69 },
          { name: '理科', value: 68 }
        ]
      },
      {
        name: '湖北',
        value: [
          { name: '文科', value: 60 },
          { name: '理科', value: 56 }
        ]
      },
      {
        name: '湖南',
        value: [
          { name: '文科', value: 62 },
          { name: '理科', value: 52 }
        ]
      },
      {
        name: '重庆',
        value: [
          { name: '文科', value: 47 },
          { name: '理科', value: 44 }
        ]
      },
      {
        name: '四川',
        value: [
          { name: '文科', value: 65 },
          { name: '理科', value: 60 }
        ]
      },
      {
        name: '贵州',
        value: [
          { name: '文科', value: 32 },
          { name: '理科', value: 30 }
        ]
      },
      {
        name: '云南',
        value: [
          { name: '文科', value: 42 },
          { name: '理科', value: 41 }
        ]
      },
      {
        name: '西藏',
        value: [
          { name: '文科', value: 5 },
          { name: '理科', value: 4 }
        ]
      },
      {
        name: '陕西',
        value: [
          { name: '文科', value: 38 },
          { name: '理科', value: 42 }
        ]
      },
      {
        name: '甘肃',
        value: [
          { name: '文科', value: 28 },
          { name: '理科', value: 28 }
        ]
      },
      {
        name: '青海',
        value: [
          { name: '文科', value: 5 },
          { name: '理科', value: 5 }
        ]
      },
      {
        name: '宁夏',
        value: [
          { name: '文科', value: 10 },
          { name: '理科', value: 8 }
        ]
      },
      {
        name: '新疆',
        value: [
          { name: '文科', value: 36 },
          { name: '理科', value: 31 }
        ]
      },
      {
        name: '广东',
        value: [
          { name: '文科', value: 63 },
          { name: '理科', value: 60 }
        ]
      },
      {
        name: '广西',
        value: [
          { name: '文科', value: 29 },
          { name: '理科', value: 30 }
        ]
      },
      {
        name: '海南',
        value: [
          { name: '文科', value: 8 },
          { name: '理科', value: 6 }
        ]
      }
    ]

    /* 获取地图数据 */
    // echarts.registerMap('china',china);

    // const chinaJson = await fetch(
    //   'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'
    // ).then((res) => res.json())

    // echarts.registerMap('china', chinaJson)
    // console.log('chinaJson:', chinaJson)

    // chinaMapChart.showLoading();
    // const mapFeatures = echarts.getMap(mapName).geoJson.features;
    // chinaMapChart.hideLoading();
    // console.log(mapFeatures);

    const geoCoordMap = {}
    for (const item of mapFeatures.features) {
      // 创建地区名称与经纬度的映射关系
      geoCoordMap[item.properties.name] = item.properties.cp
    }

    const max = 480
    const min = 9 // todo
    const maxSize4Pin = 100
    const minSize4Pin = 20

    const scatterData = data.map((item) => {
      return {
        name: item.name,
        value: geoCoordMap[item.name].concat(item.value)
      }
    })

    //  散点图数据
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const obj = toolTipData.find((item) => item.name === params.name)

          if (!obj) return

          return `${obj.name}:<br/>${obj.value[0].name}:${obj.value[0].value}<br/>${obj.value[1].name}:${obj.value[1].value}`
        }
      },
      // legend: {
      //     orient: 'vertical',
      //     y: 'bottom',
      //     x: 'right',
      //     data: ['credit_pm2.5'],
      //     textStyle: {
      //         color: '#fff'
      //     }
      // },
      visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
          // color: ['#3B5077', '#031525'] // 蓝黑
          // color: ['#ffc0cb', '#800080'] // 红紫
          // color: ['#3C3B3F', '#605C3C'] // 黑绿
          // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
          // color: ['#23074d', '#cc5333'] // 紫红
          // color: ['#00467F', '#A5CC82'], // 蓝绿
          color: ['#1488CC', '#2B32B2'] // 浅蓝
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
        },
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        show: true,
        map: mapName,
        label: {
          show: false, // 地图组件是否显示对应地名，在这里设置不显示
          color: 'red',
          textBorderColor: 'none'
        },
        roam: true,
        itemStyle: {
          borderColor: '#3B5077' // 地图边界的颜色
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            areaColor: '#2B91B7' // 鼠标滑过时，地图区域颜色
          }
        }
      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: scatterData,
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: true,
            color: '#fff',
            textBorderColor: 'none'
          },
          itemStyle: {
            color: '#05C3F9'
          }
        },
        {
          type: 'map',
          map: mapName,
          geoIndex: 0,
          aspectScale: 0.75, // 长宽比
          showLegendSymbol: false, // 存在legend时显示
          roam: true,
          animation: false,
          data: data
        },
        {
          // 气泡形状的点点
          name: '点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin', // 气泡
          symbolSize: function (val) {
            const a = (maxSize4Pin - minSize4Pin) / (max - min)
            const b = maxSize4Pin - a * max
            return a * val[2] + b
          },
          label: {
            show: true,
            formatter: (params) => {
              return params.value[2]
            },
            color: '#fff',
            fontSize: 9
          },
          itemStyle: {
            color: '#F62157' // 标志颜色
          },
          zlevel: 6,
          data: scatterData
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: scatterData.sort((a, b) => b.value[2] - a.value[2]).slice(0, 5),
          symbolSize: function (val) {
            return val[2] / 10
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          emphasis: {
            scale: true
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: false, // 标签显隐，这里设置不显示
            textBorderColor: 'white',
            color: 'red'
          },
          itemStyle: {
            color: 'yellow',
            shadowBlur: 10,
            shadowColor: 'yellow'
          },
          zlevel: 1
        }
      ]
    }
    chinaMapChart.setOption(option)

    // 监听窗口大小变化, 这里需要添加throttle
    window.addEventListener('resize', () => {
      chinaMapChart.resize()
    })
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 10.275rem;
  width: 100%;
  border: 1px solid rgba(25, 186, 139, 0.17);

  color: #f62157;
}
</style>
