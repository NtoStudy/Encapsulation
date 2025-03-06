<script setup lang="ts">
import {MenuItem} from "@/components/menu/src/type";
import {PropType} from "vue";
import {ArrowDown} from "@element-plus/icons-vue";


const props = defineProps({
  dataItem: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  router:{
    type: Boolean,
    default: false
  },
  defaultActive:{
    type:String,
    default: ''
  },
})

</script>

<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item,index) in dataItem" :key="index">
      <el-menu-item v-if=" !item.children" :index="item.index">
        <el-icon v-if="item.icon">
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>

      <el-sub-menu v-if="item.children" :index="item.index">
        <template #title>
          <el-icon v-if="item.icon">
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
            v-for="(children,index) in item.children"
            :key="index"
            :index="children.index"
        >
          {{ children.name }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style lang="scss" scoped>

</style>
