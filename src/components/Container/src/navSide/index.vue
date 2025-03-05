<script setup lang="ts">
const props = defineProps({
  Collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <el-menu
      :collapse="Collapse"
      default-active="1"
      class="el-menu-vertical-demo"
      router
  >
    <el-menu-item index="home">
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="chooseIcon">
      <el-icon>
        <document/>
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="chooseArea">
      <el-icon>
        <setting/>
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo{
  height: 100%;

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;

}
</style>
