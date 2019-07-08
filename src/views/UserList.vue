<template>
  <div class="UserList">
       
    <!-- <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">组件</BreadcrumbItem>
        <BreadcrumbItem>用户信息</BreadcrumbItem>
    </Breadcrumb> -->
    <!-- <Button type="primary">Primary</Button> -->
    <Table :columns="columns1" :data="data1"></Table>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        created() {
            this.initData()
        },
        methods: {
            initData() {
                axios({
                        url: "http://10.31.164.10:8000/user",
                        // method: 'get'
                    })
                    .then(res => {
                        console.log(res.data.data)
                            this.data1 = res.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        data() {
            return {
                columns1: [{
                    title: '编号',
                    key: 'id'
                }, {
                    title: '用户名',
                    key: 'username'
                }
                ],
                data1: [
                   
                ]
            }
        }
    }
</script>
<style scoped>

</style>