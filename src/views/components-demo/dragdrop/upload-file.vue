<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action="https://httpbin.org/post"
      :show-file-list="true"
      :before-upload="handleBeforeUpload"
      :on-change="handleChange"
      :on-success="handleSuccess"
      list-type="picture"
      :file-list="successFileList"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div v-if="fileList.length > 0" class="el-upload__tip">
        支持jpg, jpeg, png, gif格式，且不超过500KB
      </div>
    </el-upload>
    <div v-if="fileList.length > 0" class="image-preview">
      <h6 style="margin: 10px 10px 0">
        预览图片，本地预览，图片上传之前就可预览：
      </h6>
      <div class="image-wrapper">
        <img
          v-for="(file, index) in fileList"
          :key="index"
          :src="file.url"
          alt=""
          style="width: 100px; height: 100px; margin: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Dropzone from "@/components/Dropzone";

export default {
  name: "DropzoneDemo",
  components: { Dropzone },
  data() {
    return {
      fileList: [],
      successFileList: [],
    };
  },
  methods: {
    handleBeforeUpload(file) {
      return true;
      const isImage = file.type.startsWith("image/");
      const isLt500K = file.size / 1024 / 1024 < 0.5;

      if (!isImage) {
        this.$message.error("上传文件只能是图片!");
      }
      if (!isLt500K) {
        this.$message.error("上传图片大小不能超过 500KB!");
      }

      return isImage && isLt500K;
    },
    handleChange(file, fileList) {
      // 读取文件并生成预览URL
      fileList.forEach((file) => {
        if (!file.url && file.raw) {
          const reader = new FileReader();
          reader.onload = (e) => {
            file.url = e.target.result;
          };
          reader.readAsDataURL(file.raw);
        }
      });

      // 更新fileList
      this.fileList = fileList.map((file) => ({
        ...file,
        url: file.url || "",
      }));
    },
    handleSuccess(response, file, fileList) {
      // 文件上传成功后，图片墙相对应的文件又上角会出现绿色的对勾
      // 处理上传成功后的逻辑
      // console.log("上传成功", response, file, fileList);
      // this.successFileList.push({
      //   url: response.files.file,
      //   name: "test",
      // });
      // console.log(this.successFileList);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-preview {
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 10px;
}
</style>
