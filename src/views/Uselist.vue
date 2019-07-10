<template>
  <div>
    <Input v-model="orderno" placeholder="Enter something..." clearable style="width: 200px" class="mar" />
     <Button type="primary" shape="circle" icon="ios-search" class="mar" @click="serch"></Button>
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click.native="show(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
    <Page :total="100" show-sizer @on-change="changepage" class=".mar"/>
  </div>
</template>
<script>
import { sListApi } from "@/api/index.js";
export default {
  mounted() {
    this.initdata();
  },
  data() {   
    return {
      pageno:1,
      orderno:"",
       value: '',
        data6: [],
      columns12: [
         {
          title: "编号",
          key: "id"
        },
        {
          title: "订单号",
          key: "order_no"
        },
        {
          title: "数量",
          key: "total_num"
        },
        {
          title: "价格",
          key: `total_price`
        },
        {
          title: "更改",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
    };
  },
  methods: {
    //分页
    //制动有一个形参代表第几页
    changepage(pageno){
   this.pageno=pageno,
   this.initdata()
    },
    //搜索
    serch(){
     this.initdata()
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `价格：<input  style='margin-bottom:20px'></input><br>数量：<input ></input>`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
  initdata() {
    sListApi({
      orderno:this.orderno,
       pageno:this.pageno,   
      }).then(res => {
        this.data6=(res.data);
      })
  },
}
}
</script>
<style scoped>
.mar{
    margin: 10px 0 10px 5px
}
</style>
