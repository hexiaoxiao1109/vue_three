<template>
    <Form :model="formRight" label-position="right" :label-width="100">
        <FormItem label="用户ID">
            <Input v-model="formRight.userId"/>
        </FormItem>
        <FormItem label="默认选择">
            <Input v-model="formRight.default"/>
        </FormItem>
        <FormItem label="昵称">
            <Input v-model="formRight.nickname"/>
        </FormItem>
        <FormItem label="省份">
            <Input v-model="formRight.province"/>
        </FormItem>
        <FormItem label="城市">
            <Input v-model="formRight.city"/>
        </FormItem>
        <FormItem label="区域">
            <Input v-model="formRight.area"/>
        </FormItem>
        <FormItem label="地址">
            <Input v-model="formRight.address"/>
        </FormItem>
        <FormItem label="电话">
            <Input v-model="formRight.tel"/>
        </FormItem>
        <Button type="primary" @click="submit" long >Submit</Button>
    </Form>
</template>
<script>
import {addListApi} from "@/api"
    export default {
        data () {
            return {
                formRight: {
                    userId: '',
                    default: '',
                    nickname: '',
                    province: '',
                    city: '',
                    area: '',
                    address: '',
                    tel: '',
                },
            }
        },
        methods: {
            init(){
                addListApi({
                    userId: this.formRight.userId,
                    default: this.formRight.default,
                    nickname: this.formRight.nickname,
                    province: this.formRight.province,
                    city: this.formRight.city,
                    area: this.formRight.area,
                    address: this.formRight.address,
                    tel: this.formRight.tel,
                })
                .then(res=>{
                    // console.log("操作成功")
                    if(res.meta.state == 201){
                        alert(res.meta.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            submit(){
                this.init()
            }
        },
    }
</script>

<style scoped>
/* .ivu-form-item{
    margin-bottom: 10px
}
.ivu-input-wrapper{
    width: 400px
}
.ivu-form-item{
    padding-left: 200px
} */
</style>
