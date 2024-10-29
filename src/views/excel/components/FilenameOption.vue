<template>
  <div style="display:inline-block;">
    <label class="radio-label" style="padding-left:0;">Filename: </label>
    <el-input v-model="filename" placeholder="Please enter the file name (default excel-list)" style="width:345px;" prefix-icon="el-icon-document" />
  </div>
</template>

<script>
export default {
  props: {
    originFilename: {
      type: String,
      default: ''
    }
  },
  computed: {
    filename: {
      get () {
        return this.originFilename
      },
      set (val) {
        this.$emit('update:originFilename', val)
      }
    }
  }
}
</script>
