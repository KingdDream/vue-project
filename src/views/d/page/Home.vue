<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-31 17:33:19
 * @LastEditors: yangliang
 * @LastEditTime: 2021-02-01 16:50:36
-->

<template>
  <div id="container" ref="scroller">111</div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  mounted() {
   
  },
  methods: {
   
  },
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 400px;
}
</style>
