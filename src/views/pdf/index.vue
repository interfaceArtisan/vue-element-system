<template>
  <div class="app-container">
    <el-button
      type="primary"
      @click="loadPdf"
      v-loading.fullscreen.lock="loading"
      >加载pdf</el-button
    >
    <div ref="pdfViewer" class="pdf-viewer">
      <span>这里为pdf预览内容</span>
    </div>
  </div>
</template>

<script>
/**
 * 两种方式使用pdfjs-dist
 * 方式一：
 * import * as pdfjsLib from "pdfjs-dist/build/pdf";
 * pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.mjs`;
 *
 * 方式二：
 * import('pdfjs-dist/build/pdf.worker.mjs')
 * import * as pdfjsLib from "pdfjs-dist/build/pdf";
 *
 * 方式一，控制台不会报错，但是在调用pdfjsLib的接口时，worker文件从cdn下载，如果下载失败，无法正常加载，如果网速过慢，也会影响文件下载进而影响解析速度
 * 方式二：控制台会报setting up fake worker的warning，参考：https://github.com/mozilla/pdf.js/issues/10478
 */
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import('pdfjs-dist/build/pdf.worker.mjs')

// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.mjs`;

// 关于清晰度：https://mescalchuan.github.io/2021/03/25/2021-03-25-technology-pdf-img/ 和 https://blog.csdn.net/qq_45351419/article/details/113882420
export default {
  name: "Pdf",
  data() {
    return {
      loading: false,
    };
  },
  mounted() {},
  methods: {
    loadPdf() {
      this.loading = true;

      const pdfUrl = process.env.NODE_ENV === "production" ? "/vue-element-system/1.pdf" : "/1.pdf"; //具体路径由自身项目决定，另外这可能会涉及跨域问题可参照官网解决
      const UNITS = 1.75;
      const scale = 1.5;
      // 第 3 步：使用 PDFJS.getDocument（） 处理 pdf 文档
      pdfjsLib.getDocument(pdfUrl).promise.then((pdfDoc) => {
        const totalPages = pdfDoc.numPages; // pdf 的总页数
        const pdfViewer = this.$refs.pdfViewer; //html中需创建一个相应的div容器，用于存放canvas元素
        for (let i = 1; i <= totalPages; i++) {
          // 第4步：使用 pdfDoc.getPage（i） 获取第 i 页的数据
          pdfDoc.getPage(i).then((page) => {
            let scaledViewport = page.getViewport({ scale }); //可通过scale来调节初始的缩放比
            //第5步：创建一个 canvas 元素，并设置元素的画布属性
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "the-canvas" + i);
            canvas.height = scaledViewport.height * UNITS;
            canvas.width = scaledViewport.width * UNITS;
            let context = canvas.getContext("2d");

            let renderContext = {
              canvasContext: context,
              viewport: scaledViewport,
              transform: [UNITS, 0,0, UNITS, 0, 0],
            };
            //第 6 步: 使用 page.render 将数据渲染到画布上
            page.render(renderContext).promise.then(() => {});
            pdfViewer.appendChild(canvas); //将canvas元素加入到容器中

            if (i === totalPages) {
              this.loading = false;
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
.pdf-viewer canvas {
  margin-bottom: 10px;
}
</style>
