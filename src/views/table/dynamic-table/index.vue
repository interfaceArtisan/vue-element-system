<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      固定表头顺序，根据checkbox-group选中项，在已排序表头中寻找对应项
    </div>
    <fixed-thead />

    <div style="margin:30px 0 5px 20px">
      表头顺序不固定，由点击顺序决定，checkbox-group会根据点击顺序在后面追加
    </div>
    <unfixed-thead />
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'

export default {
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead }
}
</script>
