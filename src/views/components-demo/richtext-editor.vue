<template>
  <div class="container" style="margin: 20px">
    <el-card style="background-color: #13ce6603; margin-bottom: 20px">
      <h6>
        富文本编辑器Tinymce:
        <el-link href="https://tinymce.ax-z.cn/" target="_blank" type="primary"
          >http://tinymce.ax-z.cn/</el-link
        >
      </h6>
      <p>
        在这个示例中，使用了两个富文本编辑器，第一个采用inline模式，第二个采用normal模式(编辑器渲染后为iframe，实现起来相对没用那么多问题)
      </p>
      <p>
        示例一中配置了菜单、工具栏、内容区样式、汉化、图片上传、自定义icon等，示例一存在的问题：如果在编辑器已有内容中间或头部再插入其他内容，滚动条不会自动滚到编辑区域
      </p>
      <p>
        示例二只做了简单配置：插件、高度、最大高度等，菜单栏和工具栏使用默认配置
      </p>
    </el-card>
    <el-row>
      <div id="toolbar"></div>
      <div
        ref="editorContainer"
        class="editor-container"
        style="background-color: #fee; height: 100px; overflow-y: auto"
      >
        <Editor
          v-model="content1"
          api-key="ak7szyqet6bll6p7aj48a4jf45jteuunbktmnea56fei37gu"
          :init="editor1Config"
        />
      </div>
    </el-row>

    <br />
    <hr />
    <el-row style="margin-top: 20px">
      <Editor
        v-model="content2"
        api-key="ak7szyqet6bll6p7aj48a4jf45jteuunbktmnea56fei37gu"
        :init="{
          plugins: 'lists link image table code help wordcount',
          language: 'zh_CN',
          height: 300,
          max_height: 600, // 拖拽右下角区域时的最大高度
          branding: false,
        }"
      />
    </el-row>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    Editor,
  },
  data() {
    return {
      content1: "",
      content2: "初始内容",
      editor1Config: {
        plugins: "lists link image table code help wordcount hr",
        inline: true,
        toolbar_persist: true,
        fixed_toolbar_container: "#toolbar",
        language: "zh_CN",
        placeholder: "请输入内容",
        content_style: `p {margin: 5px; padding: 3px; font-size: 16px;}
          .mce-content-body::before {font-size: 16px; padding-left: 8px;top: 50%;transform: translateY(-50%);}
        `,
        icons: "myicons",
        icons_url: "/myicons/icons.js",
        // 编辑器第一行是菜单
        menu: {
          file: { title: "文件", items: "newdocument" },
          edit: {
            title: "编辑",
            items: "undo redo | cut copy paste pastetext | selectall",
          },
          insert: { title: "插入", items: "link media | template hr" },
          view: { title: "查看", items: "visualaid" },
          format: {
            title: "格式",
            items:
              "bold italic underline strikethrough superscript subscript | formats | removeformat",
          },
          table: {
            title: "表格",
            items: "inserttable tableprops deletetable | cell row column",
          },
          tools: { title: "工具", items: "spellchecker code" },
        },
        // images_upload_url: "https://httpbin.org/post",
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
      editor2Config: {
        plugins: "lists link image table code help wordcount",
        language: "zh_CN",
        height: 300,
        max_height: 600, // 拖拽右下角区域时的最大高度
        branding: false,
      },
    };
  },
  watch: {
    content1(newVal, oldVal) {
      // 确保在文本内容变更后，滚动条滚动到底，显示最底部的内容
      this.$nextTick(() => {
        const ele = this.$refs.editorContainer;
        // 假如在尾部插入
        const newIndex = oldVal.indexOf(newVal);
        // 假如在尾部删除
        const oldIndex = newVal.indexOf(oldVal);

        // 这里只是实现了在尾部插入和尾部删除时，滚动条滚动到底，如果在中间进行编辑，滚动条还是有问题
        if (newIndex === 0 || oldIndex === 0) {
          ele.scrollTop = ele.scrollHeight;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container p {
  font-size: 16px;
  color: #747070;
  margin: 5px;
  padding: 3px;
}
.editor-container {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
