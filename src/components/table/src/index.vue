<script setup lang="ts">
import {tableOptions} from "@/components/table/src/type";
import {computed, nextTick, PropType} from "vue";

const props = defineProps({
  options: {
    type: Array as PropType<tableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  }
})
const tableOptions = computed(() => props.options?.filter(item => !item.action))

const actionOptions = computed(() => props.options!.find(item => item.action!))
</script>

<template>
  <el-table :data="data">
    <template v-for="(item,index) in tableOptions" :key="index">
      <el-table-column
          v-if="item.slot"
          :label="item.label"
          :prop="item.prop"
          :align="item.align">
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
          v-else
          :label="item.label"
          :prop="item.prop"
          :align="item.align">

      </el-table-column>

    </template>
    <el-table-column
        v-if="actionOptions"
        :label="actionOptions.label"
        :width="actionOptions.width"
        :align="actionOptions.align"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>

  </el-table>
</template>

<style lang="scss" scoped>

</style>
