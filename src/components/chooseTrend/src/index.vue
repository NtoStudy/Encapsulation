<script setup lang="ts">
import {ArrowDown, ArrowUp} from "@element-plus/icons-vue";
import {computed} from "vue";

const slot = defineSlots()
const props = defineProps({
  text: {
    type: String,
    default: '文字'
  },
  trendType: {
    type: String,
    default: 'up'
  },
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  downIconColor: {
    type: String,
    default: '#52e40a'
  },
  reverseColor: {
    type: Boolean,
    default: false
  },
  upTextColor: {
    type: String,
    default: '#0f0f0f'
  },
  downTextColor: {
    type: String,
    default: '#0f0f0f'
  },
  upIcon: {
    type: String
  },
  downIcon: {
    type: String
  },
})
const isUpText = computed(() => {
  return props.trendType === 'up'

})
</script>

<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slot.default" :style="{ color: isUpText ? upTextColor : downTextColor}"></slot>
      <div v-else :style="{ color: isUpText ? upTextColor : downTextColor}">{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon :style="{  color:reverseColor?downIconColor: upIconColor}" v-if="trendType== 'up' " :color="upIconColor">
        <component :is="upIcon?upIcon:ArrowUp"></component>
      </el-icon>
      <el-icon :style="{color:reverseColor?upIconColor: downIconColor}" v-else>
        <component :is="downIcon?downIcon:ArrowDown"></component>
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 16px;
    margin-right: 4px;
  }
}
</style>
