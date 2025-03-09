<script setup lang="ts">
import {PropType, ref} from 'vue';
import {FormOptions} from "@/components/form/src/type/type";
import {onMounted} from "@vue/runtime-dom";
import cloneDeep from "lodash/cloneDeep";

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})
const model = ref<any>({})
const rules = ref<any>({})

onMounted(() => {
  const m: any = {}
  const r: any = {}
  props.options.forEach((item: FormOptions) => {
    m[item.prop!] = item.value
    r[item.prop!] = item.rules
  })
  model.value = cloneDeep(m)
  rules.value = cloneDeep(r)

})
</script>

<template>
  <el-form v-bind="$attrs" :model="model" :rules="rules">
    <el-form-item v-for="(item, index) in options" :key="index"
                  :label="item.label"
                  :prop="item.prop"

    >
      <component v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]"  ></component>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>

</style>
