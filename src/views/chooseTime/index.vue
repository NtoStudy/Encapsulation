<script setup lang="ts">
const changeTime = (val: string) => {
  console.log(val)
}
const startOptions = {
  size:'large',
}
</script>

<template>
  <chooseTime @changeTime="changeTime" :startOptions="startOptions"/>
</template>

<style lang="scss" scoped>

</style>
