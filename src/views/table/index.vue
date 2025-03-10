<script setup lang="ts">
import {tableOptions} from "@/components/table/src/type";
import {Timer} from "@element-plus/icons-vue";
import {ref} from "vue";

export interface tableData {
  date: string,
  name: string,
  address: string
}

const options: tableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    align: 'center',
    action: true
  }

]

const data = ref<tableData[]>([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'

  }
])

const cancelIcon = (scope: any) => {
  console.log(scope)
}
const confirmIcon = (scope: any) => {
  console.log(scope)
}
</script>

<template>
  <n-table
      :options="options"
      :data="data"
      @confirmIcon="confirmIcon"
      @cancelIcon="cancelIcon">
    <template #date="{scope}">
      <el-icon>
        <Timer/>
      </el-icon>
      {{ scope.row.date }}
    </template>
    <template #name="{scope}">
      <el-tag>{{ scope.row.name }}</el-tag>
    </template>
    <template #action="{scope}">
      <el-button size="small" type="primary">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
    <template #editCell="{scope}">
      <el-button size="small" type="primary" style="margin-left: 4px">确认</el-button>
      <el-button size="small" type="danger">取消</el-button>
    </template>
  </n-table>
</template>

<style lang="scss" scoped>

</style>
