<template>
  <div class="box">
    <Header title="结果" ins="0" type="0" />
    <div class="content">
      <svg
      v-if="ins"
        t="1595922596490"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4168"
      >
        <path
          d="M510.8 103.9c-225.5 0-408.4 182.8-408.4 408.4 0 225.5 182.8 408.4 408.4 408.4 225.5 0 408.4-182.8 408.4-408.4 0-225.5-182.8-408.4-408.4-408.4z m229.8 310.9L499.7 655.7c-6.4 6.4-14.7 9.5-23 9.5s-16.7-3.1-23-9.5L316.2 518.3c-12.7-12.7-12.7-33.2 0-45.9 12.7-12.7 33.2-12.7 45.9 0l114.5 114.5 218-218c12.7-12.7 33.2-12.7 45.9 0 12.8 12.7 12.8 33.3 0.1 45.9z"
          fill="#3259CE"
          p-id="4169"
        />
      </svg>
      <svg
        v-if="!ins"
        t="1595921328192"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4621"
      >
        <path
          d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"
          fill="#E84335"
          p-id="4622"
        />
      </svg>
      <span>{{ins==true?'上传成功':'上传失败'}}</span>
      <span>我知道了</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ins: true,
    };
  },
  mounted() {},
  components: { Header: () => import("@/components/header/Header") },
  methods: {
    fn() {
      this.$router.go(-1);
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
  padding-top: 1rem;
  box-sizing: border-box;
}
.content svg {
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 1rem auto 0.2rem;
}
.content > span:nth-child(3) {
  display: block;
  width: 70%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #057cff;
  border-radius: 0.4rem;
  text-align: center;
  font-size: 0.3rem;
  margin: 1rem auto;
  color: #ffffff;
}
.content > span:nth-child(2) {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
}
</style>