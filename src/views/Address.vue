<template>
    <div class="address">
        <Input v-model="nickname" placeholder="Enter something..." clearable style="width: 200px" class="mar" />
        <Button type="primary" shape="circle" icon="ios-search" class="mar" @click="found"></Button>
        <Table border :columns="columns7" :data="data6"></Table>
        <Page :total="100" class="mar" @on-change="changepage" />
        <Button type="success" style="width:100px" @click="add">添加</Button>
    </div>
</template>
<script>
// 导入模块
import axios from "axios"
import {addressListApi,addListApi,delListApi} from "@/api"
    export default {
        data () {
            return {
                columns7: [
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
                                        }
                                    }
                                }, 'View'),
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
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete'),
                                
                            ]);
                        }
                    }
                ],
                data6: [],
                pageno:1,
                nickname:""
            }
        },

        // 声明普通方法
        methods: {
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
            // 增
            add(){
                // alert(3)
                // addListApi()
            },
            // 改

            show (index) {
                this.$Modal.info({
                    title: '修改数据',
                    content: `用户ID：<Input /><br>
                              用户ID：<Input /><br>  
                              默认选择：<Input /><br>
                              昵称：<Input /><br>
                              省份:<Input /><br>
                              城市：<Input /><br>
                              区域：<Input /><br>
                              地址：<Input /><br>
                              电话：<Input /><br>
                            `
                })
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
