<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .color{
        color:#d7dde4
    }
    h1{
        text-align: center;
        font-size: 30px
    }
    
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-person" />
                        用户
                    </template>
                    <MenuItem name="1-1"><router-link to="/" class="color">查看用户</router-link> </MenuItem>
                    <MenuItem name="1-2"><router-link to="/" class="color">添加用户</router-link></MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        商品
                    </template>
                    <MenuItem name="2-1"><router-link to="/Goods" class="color">查看商品</router-link></MenuItem>
                    <MenuItem name="2-2"><router-link to="/Addlist" class="color">添加商品</router-link></MenuItem>
                    <MenuItem name="2-3"><router-link to="/" class="color">修改商品</router-link></MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="md-reorder" />
                        订单
                    </template>
                    <MenuItem name="3-1"><router-link to="/Uselist" class="color">查看订单</router-link></MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-pin" />
                        地址
                    </template>
                    <MenuItem name="4-1"><router-link to="/address" class="color">查看地址</router-link></MenuItem>
                    <MenuItem name="4-2"> <router-link to="/lookover" class="color">添加地址</router-link> </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <h1>后台管理</h1> 
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                      <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
 <script>
    export default {

    }
</script>
<style scoped>
</style>


