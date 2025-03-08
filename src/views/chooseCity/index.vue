<script setup lang="ts">
import {Type} from "@/components/chooseCity/src/type";

const changeCityItem = (item:Type)=>{
  console.log(item)
}
</script>

<template>
  <chooseCity @changeCityItem="changeCityItem"/>
</template>

<style lang="scss" scoped>

</style>
