<script setup lang="ts">
import {ref} from "vue";
import {onMounted} from "@vue/runtime-dom";

const p = ref(0)
const props = defineProps({
  percentage:{
    type: Number,
    default: 0
  },
  indeterminate:{
    type: Boolean,
    default: false
  },
  time:{
    type: Number,
    default: 0
  }
})
onMounted(()=>{
  if(props.indeterminate){
    const t = Math.ceil(props.time / props.percentage)
    const timer = setInterval(()=>{
      p.value += 1
      if(p.value >= props.percentage){
        p.value = props.percentage
        clearInterval(timer)
      }
    },t)
  }else{
    p.value = props.percentage
  }
})
</script>

<template>
  <el-progress :percentage="p" v-bind="$attrs" />
</template>

<style lang="scss" scoped>

</style>
