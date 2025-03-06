<script setup lang="ts">
import menu from "@/components/Container/src/navSide/menu";

const props = defineProps({
  Collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <n-menu :dataItem="menu" router :collapse="Collapse"  default-active="home" class="el-menu-vertical-demo"/>
</template>

<style scoped>
.el-menu-vertical-demo{
  height: 100%;

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
