<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  disabledBeforeToday: {
    type: Boolean,
    default: true
  }
})
const startDataTime = ref<Date | null>(null)
const endDataTime = ref<Date | null>(null)
const  disabledEnd = ref<Boolean>(true)
const disabledStartDate = (time:Date)=>{
  if(props.disabledBeforeToday) return time.getTime() < Date.now() - 60 * 60 * 1000 * 24
}
const disabledEndDate = (time:Date) => {
   if(startDataTime.value){
     return time.getTime() < startDataTime.value.getTime() + 60 * 60 * 1000 * 24

   }
}
const emit = defineEmits(['endChange'])
watch(()=>startDataTime.value, (val)=>{
  console.log(val)
  if(val){
    disabledEnd.value = false
  }
  else{
    disabledEnd.value = true
    endDataTime.value = null
  }
})
watch(()=>endDataTime.value, (val)=>{
  if(val) emit('endChange', {
    startDataTime:startDataTime.value,
    endDataTime:endDataTime.value
  })
})
</script>

<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
          v-model="startDataTime"
          type="date"
          :placeholder="startPlaceholder"
          :disabled-date="disabledStartDate"
      />
    </div>
    <div>
      <el-date-picker
          v-model="endDataTime"
          type="date"
          :placeholder="endPlaceholder"
          :disabled="disabledEnd"
          :disabled-date="disabledEndDate"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
