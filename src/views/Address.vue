<template>
    <div class="address">
        <!-- 搜索框 -->
        <Input v-model="nickname" placeholder="Enter something..." clearable style="width: 200px" class="mar" />
        <!-- 搜索按钮 -->
        <Button type="primary" shape="circle" icon="ios-search" class="mar" @click="found"></Button>
        <!-- 表格 -->
        <Table border :columns="columns7" :data="data6"></Table>
        <!-- 分页 -->
        <Page :total="100" class="mar" @on-change="changepage"/>
        <!-- 修改的模态框 -->
        <Modal
            v-model="modal1"
            title="修改数据"
            @on-ok="ok"
            @on-cancel="cancel">
            <template v-solt:form>

            </template>
            <Form  label-position="right" :label-width="100">
                <FormItem label="用户ID：">
                    <Input v-model="updata.user_id" />
                </FormItem>
                <FormItem label="ID：">
                    <Input v-model="updata.id"/>
                </FormItem>
                <FormItem label="默认选择：">
                    <Input v-model="updata.default"/>
                </FormItem>
                <FormItem label="昵称：">
                    <Input v-model="updata.nickname"/>
                </FormItem>
                <FormItem label="省份：">
                    <Input v-model="updata.province"/>
                </FormItem>
                <FormItem label="城市：">
                    <Input v-model="updata.city"/>
                </FormItem>
                <FormItem label="区域：">
                    <Input v-model="updata.area"/>
                </FormItem>
                <FormItem label="地址：">
                    <Input v-model="updata.address"/>
                </FormItem>
                <FormItem label="电话：">
                    <Input v-model="updata.tel"/>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
// 导入模块
import axios from "axios"
import {addressListApi,addListApi,delListApi,updataListApi} from "@/api"
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'nickname',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.nickname)
                            ]);
                        }
                    },
                    {
                        title: '电话',
                        key: 'tel'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 200,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        },
                                    }
                                }, 'update'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            if(confirm("你确定要删除吗？")) this.remove(params.index)
                                        }
                                    }
                                }, 'Delete'),
                                
                            ]);
                        }
                    }
                ],
                data6: [],
                updata:[],
                pageno:1,
                nickname:"",
                id:"",
                modal1: false,
                
            }
        },

        // 声明普通方法
        methods: {
            // 修改数据发弹出框
            ok () {
                updataListApi({
                    id:this.updata.id,
                    userId:this.updata.user_id,
                    default:this.updata.default,
                    nickname:this.updata.nickname,
                    province:this.updata.province,
                    city:this.updata.city,
                    area:this.updata.area,
                    address:this.updata.address,
                    tel:this.updata.tel,

                })
                .then(res=>{
                    this.init()
                })
                .catch(
                    err=>{console.log(err)
                })
            },
            cancel () {
                // this.$Message.info('点击了取消');
            },
            // 定义接口
            init(){
                addressListApi({
                    pageno:this.pageno,
                    nickname:this.nickname
                })
                .then(res=>{
                    console.log(res.data)
                    this.data6 = res.data
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 查找
            found(){
                this.init()
            },

            // 分页查看
            changepage(pageno){
                this.pageno = pageno;
                this.init();
            },

            // 改
            show (index) {
                this.modal1 = true
                this.updata = this.data6[index];
            },

            // 删
            remove (index) {
                let id = this.data6[index].id
                console.log(this.data6[index].id)
                delListApi({id:id})
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)});
                this.init()
            }
        },

        // 模型数据已经初始化
        created() {
            this.init()
        },
    }
</script>

<style scoped>
.mar{
    margin: 10px 0 10px 5px
}
</style>
