<script setup lang="ts">
import {PropType, ref, watch} from 'vue';
import {FormOptions} from "@/components/form/src/type/type";
import {onMounted} from "@vue/runtime-dom";
import cloneDeep from "lodash/cloneDeep";

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})
const model = ref<any>(null)
const rules = ref<any>(null)
const initOptions = () => {
  if (props.options && props.options.length) {
    const m: any = {}
    const r: any = {}
    props.options.forEach((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

onMounted(() => {
  initOptions()
})
watch(() => props.options, () => {
  initOptions()
})
const form = ref<any>(null)

</script>

<template>
  <el-form v-bind="$attrs" :model="model" :rules="rules" v-if="model" ref="form">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
          v-if="!item.children || ! item.children.length"
          :label="item.label"
          :prop="item.prop"
      >
        <component v-bind="item.attrs"
                   :is="`el-${item.type}`"
                   v-model="model[item.prop!]"
                   :placeholder="item.placeholder"
                   v-if="item.type!=='upload' "/>
        <component v-bind="item.uploadAttrs"
                   :is="`el-${item.type}`"
                   v-model="model[item.prop!]"
                   :placeholder="item.placeholder"
                   v-else
        >
          <el-upload>
            <slot name="uploadArea"></slot>
            <slot name="uploadTip"></slot>
          </el-upload>
        </component>
      </el-form-item>
      <el-form-item
          v-if="item.children && item.children.length"
          :label="item.label"
          :prop="item.prop"
      >
        <component v-bind="item.attrs"
                   :is="`el-${item.type}`"
                   v-model="model[item.prop!]"
                   :placeholder="item.placeholder">
          <component
              v-for="(children,index) in item.children"
              :key="index"
              :is="`el-${children.type}`"
              :value="children.value"
              :lable="children.label"
          >
            {{ children.label }}
          </component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>

</style>
