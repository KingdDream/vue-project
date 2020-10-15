<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div
          class="van-cell"
          v-ripple
          v-for="(item,index) in list"
          :key="index"
          @mouseover="fn(Interface[index])"
        >
          <span>{{Interface[index].id}} 、{{Interface[index].text}}</span>
          <span></span>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import Vue from "vue";
import Ripple  from "vue-ripple-directive";
Vue.directive('ripple', Ripple);
Ripple.color = 'rgba(0, 0, 0, 0.05)'; //自定义水波纹颜色
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  props: ["Interface"],
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          if (this.list.length < this.Interface.length) {
            this.list.push(this.list.length + 1);
          }
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.Interface.length) {
          this.finished = true;
        }
      }, 1000);
    },
    fn(i) {
      
    },
  },
};
</script>
<style lang="less" scoped>
.van-cell {
  display: flex;
  text-align: left;
  color: #7a7a7a;
}
.van-cell > span:nth-child(1) {
  flex-grow: 1;
}
.van-cell > span:nth-child(2) {
  width: 10%;
  background: url(../images/toright.png) no-repeat;
  background-size: 35%;
}
</style>