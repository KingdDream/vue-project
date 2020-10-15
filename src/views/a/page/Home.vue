<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-09-29 18:28:37
-->

<template>
  <div class="home">
    <!-- <HelloWorld :msg="this.$store.state.msg"/> -->
    <div class="scroller" ref="scroller">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
        <div class="detailsCenter" v-for="(item,index) in myInstalHomeData" @click="toRepayInDetails(item.orderNo)" :key="index"></div>
      </scroller>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {apiUrl} from '../../../request/api'
export default {
  name: 'Home',
  components: {
    HelloWorld:()=>import('@/components/HelloWorld.vue')
  },
  created(){
this.demo()
  },
  methods:{
    myInstalHomeFun(done){
      if(this.isLoading){
        this.isLoading = false;
        common.Ajax({
          'url':api.KY_IP+'XXXX',
          'data':{
            'customerNo':this.customerNo,
            'skip':this.page
          },
          showLoading:false
        },(data)=>{
          if(data.datas.orderList.length>0){
            done(1)
          }else{
            done(2)
          }
        })
      }else{
        done(2)
      }
    },
    refresh(done){
      let timer = null;
      this.page = 1;
      clearTimeout(timer);
      timer = setTimeout(()=>{
        this.myInstalHomeFun(done)
      },500)
    },
    infiite(done){
      let timer = null;
      clearTimeout(timer);
      timer = setTimeout(()=>{
        this.myInstalHomeFun(done)
      },500)
    },
    getHeight(){
      let bodyHeight = document.documentElement.clientHeight;
      let scroller = this.$refs.scroller;
      let scrollerTop = scroller.getBoundingClientRect().top;
      scroll.sty.height = (bodyHeight - scrollerTop )+"px"
    },
    demo(){
      let data ={
        Code:'all',
        AppId:'24830a2b-a6ae-462c-869d-b045ea2300ee'
      }
      apiUrl.demo(data).then(res => {
      
    if
    
    }
  }
}
</script>
