<template>
    <div class="goods">
  

<Table border :columns="columns7" :data="data6"></Table>
    </div>
    
</template>
<script>
import axios from "axios"
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: '商品',
                        key: 'title'
                    },
                                        {
                        title: '数量',
                        key: 'num'
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                     {
                        title: '图片',
                        key: 'img'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
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
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Title：<Input value='${this.data6[index].title}'></Input><br>Num：<Input value='${this.data6[index].num}'></Input><br>Price：<Input value='${this.data6[index].price}'></Input><br>Img：<Input value='${this.data6[index].img}'></Input>`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            init(){
                axios({
                    url:"http://10.31.164.10:8000/goods",
                })
                .then(res=>{
                    console.log(res.data)
                    this.data6=res.data.data
                })
            }
        },
        mounted(){
            this.init()
        }
    }
</script>
 
<style scoped>
 
</style>