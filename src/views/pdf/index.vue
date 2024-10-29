<template>
  <div class="app-container">
    <aside style="margin-top: 15px">
      Here we use window.print() to implement the feature of downloading PDF.
    </aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary"> Click to download PDF </el-button>
    </router-link>
    <div id="canvasContainer"></div>
  </div>
</template>

<script>
// import * as pdfjsLib from 'pdfjs-dist/webpack.mjs'
// import * as PDFJS from "pdfjs-dist";
// import pdfjsWorker from "~pdfjs-dist/build/pdf.worker.js";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// export default {
//   name: "Pdf",
//   // mounted() {
//   //   const pdfUrl = "../../assets/staticFiles/wuhandaxue.pdf"; //具体路径由自身项目决定，另外这可能会涉及跨域问题可参照官网解决
//   //   console.log(pdfUrl);
//   //   // 第 3 步：使用 PDFJS.getDocument（） 处理 pdf 文档
//   //   PDFJS.getDocument(pdfUrl).promise.then((pdfDoc) => {
//   //     const totalPages = pdfDoc.numPages; // pdf 的总页数
//   //     const canvasContainer = document.getElementById("#canvasContainer"); //html中需创建一个相应的div容器，用于存放canvas元素
//   //     // for (let i = 1; i <= totalPages; i++) {
//   //     //   // 第4步：使用 pdfDoc.getPage（i） 获取第 i 页的数据
//   //     //   pdfDoc.getPage(i).then((page) => {
//   //     //     let scaledViewport = page.getViewport({ scale: 1.5 }); //可通过scale来调节初始的缩放比
//   //     //     //第5步：创建一个 canvas 元素，并设置元素的画布属性
//   //     //     let canvas = document.createElement("canvas");
//   //     //     canvas.setAttribute("id", "the-canvas" + i);
//   //     //     canvas.height = scaledViewport.height;
//   //     //     canvas.width = scaledViewport.width;
//   //     //     let context = canvas.getContext("2d");
//   //     //     let renderContext = {
//   //     //       canvasContext: context,
//   //     //       viewport: scaledViewport,
//   //     //     };
//   //     //     //第 6 步: 使用 page.render 将数据渲染到画布上
//   //     //     page.render(renderContext).promise.then(() => {});
//   //     //     canvasContainer.appendChildren(canvas); //将canvas元素加入到容器中
//   //     //   });
//   //     // }
//   //   });
//   // },
// };
</script>
