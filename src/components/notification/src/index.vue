<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: Number,
    default: 0
  },
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <el-icon>
          <component :is="icon"></component>
        </el-icon>
      </el-badge>
    </template>
  </el-popover>


</template>

<style lang="scss" scoped>

</style>
