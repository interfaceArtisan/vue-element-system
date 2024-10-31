<template>
  <div class="app-container">
    <div class="container">
      <div class="desc">拖拽对话框,通过自定义指令实现</div>
      <DragDialog />
    </div>

    <div class="container">
      <div class="desc">通过sortablejs实现，拖拽多选框内容，调整选中项排序</div>
      <DragSelect />
    </div>

    <div class="container">
      <div class="desc">通过vuedraggable实现，列表中的内容可拖拽换位置</div>
      <DragKanBan />
    </div>

    <div class="container">
      <div class="desc">通过vuedraggable实现，左侧删除列表项会进入右侧，点击右侧列表项会进入左侧</div>
      <ComplexDragDrop />
    </div>

    <el-tooltip placement="top" content="返顶">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
    </el-tooltip>
  </div>
</template>

<script>
import DragSelect from "./drag-select";
import DragDialog from "./drag-dialog";
import DragKanBan from "./drag-kanban";
import ComplexDragDrop from "./complex-drag-drop";
import BackToTop from '@/components/BackToTop'

export default {
  name: "DragDrop",
  components: { DragSelect, DragDialog, DragKanBan, ComplexDragDrop, BackToTop },
  data() {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #61555538;
  padding: 20px;
  margin-bottom: 10px;

  .desc {
    margin-bottom: 10px;
    color: #999;
    font-size: 15px;
  }
}
</style>
