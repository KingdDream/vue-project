<template>
  <div class="box">
    <Header title="一码办店" ins="0" type="1" />
    <div :class="id==0?'red':id==1?'black':id==2?'blue':''"></div>
    <div class="content">
      <div class="subject">
        <div class="address">
          <span>北京翔达科技有限公司</span>
          <span>户号：0000906018</span>
          <span>用电地址：北京市城西区********100号</span>
        </div>
        <div>
          <span class="toUpdate">更新于：2020.07.16 15：37：50</span>
          <div class="QRcode">
            <div :style="{'border-color':id==0?'#da251d':id==1?'#333333':id==2?'#4a90e2':'#4a90e2'}">
              <vueQR
                :text="downloadData.url"
                :margin="0"
                :colorDark="id==0?'#da251d':id==1?'#333333':id==2?'#4a90e2':'#ffffff'"
                colorLight="#fff"
                :logoScale="0.3"
              />
            </div>
            <div v-if="ite==1" style="border-color:#4a90e2">
              <vueQR
                :text="downloadData.url"
                :margin="0"
                colorDark="#4a90e2"
                colorLight="#fff"
                :logoScale="0.3"
              />
            </div>
          </div>
          <span
            class="QRcodeType"
            :style="{'color':id==0?'#DA251D':id==1?'#333333':id==2?'#4A90E2':''}"
          >{{id==0?'红码':id==1?'黑码':'蓝码'}}</span>
          <span
            class="details"
            v-for="(item,index) in (id==0?red:id==1?black:id==2?blue:ary)"
            :key="index"
          >{{item}}</span>
          <span class="btn" @click="JumpPage(0)">二维码颜色说明</span>
        </div>
      </div>
      <span v-if="id==0?true:false" class="Overdue" @click="JumpPage(1)">超期电气试验</span>
      <span class="notes">注：此二维码可作为企业身份识别，如您对二维码结果有异议，可以联系当地营业厅进行咨询。</span>
    </div>
  </div>
</template>

<script>
import vueQR from "vue-qr";
export default {
  data() {
    return {
      id: 0,
      ite: 1,
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
          "优惠政策提示。根据疫情期国网阶段性电费优惠政策，你被列为“95优惠”客户，2020年2月-12月的电费可享受到原到户电费的95折优惠，无需申请，将在您的电费账单中体现",
      },
      downloadData: {
        url: "https://baidu.com/",
        icon: "", //随便一张图片的地址也行
        text: "", //	二维码内容
        size: "", //	二维码宽高大小，因为是正方形，所以设一个参数即可
        colorDark: "", //	实点的颜色，注意要和colorLight一起设置才有效
        colorLight: "", //	空白的颜色，注意要和colorDark一起设置才有效
        bgSrc: "", //	嵌入背景图地址，没什么卵用，不建议设置
        logoSrc: "", //	二维码中间的图，这个是好东西，设置一下显得专业点
        logoScale: "", //	中间图的尺寸，不要设太大，太大会导致扫码失败的
      },
    };
  },
  mounted() {
    this.creatQrCode();
  },
  components: {
    Header: () => import("@/components/header/Header"),
    vueQR: () => import("vue-qr"),
  },
  methods: {
    //将跳转页面
    JumpPage(x) {
      if (x == 0) {
        //跳转二维码颜色说明
        this.$router.push("/QRcodeColor");
      } else if (x == 1) {
        //跳转超期电气试验
        this.$router.push("/Overdue");
      }
    },
    creatQrCode() {

      
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
/* 切色 */
.red {
  height: 2.9rem;
  width: 100%;
  background: #da251d;
}
.black {
  height: 2.9rem;
  width: 100%;
  background: #333333;
}
.blue {
  height: 2.9rem;
  width: 100%;
  background: #4a90e2;
}
.content {
  position: absolute;
  top: 0.8rem;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
/* 主体 */
.subject {
  width: 100%;
  min-height: 6rem;
  margin-bottom: 0.2rem;
  border-radius: 0.3rem;
  background: #ffffff;
  padding: 0.2rem;
  box-sizing: border-box;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
.address {
  margin-bottom: 0.2rem;
  color: #262626;
}
.address span {
  display: inline-block;
  width: 100%;
  line-height: 0.5rem;
}
.address span:nth-child(1) {
  font-weight: bold;
}
.toUpdate {
  margin-top: 0.2rem;
  display: inline-block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.24rem;
  color: #8c8c8c;
  font-style: 0.2rem;
  text-align: center;
  position: relative;
}
.toUpdate::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #eeeeee;
}
.QRcode {
  display: block;
  width: 3rem;
  height: 3rem;
  margin: auto;
  position: relative;
}
.QRcode > div {
  width: 100%;
  height: 100%;
  border:0.01rem solid;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
}
.QRcode > div > img {
  display: block;
  width:2.78rem;
  height: 2.78rem;
}
.QRcode > div:nth-child(1){
  position: absolute;
  top: 0;
  left: 0;
}
.QRcode > div:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  border-left: 0;
  box-sizing: border-box;
}
.QRcode > div:nth-child(2)>img {
  position:absolute;
  right:0.08rem;

}
.QRcodeType {
  display: inline-block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
}
.details {
  display: inline-block;
  width: 100%;
  font-size: 0.24rem;
  line-height: 0.4rem;
  margin-bottom: 0.2rem;
  color: #595959;
}
.btn {
  display: inline-block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #0c82f1;
}
/* 超期电气试验 */
.Overdue {
  display: inline-block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  letter-spacing: 2px;
  background: #057cff;
  text-align: center;
  border-radius: 0.1rem;
  color: #ffffff;
}
/* 注释 */
.notes {
  display: inline-block;
  margin-top: 0.2rem;
  line-height: 0.36rem;
  box-sizing: border-box;
  color: #c4c4c4;
  font-size: 0.24rem;
}
</style>