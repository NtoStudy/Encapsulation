<script setup lang="ts">
import {ref} from "vue";
const visible = ref<boolean>(false)
const type = ref<string>('primary')
</script>

<template>
  <chooseIcon title="选择图标" v-model:visible="visible" :type="type">
    选择图标
  </chooseIcon>
</template>

<style lang="scss" scoped>

</style>
