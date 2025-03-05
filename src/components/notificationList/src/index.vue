<script setup lang="ts">
import {PropType} from "vue";
import {ActionOptions, ListOptions} from "@/components/notificationList/src/type";
import {actions} from "@/views/notification/data";

const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
const emit = defineEmits(['clickOption','clickAction'])
const handleItem = (item:ListOptions ,index:number) => {
  emit('clickOption', {item,index})
}
const handleAction = (item2:ListOptions,index2:number)=>{
  emit('clickAction',{item2,index2})
}
</script>

<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane @click.prevent="handleItem(item,index)" v-for="(item,index) in list" :key="index" :label="item.title">
        <el-scrollbar height="300px">
          <div class="container" v-for="(item1,index1) in item.content" :key="index1">
            <div class="avatar">
              <el-avatar size="small" :src="item1.avatar"/>
            </div>
            <div class="content">
              <div class="title">
                <div v-if="item1.title">{{ item1.title }}</div>
                <el-tag size="small" :type="item1.tagType" v-if="item1.tag">{{ item1.tag }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <div  class="a-item" v-for="(item2,index2) in actions" :key="index2" @click.prevent="handleAction(item2,index2)">
            <div class="a-icon" v-if="item2.icon">
              <el-icon>
                <component :is="item2.icon"></component>
              </el-icon>

            </div>
            <div class="a-text">{{ item2.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;

  .avatar {
    flex: 1;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px
    }
  }

}

.actions {
  height: 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid #0f0f0f;
  cursor: pointer;

  .a-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon{
      margin-right: 4px;
      font-size: 16px;
      height: 100%;
    }
  }
}
</style>
