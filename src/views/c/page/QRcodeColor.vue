<template>
  <div class="box">
    <Header title="二维码颜色说明" ins="0" type="0" />
    <div class="content">
      <div>代表您的用电状态正常。</div>
      <div>
        优惠政策提示。
        <span v-for="(item,index) in blue" :key="index">{{item}}</span>
      </div>
      <div>
        用电状态异常提示，代表您的用电状态可能存在以下一种或几种情况：
        <span v-for="(item,index) in red" :key="index">{{item}}</span>
      </div>
      <span class="notes">以上状态均供参考，最终解释权归电力公司所有。</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ary: [],
      red: {
        A:
          "A.安全性预警提示。您的用电计量装置可能存在异常，电力工作人员将于近期开展故障排查及维护。",
        B:
          "B.安全性预警提示。您的电气设备周期性预防试验已超期，请尽快完成电气试验，并告知您的客户经理。",
        C: "C.用能经济提示。您的无功补偿不达标，建议您及时调整无功补偿。",
        D:
          "D.用能经济性提示。在当前用电状况下您的电费计费方式不够经济，建议您结合企业未来实际用电情况，选择合理的计费方式。",
      },
      black: {
        A: "您的用电状态正常。",
      },
      blue: {
        A:
          "优惠政策提示。根据疫情期国网阶段性电费优惠政策，你被列为“95优惠”客户，2020年2月-12月的电费可享受到原到户电费的95折优惠，无需申请，将在您的电费账单中体现。",
      },
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
.content > div {
  width: 100%;
  font-weight: bold;
  font-size: 0.3rem;
  padding: 0 0.6rem;
  line-height: 0.4rem;
  padding-bottom: 0.26rem;
  box-sizing: border-box;
  position: relative;
}
.content > div::after {
  position: absolute;
  top: 2px;
  left: 0.2rem;
  content: "";
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
}
.content > div:nth-child(1)::after {
  background: black;
}
.content > div:nth-child(2)::after {
  background: blue;
}
.content > div:nth-child(3)::after {
  background: red;
}
.content > div > span {
  display: inline-block;
  width: 100%;
  font-size: 0.24rem;
  line-height: 0.3rem;
  font-weight: 100;
  margin-top: 0.1rem;
}
/* 注释 */
.notes {
  display: inline-block;
  margin-top: 0.2rem;
  line-height: 0.36rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
  color: #ccc;
  font-size: 0.24rem;
}
</style>