<template>
    <div class="page">
        <leftnav></leftnav>
        <div class="pagecontent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import leftnav from './leftnav.vue';
    export default {
        name: "index",
        components:{leftnav}
    }
</script>
<style>
    .pagecontent{
        background-color: #f3f5f7;
        height:100%;
        padding-left: 270px;
    }
    .page{
        height: 100%;
    }
</style>

