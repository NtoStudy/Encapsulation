<script setup lang="ts">

</script>

<template>
  <n-progress type="circle" :percentage="80" indeterminate :time="3000"/>
  <n-progress type="dashboard" :percentage="80" indeterminate :time="3000"/>
  <n-progress :stroke-width="15"
             :percentage="80" indeterminate :time="3000"/>
  <n-progress :percentage="80" indeterminate :time="3000"/>
</template>

<style lang="scss" scoped>

</style>
