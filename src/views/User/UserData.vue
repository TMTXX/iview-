<template>
    <div class="user-data">
        <Form ref="userData" :model="userData" :rules="ruleCustom" :label-width="80">
            <FormItem label="姓名" prop="name">
                <Input type="text" v-model="userData.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="性别" prop="sex">
                <RadioGroup v-model="userData.sex">
                    <Radio label="男">男</Radio>
                    <Radio label="女">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="年龄" prop="age">
                <Input type="text" v-model="userData.age" number placeholder="请输入年龄"></Input>
            </FormItem>
            <FormItem label="学历" prop="education">
                <Select v-model="userData.education" placeholder="请选择学历">
                    <Option value="初中">初中</Option>
                    <Option value="高中">高中</Option>
                    <Option value="大专">大专</Option>
                    <Option value="本科">本科</Option>
                    <Option value="研究生">研究生</Option>
                </Select>
            </FormItem>
            <FormItem label="爱好" prop="interest">
                <CheckboxGroup v-model="userData.interest">
                    <Checkbox label="篮球"></Checkbox>
                    <Checkbox label="足球"></Checkbox>
                    <Checkbox label="唱歌"></Checkbox>
                    <Checkbox label="跳舞"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('userData')">上传</Button>
                <Button @click="handleReset('userData')" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
<!--        <div class="name">-->
<!--            姓名：-->
<!--            <Input @on-blur="examine" clearable v-model="userData.name" placeholder="请输入姓名" style="width: 500px"/>-->
<!--        </div>-->
<!--        <div class="sex">-->
<!--            性别：-->
<!--            <RadioGroup v-model="userData.sex">-->
<!--                <Radio label="男">男</Radio>-->
<!--                <Radio label="女">女</Radio>-->
<!--            </RadioGroup>-->
<!--        </div>-->
<!--        <div class="interest">-->
<!--            爱好：-->
<!--            <CheckboxGroup v-model="userData.interest">-->
<!--                <Checkbox label="篮球">-->
<!--                    <span>篮球</span>-->
<!--                </Checkbox>-->
<!--                <Checkbox label="足球">-->
<!--                    <span>足球</span>-->
<!--                </Checkbox>-->
<!--                <Checkbox label="唱歌">-->
<!--                    <span>唱歌</span>-->
<!--                </Checkbox>-->
<!--                <Checkbox label="跳舞">-->
<!--                    <span>跳舞</span>-->
<!--                </Checkbox>-->
<!--            </CheckboxGroup>-->
<!--        </div>-->
<!--        <div class="education">-->
<!--            学历：-->
<!--            <Select v-model="userData.education" style="width:200px">-->
<!--                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--            </Select>-->
<!--        </div>-->
<!--        <div class="send">-->
<!--            <Button @click="send" type="success">上传信息</Button>-->
<!--        </div>-->
    </div>

</template>

<script>
    export default {
        name: "UserData",
        data() {
            const validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入姓名！'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validateSex = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请选择性别！'));

                }
                callback();
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入年龄！'));
                }
                console.log(Number.isInteger(value))
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入年龄！'));
                    } else {
                        if (value < 18) {
                            callback(new Error('年龄小于18岁！'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                userData: {
                    name: '',
                    sex: '',
                    age:'',
                    interest: [],
                    education: ''
                },
                cityList: [
                    {
                        value: '初中',
                        label: '初中'
                    },
                    {
                        value: '高中',
                        label: '高中'
                    },
                    {
                        value: '大专',
                        label: '大专'
                    },
                    {
                        value: '本科',
                        label: '本科'
                    },
                    {
                        value: '研究生',
                        label: '研究生'
                    }
                ],

                ruleCustom: {
                    name: [
                        {required: true, validator: validateName, trigger: 'blur' }
                    ],
                    age: [
                        {required: true, validator: validateAge, trigger: 'blur' }
                    ],
                    sex:[
                        { required: true,validator: validateSex, trigger: 'blur'}
                    ],
                    education:[
                        { required: true, message: '请选择学历！', trigger: 'change'}
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '请选择你的爱好！', trigger: 'change' },
                        { type: 'array', max: 3, message: '请选择3个或3个以下！', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('上传成功!');
                    } else {
                        this.$Message.error('请输入必填内容!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
    .user-data {
        padding: 20px;
    }

</style>
