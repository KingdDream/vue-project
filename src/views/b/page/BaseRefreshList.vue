<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-waves v-for="(item,index) in list" :key="index" :title="Interface[index].OperateType" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      Interface: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
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
        for (let i = 0; i < 20; i++) {
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
    }
    
    
  },
};
</script>
<style lang="less" scoped>

</style>