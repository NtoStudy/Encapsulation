<script setup lang="ts">
import {ref, watch} from "vue";
import allArea from '@/components/chooseArea/lib/pca-code.json'

const province = ref<string>()
const city = ref<string>()
const area = ref<string>()
const areas = ref(allArea)
const selectCity = ref<DataItem[]>([])
const selectArea = ref<DataItem[]>([])
const emit = defineEmits(['changeArea'])

export interface DataItem {
  code: string;
  name: string;
  children?: DataItem[];
}

export interface Data {
  code: string;
  name: string;
}

watch(() => province.value, (val) => {
  if (val) {
    selectCity.value = areas.value.find(item => item.code === province.value)!.children!
  }
})
watch(() => city.value, (val) => {
  if (val) {
    selectArea.value = selectCity.value.find(item => item.code === city.value)!.children!
  }
})

watch(() => province.value, () => {
  city.value = undefined
  area.value = undefined
})
watch(() => city.value, () => {
  area.value = undefined
})

// 将省市区赋值给父组件
watch(() => area.value, (val) => {
      if(val){
        const provinceData: Data = {
          code: province.value!,
          name: province.value! && areas.value.find(item => item.code === province.value)!.name
        }
        const cityData: Data = {
          code: city.value!,
          name: city.value! && selectCity.value.find(item => item.code === city.value)!.name
        }
        const areaData: Data = {
          code: val!,
          name: val! && selectArea.value.find(item => item.code === val)!.name
        }
        emit('changeArea', {provinceData, cityData, areaData})
      }
    }
)
</script>

<template>
  <div class="area">
    <el-select clearable v-model="province" placeholder="请选择省份">
      <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code"/>
    </el-select>
    <el-select clearable :disabled="!province" v-model="city" placeholder="请选择城市" style="margin: 0 10px">
      <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code"/>
    </el-select>
    <el-select clearable :disabled="!province || !city" v-model="area" placeholder="请选择区">
      <el-option clearable v-for="item in selectArea" :key="item.code" :label=item.name :value="item.code"/>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.area {
  display: flex;
  width: 60%;
}
</style>
