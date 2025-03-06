<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  beginStart: {
    type: String,
    default: '08:00'
  },
  beginEnd: {
    type: String,
    default: '24:00'
  },
  beginStep: {
    type: String,
    default: '00:30'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  endStart: {
    type: String,
    default: '08:00'
  },
  endEnd: {
    type: String,
    default: '24:00'
  },
  endStep: {
    type: String,
    default: '00:30'
  }
})

const startTime = ref<string>('')
const endTime = ref<string>('')
const emit = defineEmits(['changeTime'])
watch(() => startTime.value, (val) => {
  endTime.value = ''
})
watch(() => endTime.value, (val) => {
  if (startTime.value && val) {
    emit('changeTime', {startTime: startTime.value, endTime: endTime.value})
  }
})
</script>

<template>
  <div class="demo-time-range">
    <el-time-select
        v-model="startTime"
        style="width: 240px;margin-right: 20px"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="beginStart"
        :step="beginStep"
        :end="beginEnd"
        v-bind="$attrs.startOptions || {}"
    />
    <el-time-select
        v-model="endTime"
        style="width: 240px"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endStart"
        :step="endStep"
        :end="endEnd"
        v-bind="$attrs.endOptions || {}"
    />
  </div>
</template>

<style lang="scss" scoped>
.demo-time-range {
  display: flex;
}
</style>
