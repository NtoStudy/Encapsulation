<script setup lang="ts">
import {ref, watch} from "vue";
const handleClick = ()=>{
  emit('update:visible',!props.visible)
}
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {useCopy} from "@/hooks/useCopy";

const props = defineProps<{
  title:string,
  visible:boolean,
  type:string
}>()
const dialogVisible = ref<boolean>(props.visible)

const emit = defineEmits(['update:visible'])
const copyIcon = (item:string)=>{
  const text = `<el-icon><${item} /></el-icon>`
  useCopy(text)
}
watch(()=>props.visible,(val)=>{
  dialogVisible.value = val
  emit('update:visible',val)
})
watch(()=>dialogVisible.value,(val)=>{
  emit('update:visible',val)
})
</script>

<template>
  <el-button @click="handleClick" :type="type">
    <slot></slot>
  </el-button>
  <div class="n-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div @click="copyIcon(item)" class="item" v-for="item in Object.keys(ElementPlusIconsVue) " :key="item">
          <div>
            <component :is="item"></component>
          </div>
          <div>
            {{item}}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>

</template>

<style lang="scss" scoped>
svg{
  width: 2em;
  height: 2em;
}
.container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
:deep(.el-dialog__body) {
  height: 500px;
  overflow-y: scroll;
}
</style>
