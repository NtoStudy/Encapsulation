<script setup lang="ts">
import {ref, watch} from "vue";
import city from './city'
import province from "./province";
import {provinceType, Type} from "@/components/chooseCity/src/type";
import {onMounted} from "@vue/runtime-dom";

const popoverVisible = ref<boolean>(false)
const radioValue = ref<string>('按城市')
const SelectValue = ref<string>('')
const options = ref<{ value: number; label: string; }[]>([])
const cities = ref(city.cities)
const provinces = ref(province)
const result = ref<string>('请选择')
const emit = defineEmits(['changeCityItem', 'changeProvinceItem'])
const handleCityItem = (item: Type) => {
  result.value = item.name
  popoverVisible.value = false
  emit('changeCityItem', item)
}
const handleLetter = (item: string) => {
  const elementById = document.getElementById(item);
  if (elementById) elementById.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
const handleProvince = (item: string) => {
  const elementById = document.getElementById(item);
  if (elementById) elementById.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
const handleProvinceItem = (item: provinceType) => {
  result.value = item.name
  popoverVisible.value = false
  emit('changeProvinceItem', item)
}
const handleSelect = (id:number)=>{
   Object.values(cities.value).forEach(item => {
     item.find(item => {
      if (item.id === id) {
        result.value = item.name
        popoverVisible.value = false
        emit('changeCityItem', item)
      }
    })
  })
}
onMounted(() => {
  const values = Object.values(cities.value);
  options.value = values.flat().map(item => ({
    value: item.id,
    label: item.name
  }));
});

</script>

<template>
  <el-popover
      placement="bottom-end"
      :width="450"
      trigger="click"
      v-model:visible="popoverVisible"
  >
    <template #reference>
      <div class="result">
        <div style="margin-right: 10px">{{ result }}</div>
        <div :class="{'rotate': popoverVisible}">
          <el-icon>
            <ArrowDown/>
          </el-icon>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="10">
          <el-radio-group v-model="radioValue">
            <el-radio-button label="按城市" value="按城市"/>
            <el-radio-button label="按省份" value="按省份"/>
          </el-radio-group>
        </el-col>
        <el-col :span="14">
          <el-select
              v-model="SelectValue"
              clearable
              filterable
              placeholder="选择城市"
              style="width: 240px"
          >
            <el-option
                v-for="item in options"
                @click="handleSelect(item.value)"

                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <div class="city-item" v-for="(item, index) in Object.keys(cities)" :key="index" @click="handleLetter(item)">
            {{ item }}
          </div>
        </div>
        <el-scrollbar :max-height="300">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">
                {{ key }} :
              </el-col>
              <el-col :span="22" class="city-name">
                <div class="city-name-item" v-for="(item,index) in value" :key="index" @click="handleCityItem(item)">
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div class="province-item" v-for="(item, index) in Object.keys(provinces)" :key="index"
               @click="handleProvince(item)">
            {{ item }}
          </div>
        </div>
        <el-scrollbar :max-height="300">
          <template v-for="(value, key) in provinces" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">
                {{ key }} :
              </el-col>
              <el-col :span="22" class="province-name">
                <div class="province-name-item" v-for="(item,index) in value" :key="index"
                     @click="handleProvinceItem(item)">
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  .rotate {
    transform: rotate(180deg);
  }

  svg {
    transition: all 0.25s linear;
    position: relative;
    top: 2px;
  }
}

.container {
  padding: 8px;

  .city, .province {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;

    .city-item, .province-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      padding: 2px;
      margin-right: 4px;
      border: 1px solid #eee;
      margin-bottom: 8px;
      cursor: pointer;
    }
  }

  .city-name, .province-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item, &-item {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}

</style>
