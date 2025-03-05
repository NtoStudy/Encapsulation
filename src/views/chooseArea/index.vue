<script setup lang="ts">
const changeArea = (value:any) => {
  console.log(value)
}
</script>

<template>
  <chooseArea @changeArea="changeArea"/>
</template>

<style lang="scss" scoped>

</style>
