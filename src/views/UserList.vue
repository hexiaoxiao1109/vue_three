<template>
  <div class="UserList">
    <Input @click.native="search" v-model="username" search enter-button placeholder="Enter something..." style="width: 300px" />
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="update(index)">更新</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
    <!-- <Page :total="100" @on-change="changepage" show-elevator /> -->
    <Page :total="100" @on-change="changepage"/>
    <br>
    <Button type="success" long style="width: 300px" @click.native="add">添加</Button>
   
</div>
</template>
<script>
   
    import{userListApi,userDelApi} from "@/api"
    export default {
        created() {
            this.initData()
        },
      
        data () {
            return {
                columns12: [
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        key: 'username'
                    },
                    {
                        title: '密码',
                        key: 'password'
                    },
                    
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [],
                username:'',
                pageno:1
            }
        },
        methods: {
            search(){
               
                this.initData()
            },
            changepage(pageno){
                console.log(pageno)
                this.pageno=pageno
                this.initData()
            },
            add(){
                this.$router.push({ path: 'userAdd'})
            },
    
            initData() {
                userListApi({
                    username:this.username,
                    pageno:this.pageno
                })
                    .then(res => {
                      
                        this.data6 = res.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
           update (index) {
                this.$Modal.info({
                    title: '信息修改',
                    content: `用户名：<Input type="text"  placeholder="用户名" v-model="username" /><br/>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码：<Input type="text"  placeholder="密码" v-model="passname" />`
                })
            },
            //删除数据
            remove (index) {
                // console.log(this.data6)
                // console.log(index)
                // console.log(this.data6[index].id)
                let id = this.data6[index].id

                userDelApi({id:id})
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)})

                this.initData()
            }
        }
    }
</script>
<style scoped>

</style>