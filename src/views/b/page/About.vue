<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:28
 * @LastEditors: yangliang
 * @LastEditTime: 2020-12-18 19:57:54
-->
<template>
  <div id="box">
    <div></div>
   <div class="a"></div>
   <div class="b">
     <div>
       <BaseRefreshList v-if="show" :Interface='Interface'/>
       <div v-if="!show">加载中</div>
     </div>
   </div>
   <div class="c"></div>
  </div>
</template>
<script>
import { apiUrl } from "../../../request/api";
export default {
  data() {
    return {
      show:false,
      Interface: [],
    };
  },
  components:{
    BaseRefreshList:()=>import('@/components/BaseRefreshList')
  },
  mounted() {
    this.FoodSortOperateType();
  },

  methods: {
    FoodSortOperateType() {
      let data = {
        appIds: "8151F186-E6F8-4C98-BB73-08163279C740",
        userId: "9c0d7c2a-45db-4b12-be26-86f24902ee74",
        Code: "",
      };
      apiUrl.FoodSortOperateType(data).then((res) => {
        this.show = true
        res.SCater.Data.FoodSortOperateType_A.forEach((element,index) => {
          if(index<55){
            this.Interface.push({
              id:index+1,
              text:element.OperateType,
              url:element.OperateType
            })
          }
        });
      });
    },
    fn(){
      window.onscroll = function() {
                var t2 = document.body.scrollHeight;
                var t1 = document.documentElement.scrollTop || document.body.scrollTop;
                var t = t2 - t1;
                console.log(t);
                var oBox = document.getElementById("box");
                if (t <= 700) {
                    oBox.className = 'box-b';
                } else {
                    oBox.className = 'box-t';
                }
            };
    }
  },
};
</script>
<style lang="less" scoped>
#box{
  width: 100%;
  position: relative;
}
.a{
  width: 100%;
  height:100px;
  position: fixed;
  background: red;
  z-index: 111;
  top: 0;
  }
  .c{
  width: 100%;
  height:100px;
  position: fixed;
  background: red;
  bottom: 0;
  }
  .b{
  width: 100%;
  position: absolute;
  top: 100px;
  }

</style>