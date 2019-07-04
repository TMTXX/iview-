<template>
    <div class="layout">
        <Layout :style="{minHeight: '99.7vh'}">
            <Sider  breakpoint="md" :collapsed-width="78" collapsible hide-trigger>
                <Home></Home>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">Header</Header>
                <Content>
                    <router-view></router-view>
                   <!-- 123 -->
                </Content>
               <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import Home from '@/views/Home.vue';
    export default {
        components: {
            Home
        },

    }
</script>

<style scoped>

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        minHeight: 100%;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
