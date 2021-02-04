<!--
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-12-18 20:20:51
 * @LastEditors: yangliang
 * @LastEditTime: 2020-12-22 20:23:45
-->
<template>
  <div class="box">
    <!-- 时 -->
    <div>
      <span v-for="(item,index) in hour" :key="index" :style="{'transform':'rotate('+(360/12)*index+'deg)'}"><span></span></span>
    </div>
    <!-- 分 -->
    <div>
      <span v-for="(item,index) in minute" :key="index" :style="{'transform':'rotate('+(360/60)*index+'deg)'}"><span></span></span>
    </div>
    <!-- 秒 -->
    <div>
       <p class="hour"></p>
       <p class="minute"></p>
       <p class="second"></p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HunanJiao",
  data() {
    return {
      value: 10,
     hour:12,
      minute:60,
      second:60,
      dark:{
        name:'1',
        age:2

      },
      data:new Date(),
      //
      a:null,
      num : 100,
      darkShow:false,
      Milliseconds:0,
      getHours:0,
      getMinutes:0,
      getSeconds:0,
    };
  },
  mounted(){


    this.getHours = this.data.getHours()
     this.getMinutes = this.data.getMinutes()
      this.getSeconds = this.data.getSeconds()
    
    this.Milliseconds = this.data.getUTCMilliseconds()
    let set =999 - this.Milliseconds;
    setTimeout(()=>{
      setInterval(() => {
         this.getSeconds++;
        if(this.getSeconds == 60){
          this.getMinutes++;
          this.getSeconds = 0
        }
        if(this.getMinutes == 60){
          this.getHours++
          this.getMinutes = 0
        }
         if(this.getHours == 12){
          this.getHours = 0
        }
      }, 1000);
      
    },set)
  },
  methods: {
   
    
  },
  watch: {
    getHours(val){
// console.log('getHours',val)
    },
getMinutes(val){
// console.log('getMinutes',val)
},
getSeconds(val){
// console.log('getSeconds',val)
console.log('北京时间'+this.getHours+':'+this.getMinutes+':'+this.getSeconds)
},
  },
};
</script>
<style scoped>
.box {
  
  width: 500px;
  height: 500px;
  display: flex;
  border:  1px solid;
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
  border-radius:50%;
}
.box>div{
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius:50%;
}
.box>div:nth-child(2){
  /* width: 50%;
  border-radius:50% 0;
  background: royalblue; */
}
.box>div>span{
  position:absolute;
  top:0;
  left:50%;
  margin-left: -0.5px;
  width:1px;
  height: 100%;
  /* background: red; */
  text-align: center;
}
.box>div:nth-child(2)>span{
  /* background: red; */
}
.box>div:nth-child(2)>span>span{
  position: absolute;
  top: 0;
  left:0;
  width:1px;
  height:10px;
  background: red;
}
.box>div:nth-child(1)>span>span{
  position: absolute;
  top: 0;
  left:0%;
  width: 2px;
  height: 20px;
  margin-left: -1px;
  text-align: center;
  background: red;
  
}
.hour{
  position: absolute;
  top:15%;
  left:50%;
  margin-left: -4px;
  width: 8px;
  height: 30%;
  background: red;
}
.minute{
  position: absolute;
  top:10%;
  left:50%;
  margin-left: -3px;
  width: 6px;
  height: 35%;
  background: rgb(61, 7, 189);
}
.second{
  position: absolute;
  top:5%;
  left:50%;
  margin-left: -2px;
  width: 4px;
  height: 40%;
  background: rgb(0, 255, 55);
}


</style>