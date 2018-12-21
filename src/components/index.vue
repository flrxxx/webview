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
        components:{leftnav,rightcontent}
    }
</script>

