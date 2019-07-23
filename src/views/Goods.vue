<template>
  <div class="goods">
    <!-- 输入框 -->
    <Input v-model="title" placeholder="Enter something..." clearable style="width: 200px" class="mar" />
    <!--搜索按钮 -->
     <Button type="primary" shape="circle" icon="ios-search" class="mar" @click="search"></Button>

    <!-- 修改的模态框 -->
    <Modal
        v-model="modal1"
        title="修改数据"
        @on-ok="ok"
        @on-cancel="cancel">
        <template v-solt:form>

        </template>
        <Form  label-position="right" :label-width="100">
            <FormItem label="商品：">
                <Input v-model="updata.title"/>
            </FormItem>
            <FormItem label="数量：">
                <Input v-model="updata.num"/>
            </FormItem>
            <FormItem label="价格：">
                <Input v-model="updata.price"/>
            </FormItem>
            <FormItem label="图片：">
                <Input v-model="updata.img"/>
            </FormItem>
        </Form>
    </Modal>
    
    <!-- 数据表格 -->
    <Table border :columns="columns7" :data="data6"></Table>
    <!-- 分页 -->
    <Page :total="100" @on-change="changepage"  class="mar"/>
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
              h("Button",{
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
                }, "updata"),
              h("Button", {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                }, "Delete")
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
      modal1:false,
      updata:[]

    };
  },
  methods: {
    search() {
      this.init();
    },
    // 增
    addgoods() {
      goodsListadd({
        title: this.title1,
        price: this.price,
        num: this.num
      }).then(res => {
        this.init();
      });
    },
    // 删
    remove(index) {
      goodsListdel({
        id:this.data6[index].id
      }).then(res=>{
        this.data6.splice(index, 1),
        this.init()
      })
    },
    //分页
    changepage(pageno) {
      this.pageno = pageno;
      this.init();
    },
    show(index) {
      // console.log(index)
      this.modal1 = true
      this.updata = this.data6[index];
    },

    // 模态框点击
    // 取消annual
    cancel(){
      alert(0)
    },
    // 确定按钮 ------改
    ok(){
      // alert(2)
      goodsListchange({
        id:this.updata.id,
        title: this.updata.title,
        price: this.updata.price,
        num: this.updata.num
      }).then(res => {
        this.init();
      
      });
    },

    //  定义接口
    init() {
      //1.导入接口
      //2.调用
      goodsListApi({
        title: this.title,
        pageno: this.pageno
      })
      .then(res => {
        // console.log(res);  
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
.mar{
    margin: 10px 0 10px 5px
}
</style>