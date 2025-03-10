<script setup lang="ts">
import {nextTick, PropType, ref, watch} from "vue";
import {FormOptions} from "@/components/form/src/type/type";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },

})
const dialogVisible = ref<boolean>(props.visible)
const emit = defineEmits(['update:visible'])
watch(() => props.visible, () => {
  dialogVisible.value = props.visible
})
watch(() => dialogVisible.value, (val) => {
  emit('update:visible', val)
})
const form = ref<any>(null)

</script>

<template>
  <el-dialog v-model="dialogVisible" style="overflow-y: scroll ; height: 500px ">
    <template #default>
      <n-form :options="options" ref="form" label-width="100px"/>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>

</style>
