<template>
  <div class="UserList">
    <Input @click.native="search" v-model="username" search enter-button placeholder="Enter something..." style="width: 300px" class="mar" />
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="update(index)">update</Button>
            <Button type="error" size="small" @click="remove(index)">delete</Button>
        </template>
    </Table>
    <Page :total="100" @on-change="changepage" class="mar"/>
    <br>
    <Modal
            v-model="modal1"
            title="修改数据"
            @on-ok="ok"
            @on-cancel="cancel">
            <Form  label-position="right" :label-width="100">
                
                <FormItem label="编号：">
                    <Input v-model="updata.id"/>
                </FormItem>
                <FormItem label="用户名：">
                    <Input v-model="updata.username"/>
                </FormItem>
                <FormItem label="密码：">
                    <Input v-model="updata.password"/>
                </FormItem>
            </Form>
        </Modal>
   
</div>
</template>
<script>
   
    import{userListApi,userDelApi,userUpdateApi} from "@/api"
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
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                updata:[],
                data6: [],
                username:'',
                pageno:1,
                password:"",
                id:"",
                modal1: false,
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
            ok () {
                updataListApi({
                    id:this.updata.id,
                  username:this.updata.username,
                    password:this.updata.password,

                })
                .then(res=>{
                    this.init()
                })
                .catch(
                    err=>{console.log(err)
                })
            },
            cancel () {
                // this.$Message.info('点击了取消');o
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
            this.modal1 = true
                this.updata = this.data6[index];
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

                if(confirm("你确定要删除吗？"))this.initData()
             
            }
        }
    }
</script>
<style scoped>

.mar{
    margin: 10px 0 10px 5px
}
</style>