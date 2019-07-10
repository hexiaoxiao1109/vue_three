<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background:black;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
       <Select></Select>
<Headed></Headed>
    </div>
</template>
<script>
import Headed from '@/components/Headed'
import Select from '@/components/Select'
    export default {
        components:{
        Headed,
        Select
    } 
    }
</script>
