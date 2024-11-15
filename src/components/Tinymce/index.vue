<template>
  <Editor
    v-model="editorContent"
    api-key="ak7szyqet6bll6p7aj48a4jf45jteuunbktmnea56fei37gu"
    :init="editorConfig"
  />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    Editor,
  },
  props: ['content'],
  data() {
    return {
      editorConfig: {
        plugins: "lists link image table code help wordcount",
        language: "zh_CN",
        height: 300,
        max_height: 600, // 拖拽右下角区域时的最大高度
        branding: false,
        placeholder: "请输入内容",
        // 上传图片
        images_upload_handler: function (blobInfo, succFun, failFun) {
          const file = blobInfo.blob(); //转化为易于理解的file对象
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "http://192.168.0.103:8080/upload_file");
          xhr.onload = function () {
            if (xhr.status != 200) {
              failFun("HTTP Error: " + xhr.status);
              return;
            }
            const json = JSON.parse(xhr.responseText);
            if (!json || typeof json.location != "string") {
              failFun("Invalid JSON: " + xhr.responseText);
              return;
            }
            succFun(json.location);
          };
          const formData = new FormData();
          formData.append("file", file, file.name); //此处与源文档不一样
          xhr.send(formData);
        },
        // 编辑器第二行是工具栏
        toolbar: [
          //数组写法 数组有多个的话，工具栏会显示成多行
          "numlist bullist | hr |undo redo | styleselect | bold italic | link image | alignleft aligncenter alignright",
        ],
      },
    };
  },
  computed: {
    editorContent: {
      get() {
        return this.content;
      },
      set(newVal) {
        this.$emit("update:content", newVal);
      }
    }
  }
};
</script>

