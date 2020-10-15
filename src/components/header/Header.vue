<template>
  <div class="title" :id="type==0?'boderShow':''">
    <svg @click="fn" xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
      <path fill="#6D6D6D" fill-rule="evenodd" d="M5.5 11L0 5.5 5.5 0v2L2 5.5 5.5 9z" />
    </svg>
    {{title}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      MSG: "",
    };
  },
  // props:['title','ins','type'],
  props: {
    title: {
      type: String,
      required: true,
    },
    ins: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  mounted() {},
  components: {},
  methods: {
    fn() {
      if (this.ins == 0) {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style scoped>
/* 头部 */
.title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  letter-spacing: 2px;
  background: #ffffff;
  text-align: center;
  font-weight: bold;
  z-index: 999;
}
#boderShow {
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.title > svg {
  position: absolute;
  top: 50%;
  left: 0.2rem;
  margin-top: -0.1rem;
  /* width: 0.4rem; */
  /* height: 0.4rem; */
}
</style>