<template>
  <div class="box">
    <Header title="超期电气试验" ins="0" type="0" />
    <div class="content">
      <div>
        <img id="images_A" src="#" alt srcset />
        <input
          id="FILE_A"
          type="file"
          accept="image/*"
          @change="UPLOAD($event,'images_A','FILE_A')"
        />
      </div>
      <div>
        <img id="images_B" src="#" alt srcset />
        <input
          id="FILE_B"
          type="file"
          accept="image/*"
          @change="UPLOAD($event,'images_B','FILE_B')"
        />
      </div>
      <span @click="JumpPage">上传</span>
    </div>
  </div>
</template>

<script>
const os = require('os');
export default {
  data() {
    return {
      imgList: [],
      datas: new FormData(),
      //上传文件区间
      fileMax: 2048000,
      fileMin: 100,
    };
  },
  components: { Header: () => import("@/components/header/Header") },
  methods: {
    fn() {
      this.$router.go(-1);
    },
    //上传图片
    UPLOAD(e, img, id) {
      //选中第一个图片
      let files = document.getElementById(id).files[0];
      //判断是否选中图片否则跳出
      if (!files) {
        return false;
      }
      //判断文件大小是否在区间内
      if (files.size > this.fileMax || files.size <= this.fileMin) {
        this.$toast(
          files.size >= this.fileMax ? "当前文件过大" : "当前文件过小"
        );
        return false;
      }

      //转码base64
      let reader = new FileReader();
      let imgFile;
      reader.readAsDataURL(files);
      reader.onload = (e) => {
        imgFile = e.target.result;
        document.getElementById(img).setAttribute("src", imgFile);
        console.log(imgFile);
      };
    },
    JumpPage() {
      this.$router.push("/UploadSuccessful");
    },
    
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
  padding: 1rem 0.2rem 0;
  box-sizing: border-box;
}
.content > div {
  width: 100%;
  height: 3rem;
  margin-bottom: 0.5rem;
  border: 1px solid;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
#FILE_B,
#FILE_A {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  opacity: 0;
}
.content > div > img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.content > span {
  display: block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #057cff;
  border-radius: 0.1rem;
  text-align: center;
  font-size: 0.3rem;
  margin: 1rem auto;
  color: #ffffff;
}
</style>