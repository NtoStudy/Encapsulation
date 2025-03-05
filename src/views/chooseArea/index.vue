<script setup lang="ts">
import chooseArea from '@/components/chooseArea/src/index.vue'
const changeArea = (value:any) => {
  console.log(value)
}
</script>

<template>
  <chooseArea @changeArea="changeArea"/>
</template>

<style lang="scss" scoped>

</style>
