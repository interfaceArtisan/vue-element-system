<template>
  <div class="container">
    <header class="header">
      <h1>响应式可视化展板-ECharts</h1>
      <div class="show-time">当前时间：{{ time }}</div>
    </header>
    <div class="main-box">
      <div class="column">
        <Panel title="柱形图-就业行业">
          <template #chart>
            <BarEmployment />
          </template>
        </Panel>
        <Panel title="折线图-粉丝变化">
          <template #chart>
            <LineEmployeeChange />
          </template>
        </Panel>
        <Panel title="饼图-年龄分布">
          <template #chart>
            <PieFirst />
          </template>
        </Panel>
      </div>
      <div class="column">
        <div class="number">
          <div class="count">
            <span class="digit-demand">123</span>
            <span class="digit-supply">456</span>
          </div>
          <div class="title">
            <span class="title-demand">需求人数</span>
            <span class="title-supply">供应人数</span>
          </div>
        </div>
        <div class="map">
          <CenterMap />
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <Panel title="柱形图-技能掌握">
          <template #chart>
            <BarSkill />
          </template>
        </Panel>
        <Panel title="折线图-播放量">
          <template #chart>
            <LineSecond />
          </template>
        </Panel>
        <Panel title="饼图-播放量">
          <template #chart>
            <PieSecond />
          </template>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '../../components/Panel/index.vue'
import BarSkill from './components/BarSkill.vue'
import BarEmployment from './components/BarEmployment.vue'
import LineEmployeeChange from './components/LineEmployeeChange.vue'
import LineSecond from './components/LineSecond.vue'
import PieFirst from './components/PieFirst.vue'
import PieSecond from './components/PieSecond.vue'
import CenterMap from './components/CenterMap.vue'

export default {
  components: {
    Panel,
    BarSkill,
    BarEmployment,
    LineEmployeeChange,
    LineSecond,
    PieFirst,
    PieSecond,
    CenterMap
  },
  data () {
    return {
      time: ''
    }
  },
  mounted () {
    const updateTime = () => {
      clearTimeout(t)
      this.time = new Date().toLocaleString().replace(/\//g, '-')
      t = setTimeout(updateTime, 1000)
    }
    let t = setTimeout(updateTime, 1000)
  }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: electronicFont;
  src: url(../../assets/font/DS-DIGIT.TTF);
}
// 设置边框border
.clipborder(@borderpos1, @borderpos2, @width: 0.125rem, @heiht: 0.125rem) {
  content: "";
  position: absolute;
  @{borderpos1}: 0;
  @{borderpos2}: 0;
  width: @width;
  height: @heiht;
  border-@{borderpos1}: 0.025rem solid #02a6b5;
  border-@{borderpos2}: 0.025rem solid #02a6b5;
}
.container {
  margin: 15px .125rem;
  min-width: 24rem;
  // min-height: calc(100vh - 99px);
  background: url(../../assets/images/bg.jpg) no-repeat center top;
  background-size: 100% 100%;
}
.header {
  position: relative;
  background: url(../../assets/images/head_bg.png) no-repeat;
  background-size: cover;
  h1 {
    margin: 0;
    height: 1.25rem;
    text-align: center;
    color: #fff;
    font-size: 0.475rem;
    line-height: 1.25rem;
  }
  .show-time {
    position: absolute;
    right: 0.375rem;
    top: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.25rem;
    line-height: 1.25rem;
  }
}

.main-box {
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .column {
    flex: 3;
    &:nth-child(2) {
      margin: 0 0.125rem .1875rem;
      flex: 5;
    }

    .number {
      padding: .1875rem;
      background: rgba(101, 132, 226, 0.05);
      font-family: electronicFont;
      .count {
        position: relative;
        display: flex;
        align-items: center;
        border: 0.0125rem solid rgba(25, 186, 139, 0.27);
        height: 1rem;
        padding: 0.05rem 0;
        font-size: 0.875rem;
        line-height: 1rem;
        color: #ffeb7b;
        text-align: center;
        font-weight: bold;
        &::before {
          .clipborder(left, top, 0.375rem, 0.125rem);
        }
        &::after {
          .clipborder(right, bottom, 0.375rem, 0.125rem);
        }
        .digit-demand {
          position: relative;
          flex: 1;
          &::after {
            content: "";
            position: absolute;
            width: 0.0125rem;
            height: 50%;
            background: rgba(25, 186, 139, 0.17);
            right: 0;
            top: 25%;
          }
        }
        .digit-supply {
          flex: 1;
        }
      }
      .title {
        display: flex;
        margin-top: 0.125rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.225rem;
        line-height: .225rem;
        text-align: center;
        .title-demand {
          flex: 1;
        }
        .title-supply {
          flex: 1;
        }
      }
    }
  }
}

.chart-employment {
  height: 3rem;
}
.map {
  position: relative;
  height: 10.275rem;

  .map1,
  .map2,
  .map3 {
    position: absolute;
    width: 6.475rem;
    height: 6.475rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../../assets/images/map.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    width: 7.075rem;
    height: 7.075rem;
    background-image: url(../../assets/images/jt.png);
    animation: rotate1 10s linear reverse infinite;
  }
  .map3 {
    width: 8.0375rem;
    height: 8.0375rem;
    background-image: url(../../assets/images/lbx.png);
    animation: rotate1 15s linear infinite;
    opacity: 0.6;
  }

  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
</style>
