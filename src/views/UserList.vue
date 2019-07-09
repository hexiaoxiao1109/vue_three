<template>
  <div class="UserList">
    <Input @click.native="search" v-model="username" search enter-button placeholder="Enter something..." style="width: 300px" />
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
    <!-- <Page :total="100" @on-change="changepage" show-elevator /> -->
    <Page :total="100"/>
    <br>
    <Button type="success" long style="width: 300px" @click.native="add">添加</Button>
   
</div>
</template>
<script>
   
    import{userListApi} from "@/api"
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
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `id：${this.data6[index].id}<br>：username${this.data6[index].username}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
<style scoped>

</style>