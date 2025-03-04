<script setup lang="ts">
const props = defineProps({
  Collapse: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:Collapse'])
const toggle = () => {
  emit('update:Collapse', !props.Collapse)
}
</script>

<template>
   <div class="header">
     <span @click="toggle">
          <el-icon style="margin-top: 10px" v-if="Collapse"><Expand/></el-icon>
          <el-icon style="margin-top: 10px" v-else><Fold/></el-icon>
        </span>
   </div>
</template>

<style scoped lang="scss">
.header{
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
