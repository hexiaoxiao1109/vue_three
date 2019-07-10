<template>
 <div class="Select">
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户模块
                    </template>
                    <MenuItem name="1-1">用户信息</MenuItem>
                    <MenuItem name="1-2"></MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        商品模块
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        订单模块
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        地址模块
                    </template>
                    <MenuItem name="4-1">Option 1</MenuItem>
                    <MenuItem name="4-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
 </div>
</template>
 
<script>
export default {
 }
</script>
 
<style scoped>
 
</style>