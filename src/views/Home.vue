<template>
  <div class="home">
      <Row>
          <Col span="8">
              <Menu @on-open-change="popup" theme="dark" width="200px" accordion>
                  <Submenu v-for="item in list" :name="item.id">
                      <template slot="title">
                          {{item.name}}
                      </template>
                      <MenuItem v-for="items in item.content" :name="item.id-items.id" :to="items.site">
                          {{items.s}}
                      </MenuItem>
                  </Submenu>
              </Menu>
          </Col>
  
      </Row>
  </div>
</template>

<script>
 import HelloWorld from '@/components/HelloWorld.vue'    export default {        name: 'home',        components: {            HelloWorld        },        data() {            return {                value3: '1',                value4: '1-1',                content: [{                    id: 1,                    s: "用户列表",                    site: '/user/list'                }, {                    id: 2,                    s: "用户信息填写",                    site: '/user/data'                }],                content2: [{                    id: 1,                    s: "商品列表",                    site: '/goods/list'                }, {                    id: 2,                    s: "商品发布",                    site: '/goods/release'                }, {                    id: 3,                    s: "商品分类",                    site: '/goods/category'                }],                list: [{                    id: 1,                    name: "用户",                    value: '0',                    content: []                }, {                    id: 2,                    name: "商品",                    value: '1',                    content: []                }],            }        },        methods: {            popup(i) {                // console.log(i[0])                // console.log(this.list)                for (let x=0;x<this.list.length;x++){                    if(this.list[x].id==i[0]&&this.list[x].id==2){                        console.log(this.list[x].id)                        this.list[x].content=this.content2                        return                    }                    if(this.list[x].id==i[0]&&this.list[x].id==1){                        console.log(this.list[x].id)                        this.list[x].content=this.content                        return                    }                }            },        }    }
</script>
