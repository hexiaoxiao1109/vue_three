<template>
  <div class="goods">
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>

    <Input
      @click.native="search"
      v-model="title"
      search
      enter-button
      placeholder="Enter something..."
      style="width:300px"
    />
    <Input v-model="id" placeholder="id" style="width:100px" />
    <Input v-model="title1" placeholder="title" style="width:100px" />
    <Input v-model="num" placeholder="num" style="width:100px" />
    <Input v-model="price" placeholder="price" style="width:100px" />
    
    <Button type="info" @click="addgoods">增加</Button>
    <Button type="success" @click="changegoods">修改</Button>
    

    <Table border :columns="columns7" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
          <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>

    <Page :total="100" @on-change="changepage" />
  </div>
</template>
<script>
import { goodsListApi, goodsListadd, goodsListdel,goodsListchange} from "@/api";

export default {
  data() {
    return {
      columns7: [
        {
          title: "id",
          key: "id"
        },
        {
          title: "商品",
          key: "title"
        },
        {
          title: "数量",
          key: "num"
        },
        {
          title: "价格",
          key: "price"
        },
        {
          title: "图片",
          key: "img"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [],
      //存放商品列表接口参数
      title: "",
      pageno: 1,
      title1: "",
      num: "",
      price: "",
      id:'',

    };
  },
  methods: {
    search() {
      this.init();
    },
    addgoods() {
      goodsListadd({
        title: this.title1,
        price: this.price,
        num: this.num
      }).then(res => {
        this.init();
      });
    },
    remove(index) {
      goodsListdel({
        id:this.data6[index].id
      }).then(res=>{
        this.data6.splice(index, 1),
        this.init()
      })
    },
    changegoods(){
      // alert(2)
      goodsListchange({
        id:this.id,
        title: this.title1,
        price: this.price,
        num: this.num
      }).then(res => {
        this.init();
      
      });
    },
    //分页
    changepage(pageno) {
      this.pageno = pageno;
      this.init();
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Title：<Input value='${this.data6[index].title}'></Input><br>
                  Num：<Input value='${this.data6[index].num}'></Input><br>
                  Price：<Input value='${this.data6[index].price}'></Input><br>
                  Img：<Input value='${this.data6[index].img}'></Input>
                  `
      });
    },
    init() {
      //1.导入接口
      //2.调用
      goodsListApi({
        title: this.title,
        pageno: this.pageno
      }).then(res => {
        console.log(res);
        this.data6 = res.data;
      });
    }
  },
  created() {
    this.init();
  }
};
</script>
 
<style scoped>
</style>