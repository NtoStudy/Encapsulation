<script setup lang="ts">
import {list,actions} from "@/views/notification/data";
const clickOption = (e:any) => {
  console.log(e)
}
const clickAction = (e:any) => {
  console.log(e)
}
</script>

<template>
  <div style="margin-bottom: 20px;">
    <notification :value="10" :max="99" :isDot="true">
    </notification>
  </div>
  <div  style="margin-bottom: 20px;">
    <notification :value="1" :max="99" :isDot="true" />
  </div>
  <div style="margin-bottom: 20px;">
    <notification :value="50" :max="99">
      <template #default>
        <notificationList :list="list" :actions="actions" @clickOption="clickOption" @clickAction="clickAction"/>
      </template>
    </notification>
  </div>
</template>

<style lang="scss" scoped>
</style>
