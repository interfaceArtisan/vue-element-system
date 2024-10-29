<template>
    <div class="panel">
        <h2>{{ title }}</h2>
        <slot name="chart"></slot>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: String
  }
}
</script>

<style lang="less">
// 设置边框border
.clipborder(@borderpos1, @borderpos2, @width: .125rem, @heiht: .125rem) {
    content: '';
    position: absolute;
    @{borderpos1}: 0;
    @{borderpos2}: 0;
    width: @width;
    height: @heiht;
    border-@{borderpos1}: .025rem solid #02a6b5;
    border-@{borderpos2}: .025rem solid #02a6b5;
}
.panel {
    position: relative;
    height: 3.875rem;
    padding: 0 .1875rem .5rem;
    margin-bottom: .1875rem;
    border: 1px solid rgba(25, 186, 139, .17);
    background: url(../../assets/images/line.png) rgba(255, 255, 255, .04);
    &::before {
        .clipborder(left, top);
    }
    &::after {
        .clipborder(right, top);
    }

    h2 {
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        font-size: .25rem;
        font-weight: 400;
        color: #fff;
    }
    .panel-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        &::before {
            .clipborder(left, bottom);
        }
        &::after {
            .clipborder(right, bottom);
        }
    }
}
</style>
