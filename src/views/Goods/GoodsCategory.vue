<template>
    <div>
        <h3>商品分类页</h3>
        <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                goodsData:"二级分类",
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: this.goodsData,
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
