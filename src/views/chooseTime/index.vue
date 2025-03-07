<script setup lang="ts">
const changeTime = (val: string) => {
  console.log(val)
}
const endChange = (val:Date) => {
  console.log(val)
}
const startOptions = {
  size:'large',
}
</script>

<template>
  <chooseTime @changeTime="changeTime" :startOptions="startOptions"/>
  <br/>
  <br/>
  <chooseData @endChange="endChange"/>
</template>

<style lang="scss" scoped>

</style>
