<template>
    <div class="name-list">
        <Table width="1258" :loading="loading" border :columns="columns" :data="data">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>
        <div class="paging">
            <Page :total="1000" size="small" show-elevator show-sizer />
        </div>
    </div>
</template>

<script>
    export default {

        name: "NameList",
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        slot: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        sex: '女'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        sex: '男'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        sex: '男'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        sex: '女'
                    }
                ],
                loading: false,
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
.name-list{
    margin: 30px;
}
    .paging{
        margin-top: 25px;
        margin-left: 50%;
        transform:translateX(-50%);
    }
</style>
