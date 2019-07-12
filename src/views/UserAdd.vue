<template>
    
  <div class="userAdd">
        请添加用户名和密码：
        <br/>
        <br/>
        <Form ref="form"  >
            <FormItem prop="user">
                    <Input type="text"  placeholder="用户名" v-model="username" />
                </FormItem>
           <FormItem prop="password">
                    <Input type="password"  placeholder="密码" v-model="password" />
                </FormItem>
                <FormItem>
                        <Button type="primary" @click="add">提交</Button>
                </FormItem>
            </Form>
  </div>
</template>
<script>
    import{userAddApi} from "@/api"
  export default {
    created() {
        this.initData()
    },
      
        data () {
            return {
                
                // data6: [],
                username:'',
                password:''
            }
        },
        methods: {
            
            add(username,password){
                this.initData()
                // this.username=username
                // this.password=password
                alert('添加成功')
                this.$router.push({ path: '/'})
            },
    
            initData() {
                userAddApi({
                    username:this.username,
                    password:this.password
                })
                .then(res => {
                    if(res.meta.state == 201){
                        this.$Message.success("操作成功");
                    }else{
                        this.$Message.error("由于某种不清楚原因导致操作失败");
                    }
                    // console.log(res)
                    // this.data6 = res.data
                })
                .catch(error => {
                    console.log(error)
                })
            },
           
        }
  }
</script>
<style scoped>
</style>