<template>
  <div class="UserList">
       
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        created() {
            this.initData()
        },
        // methods: {
        //     initData() {
        //         axios({
        //                 url: "http://10.31.164.10:8000/user",
        //                 // method: 'get'
        //             })
        //             .then(res => {
        //                 console.log(res.data.data)
        //                     this.data1 = res.data.data
        //             })
        //             .catch(error => {
        //                 console.log(error)
        //             })
        //     }
        // },
        // data() {
        //     return {
        //         columns1: [{
        //             title: '编号',
        //             key: 'id'
        //         }, {
        //             title: '用户名',
        //             key: 'username'
        //         }
        //         ],
        //         data1: [
                   
        //         ]
        //     }
        // }
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
                data6: [
                    
                ]
            }
        },
        methods: {
          
            initData() {
                axios({
                        url: "http://10.31.164.10:8000/user",
                        
                    })
                    .then(res => {
                        console.log(res.data.data)
                        this.data6 = res.data.data
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