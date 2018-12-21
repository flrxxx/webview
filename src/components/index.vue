<template>
    <div class="page">
        <leftnav></leftnav>
        <rightcontent></rightcontent>
    </div>
</template>

<script>
    import leftnav from './leftnav.vue';
    import rightcontent from './rightcontent.vue';
    export default {
        name: "index",
        components:{leftnav,rightcontent}
    }
</script>

<style scoped>

</style>