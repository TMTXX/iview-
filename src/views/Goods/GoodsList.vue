<template>
    <div>
        <h3>商品列表</h3>
        <Table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="img">
                <img :src="row.img" alt="">
<!--                <img src="@/assets/img/1.jpeg" alt="">-->
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data() {
            return {
                columns12: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'img',
                        slot: 'img',
                        width: 150,
                        align: 'center'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        img: '/img/1.d4f47458.jpeg'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        img: '/img/2.2149d227.jpg'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        img: '/img/2.2149d227.jpg'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        img: '/img/1.d4f47458.jpeg'
                    }
                ]
            }
        },
        methods: {
            show(index) {
                // console.log(row)
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove(index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
img{
    width: 150px;
}
</style>
