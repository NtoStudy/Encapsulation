<script setup lang="ts">
import {ref} from "vue";
import city from './city'
import {Type} from "@/components/chooseCity/src/type";
const popoverVisible = ref<boolean>(false)
const radioValue = ref<string>('按城市')
const SelectValue = ref<string>('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const cities = ref(city.cities)
const result = ref<string>('请选择')
const emit = defineEmits(['changeCityItem'])
const handleCity = (item:Type)=>{
  result.value = item.name
  popoverVisible.value = false
  emit('changeCityItem', item)
}
const handleLetter = (item:string)=>{
  console.log(item)
  const elementById = document.getElementById(item);
  if(elementById) elementById.scrollIntoView({behavior: "smooth", inline: "nearest"});

}

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
            <el-radio-button label="按城市"  value="按城市"/>
            <el-radio-button label="按省份"  value="按省份"/>
          </el-radio-group>
        </el-col>
        <el-col :span="14">
          <el-select
              v-model="SelectValue"
              clearable
              placeholder="Select"
              style="width: 240px"
          >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <div class="city">
        <div class="city-item" v-for="(item, index) in Object.keys(cities)" :key="index" @click="handleLetter(item)">
          {{item}}
        </div>
      </div>
      <el-scrollbar :max-height="300"  >
        <template v-for="(value, key) in cities" :key="key">
          <el-row style="margin-bottom: 10px" :id="key">
            <el-col :span="2">
              {{key}} :
            </el-col>
            <el-col :span="22" class="city-name">
              <div  class="city-name-item" v-for="(item,index) in value" :key="index" @click="handleCity(item)">
                {{item.name}}
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>

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
  .city{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    .city-item{
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
  .city-name{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &-item{
      margin-right: 10px;
      cursor: pointer;
    }
  }
}

</style>
