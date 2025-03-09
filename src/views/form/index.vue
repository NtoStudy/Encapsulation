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

  }
]
</script>

<template>
  <n-form :validate-on-rule-change="false" label-width="100px" :options="options"/>
</template>

<style lang="scss" scoped>

</style>
