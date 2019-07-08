<template>
  <div>
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)" v-model="data6">删除</Button>
        </template>
    </Table>
    <Page :total="100" show-sizer />
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
        data6: [],
      columns12: [
        {
          title: "订单号",
          key: "order_no"
        },
        {
          title: "商品",
          key: "goods_name"
        },
        {
          title: "数量",
          key: "goods_number"
        },
        {
          title: "价格",
          key: `goods_price`
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
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `价格：<input value='${this.data6[index].goods_price}' style='margin-bottom:20px'></input><br>数量：<input value='${this.data6[index].goods_number}'></input>`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
  initdata() {
    sListApi({
      }).then(res => {
          console.log(res)
        this.data6=(res.data);
      })
  },
}
}
</script>