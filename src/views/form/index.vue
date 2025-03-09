<script setup lang="ts">
import {FormOptions} from "@/components/form/src/type/type";

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      }, {
        min: 3,
        max: 5,
        message: '用户名长度在 3 到 5 个字符',
        trigger: 'blur'
      }],
    attrs: {
      clearable: true
    }

  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }, {
        min: 6,
        max: 10,
        message: '密码长度在6-10位',
        trigger: 'blur'
      }],
    attrs: {
      showPassword: true,
      clearable: true
    }

  },
  {
    type: 'select',
    value: '前端',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'option',
        label: '前端',
        value: '前端',
      }, {
        type: 'option',
        label: '后端',
        value: '后端',
      },
      {
        type: 'option',
        label: '全栈',
        value: '全栈',
      }
    ]
  },
  {
    type:'checkbox-group',
    value: [],
    prop:'like',
    label:'爱好',
    children:[
      {
        type:'checkbox',
        label:'足球',
        value:'足球'
      },
        {
          type:'checkbox',
          label:'篮球',
          value:'篮球'
        },
        {
          type:'checkbox',
          label:'排球',
          value:'排球'
        }
    ]
  },
  {
    type:'radio-group',
    value: '',
    prop:'gender',
    label:'性别',
    children:[
      {
        type:'radio',
        label:'男',
        value:'male'
      },
      {
        type:'radio',
        label:'女',
        value:'nv'
      },
      {
        type:'radio',
        label:'保密',
        value:'not'
      }
    ]
  }

]
</script>

<template>
  <n-form :validate-on-rule-change="false" label-width="100px" :options="options"/>
</template>

<style lang="scss" scoped>

</style>
