<template>
  <div>
    <div>
      <div v-for="(item, index) in dataList" :key="index" style="float:left;z-index:100">
        <div v-for="(itemId, indexId) in item" class="sortName_a" :key="indexId">
          <button
            style="border:1px solid black;"
            :class="itemId.num==0?'nameBtn':itemId.num==1?'nameBtn1':'nameBtn'"
            :disabled="itemId.num==2?true:false"
            @click="sortNameClick(item,index,itemId,indexId)"
          >{{ itemId.compositionShortName }}</button>
        </div>
      </div>
    </div>
    <button style="border:1px solid black;" @click="fn">111111111111</button>
    <button style="border:1px solid black;" @click="fnn">222222222222</button>
  </div>
</template>

<script>
export default {
  name: "HunanJiao",
  data() {
    return {
      con: 0, //个数
      lat: [],
      nnnn: 0,
      aaaaaaaaa: [],
      dataList: [
        [
          { compositionShortName: "111", xaxis: 1, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "222", xaxis: 1, yaxis: 2, num: 0, id: 0 },
          { compositionShortName: "000", xaxis: 1, yaxis: 3, num: 0, id: 0 },
        ],
        [
          { compositionShortName: "ccc", xaxis: 2, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "bbb", xaxis: 2, yaxis: 2, num: 0, id: 0 },
        ],
        [
          { compositionShortName: "333", xaxis: 3, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "444", xaxis: 3, yaxis: 2, num: 0, id: 0 },
          { compositionShortName: "000", xaxis: 3, yaxis: 3, num: 0, id: 0 },
        ],
        [
          { compositionShortName: "555", xaxis: 4, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "666", xaxis: 4, yaxis: 2, num: 0, id: 0 },
        ],
        [
          { compositionShortName: "777", xaxis: 5, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "888", xaxis: 5, yaxis: 2, num: 0, id: 0 },
        ],
        [
          { compositionShortName: "999", xaxis: 6, yaxis: 1, num: 0, id: 0 },
          { compositionShortName: "000", xaxis: 6, yaxis: 2, num: 0, id: 0 },
        ],
      ],
    };
  },

  methods: {
    fn() {
      if (this.con == 2) {
        this.nnnn = 2;
        let a = JSON.parse(
          JSON.stringify(this.dataList[this.lat[0][0]][this.lat[0][1]])
        );
        let b = JSON.parse(
          JSON.stringify(this.dataList[this.lat[1][0]][this.lat[1][1]])
        );

        this.dataList[this.lat[0][0]][this.lat[0][1]].compositionShortName =
          b.compositionShortName;
        this.dataList[this.lat[1][0]][this.lat[1][1]].compositionShortName =
          a.compositionShortName;

        this.dataList = Object.assign({}, this.dataList, {}); // 深拷贝
        var arr = Object.values(this.dataList);

        arr.forEach((item) => {
          item.forEach((itemed) => {
            itemed.num = 0;
            itemed.id = 0;
          });
        });
        this.con = 0;
        this.lat = [];
        this.aaaaaaaaa = arr;
      }
    },
    fnn() {
      if (this.con == 2) {
        this.nnnn = 2;
        let a = JSON.parse(
          JSON.stringify(this.dataList[this.lat[0][0]][this.lat[0][1]])
        );
        let b = JSON.parse(
          JSON.stringify(this.dataList[this.lat[1][0]][this.lat[1][1]])
        );
        
        if (this.lat[0][0] == this.lat[1][0]) {
          if (this.lat[0][1] - this.lat[1][1] != -1 && this.lat[0][1] - this.lat[1][1]<=0) {
            this.dataList[this.lat[1][0]].splice(this.lat[1][1], 0, a);
            this.dataList[this.lat[0][0]].splice(this.lat[0][1],1);
          } else if(this.lat[0][1] - this.lat[1][1] > 0){
            this.dataList[this.lat[0][0]].splice(this.lat[0][1],1);
            this.dataList[this.lat[1][0]].splice(this.lat[1][1], 0, a);
          }
        } else if(this.dataList[this.lat[0][0]].length == 1) {
         
        }else {
          this.dataList[this.lat[0][0]].splice(this.lat[0][1], 1);
          this.dataList[this.lat[1][0]].splice(this.lat[1][1], 0, a);
        }

        this.dataList = Object.assign({}, this.dataList, {}); // 深拷贝
        var arr = Object.values(this.dataList);

        arr.forEach((item) => {
          item.forEach((itemed) => {
            itemed.num = 0;
            itemed.id = 0;
          });
        });
        this.con = 0;
        this.lat = [];
        this.aaaaaaaaa = arr;
      }
    },
    sortNameClick(v, i, item, index) {
      if (this.nnnn == 2) {
        this.dataList = this.aaaaaaaaa;
      }
      if (item.num == 1) {
        item.num = 0;
        this.con -= 1;
        if (item.id == 1) {
          this.lat.shift(1);
        } else if (item.id == 2) {
          this.lat.pop(1);
        }
      } else if (item.num == 0) {
        item.num = 1;
        this.con += 1;
        this.lat.push([i, index]);
      }
      item.id = this.con;

      if (this.con >= 2) {
        this.dataList.forEach((item) => {
          item.forEach((itemed) => {
            if (itemed.num == 0) {
              itemed.num = 2;
            }
          });
        });
      } else {
        this.dataList.forEach((item) => {
          item.forEach((itemed) => {
            if (itemed.num == 2) {
              itemed.num = 0;
            }
          });
        });
      }
    },
  },
  watch: {},
};
</script>
<style scoped>
.nameBtn1 {
  background: red;
}
</style>