<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-12-18 20:20:51
 * @LastEditors: yangliang
 * @LastEditTime: 2020-12-28 17:30:29
-->
<template>
  <div class="amap-page-container">
      <el-amap
        vid="amapDemo"  
        :center="center"
        :zoom="zoom"  
        class="amap-demo"
        :events="events">
      </el-amap>
      <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
      </div>
    </div>
</template>

<script>
import AMap from 'vue-amap';

import Vue from 'vue';
Vue.use(AMap);


export default {
  name: "HunanJiao",
  data() {
    const self = this;
          return {
             zoom: 12,
          center: [121.59996, 31.197646],
          address: '',
          events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              self.lng = lng;
              self.lat = lat;
              
              self.center = [lng,lat]
               
            }
          },
          lng: 0,
          lat: 0
          }
  },
  created(){

      // 初始化vue-amap
      AMap.initAMapApiLoader({
        // 高德key
        key: '773833e5f66814f999c51bcfdeb02370',
        // 插件集合 （插件按需引入）
        plugin: ['Geocoder']
      });
  },
  mounted(){

    

   
  },
  methods: {
   
  },
  watch: {
   
  },
};
</script>
<style scoped>
.box {
  width: 500px;
  height: 500px;
  display: flex;
  border: 1px solid;
  margin: 100px auto;
  justify-content: space-between;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  position: relative;
  border-radius: 50%;
}
 .amap-demo {
      height: 300px;
    }
</style>