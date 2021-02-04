<template>
  <div class="box">
    <div class="list left" @scroll="scrollBox($event,1)" >
      <div class="leftList" v-for="(item, index) in left" :key="index" v-on:mousedown="MOUSEDOWN($event,item,index)">
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </div>
      <div class="darked" ref="darked" v-show="darkShow">
        <span>{{ dark.name }}</span>
        <span>{{ dark.age }}1</span>
      </div>
    </div>
    <div class="list right" @scroll="scrollBox($event,2)" v-on:mousemove="MOUSEMOVE($event,1)">
      <div class="rightList" v-for="(item, index) in right" :key="index"  v-on:mousemove="MOUSEMOVE($event,2)">
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HunanJiao",
  data() {
    return {
      value: 10,
      left: [
        { name: "张大", age: 16 },
        { name: "张二", age: 26 },
        { name: "张三", age: 36 },
        { name: "张四", age: 26 },
        { name: "张五", age: 16 },
        { name: "张六", age: 46 },
        { name: "张七", age: 56 },
        { name: "张八", age: 16 },
         { name: "张六", age: 46 },
        { name: "张七", age: 56 },
        { name: "张八", age: 16 },
         { name: "张六", age: 46 },
        { name: "张七", age: 56 },
        { name: "张八", age: 16 },
      ],
      right: [
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
        { name: "名字", age: "年龄" },
      ],
      //拖拽坐标
      positionX:0,
      positionY:0,
      //滚动高度
      leftTop:0,
      rightTop:0,
      //
      dark:{
        name:'1',
        age:2

      },
      //
      a:null,
      num : 100,
      darkShow:false,
    };
  },

  methods: {
    MOUSEDOWN(e,item,index){
      let that = this;
      let div = e.target;
      let x = null;
      let y = null;
    

      //选中list的坐标
      let xy = document.getElementsByClassName('leftList')[index];
      let right = document.getElementsByClassName('rightList');

      if(e.target.className != 'leftList'){
        div = e.path[1]

      }
       x = e.clientX - div.offsetLeft;
       y = e.clientY - div.offsetTop;
      console.log(x,y,e.clientX,e.clientY)

      //修改拖拽的数据
      that.dark = item;
      that.darkShow = true;

      that.$refs.darked.style.left = xy.offsetLeft + 'px'
      that.$refs.darked.style.top = (xy.offsetTop - that.leftTop) + 'px'
      
      //
      document.onmousemove = (e) =>{
        let left = e.clientX - x;
        let top = e.clientY - y;
        
        that.$refs.darked.style.left = left + 'px';
        that.$refs.darked.style.top = (top - that.leftTop) + 'px';

        for(var i = 0; i<right.length;i++){

          if(left>=right[i].offsetLeft&&(right[i].offsetLeft + that.num)>left && (top + that.rightTop) >= right[i].offsetTop && (right[i].offsetTop +that.num)>(top + that.rightTop)){
            that.a = i ;
          }
        }

      }

      document.onmouseup = (e) => {

        that.darkShow = false;

        if(that.a != null){
          //视图不更新解决
          that.$forceUpdate();
          that.right[a] = item;
        }
        
        document.onmousemove = null
        document.onmouseup = null
      }

    },
    MOUSEMOVE(e,x){
      let that = this;
      window.event? window.event.cancelBubble = true : e.stopPropagation();
      if(x == 1){
        that.a = null;
      }

    },
    scrollBox(e,x){
      let that = this;
      if(x == 1){
        that.leftTop = e.srcElement.scrollTop

      }else{
        that.rightTop = e.srcElement.scrollTop
      }
    }
    
  },
  watch: {},
};
</script>
<style scoped>
.box {
  
  width: 100%;
  display: flex;
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
}
.list {
  flex: 1;
  height: 800px;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.darked{
  position: fixed;
  top: 0;
  left:0;
   width: 500px;
  height: 60px;
  z-index:999999;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
}
.leftList {
  width: 500px;
  height: 60px;
  /* cursor: move; */
  border: 1px solid #eee;
  box-sizing: border-box;
  
}
.rightList {
  width: 100px;
  height: 100px;
  /* cursor: move; */
  border: 1px solid #eee;
  margin: 40px;
  box-sizing: border-box;
}
.rightList>span{
  line-height: 40px;
  display: block;
  text-align: center;
}
</style>