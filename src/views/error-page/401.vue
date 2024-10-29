<template>
  <div class="errPage-container">
    <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">
          Oops!
        </h1>
        gif来源<a href="https://zh.airbnb.com/" target="_blank">airbnb</a> 页面
        <h2 style="margin: 10px 0;">你没有权限去该页面</h2>
        <div style="font-size: 14px;">你可以去</div>
        <ul class="list-unstyled">
          <li class="link-type">
            <router-link to="/dashboard">
              回首页
            </router-link>
          </li>
          <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看图">
      <el-carousel trigger="click" height="450px" :interval="400000">
        <el-carousel-item v-for="url in urls" :key="url">
          <el-image
            style="width: 100%;height: 100%;"
            :src="url"
            fit="cover" />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data () {
    return {
      urls: [
        'https://img0.baidu.com/it/u=253072491,3521783971&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img0.baidu.com/it/u=3995006546,2760268670&fm=253&fmt=auto&app=138&f=JPEG?w=1563&h=500',
        'https://img1.baidu.com/it/u=1856599517,822145100&fm=253&fmt=auto&app=138&f=JPEG?w=960&h=312',
        'https://img0.baidu.com/it/u=1135885656,1434929955&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=162'
      ],
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back () {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .errPage-container {
    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none!important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
