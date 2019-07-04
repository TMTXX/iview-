<template>
    <div class="goods-release">
        <h3>商品发布</h3>
<!--        {{goodsData}}-->
        <Editor></Editor>
    </div>

</template>

<script>
    import Editor from '@/components/Editor.vue';
    import {mapState} from 'vuex';
    export default {
        components: {
            Editor
        },
        name: "Release",
        computed:mapState({
            goodsData:state=>state.release.goodsData
            // counter()
            //     return this.$store.state.release.goodsData
            // }
        })
    }
</script>

<style scoped>
.goods-release{
    padding: 25px;
}
</style>
