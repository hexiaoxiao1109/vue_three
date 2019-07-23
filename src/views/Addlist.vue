<template>
    <Form :model="formRight" label-position="right" :label-width="100">
        <FormItem label="商品">
            <Input v-model="formRight.title"/>
        </FormItem>
        <FormItem label="数量">
            <Input v-model="formRight.num"/>
        </FormItem>
        <FormItem label="价格">
            <Input v-model="formRight.price"/>
        </FormItem>
        <FormItem label="图片">
            <Input v-model="formRight.img"/>
        </FormItem>
        <Button type="primary" @click="submit" long >Submit</Button>
    </Form>
</template>
<script>
import {goodsListadd} from "@/api"
    export default {
        // 定义模型数据
        data () {
            return {
                formRight: {
                    title: '',
                    num: '',
                    price: '',
                    img: '',
                },
            }
        },
        methods: {
            // 定义接口请求
            init(){
                goodsListadd({
                    title: this.formRight.title,
                    num: this.formRight.num,
                    price: this.formRight.price,
                    img: this.formRight.img,
                })
                .then(res=>{
                    // 判断状态 
                    if(res.meta.state == 201){
                        this.$Message.success("操作成功");
                    }else{
                        this.$Message.error("由于某种不清楚原因导致操作失败");
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // 点击提交按钮
            submit(){
                this.init()
            }
        },
    }
</script>

<style scoped>

</style>
