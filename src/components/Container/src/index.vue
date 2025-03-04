<script setup lang="ts">
import {ref} from "vue";
import navSide from './navSide/index.vue'
import navHeader from './navHeader/index.vue'
const isCollapse = ref(false)
const toggle = ()=>{
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <navSide :Collapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <navHeader v-model:Collapse="isCollapse"/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header{
  padding: 0;
  border-bottom: 1px solid #eee;
}
.el-container{
  height: 100%;
}

</style>
