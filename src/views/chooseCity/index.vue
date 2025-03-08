<script setup lang="ts">
import {provinceType, Type} from "@/components/chooseCity/src/type";

const changeCityItem = (item:Type)=>{
  console.log(item)
}
const changeProvinceItem = (item:provinceType)=>{
  console.log(item)
}
</script>

<template>
  <chooseCity @changeCityItem="changeCityItem" @changeProvinceItem="changeProvinceItem"/>
</template>

<style lang="scss" scoped>

</style>
