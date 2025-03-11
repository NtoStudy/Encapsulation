<script setup lang="ts">
import {tableOptions} from "@/components/table/src/type";
import {computed, nextTick, PropType, ref, watch} from "vue";
import cloneDeep from 'lodash/cloneDeep'
import {onMounted} from "@vue/runtime-dom";

const props = defineProps({
  options: {
    type: Array as PropType<tableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  isEditRow: {
    type: Boolean,
    default: false
  },
  editRowIndex: {
    type: String,
    default: ''
  }

})

const emit = defineEmits(['confirmIcon', 'cancelIcon','update:editRowIndex'])

const currentEditItem = ref<string>()

const tableOptions = computed(() => props.options?.filter(item => !item.action))

const actionOptions = computed(() => props.options!.find(item => item.action!))

const loading = computed(() => !props.data || !props.data.length)

const currentData = ref<any[]>(cloneDeep(props.data))

const cloneEditRowIndex = ref<string>(props.editRowIndex)

watch(() => props.data, (val) => {
  currentData.value = cloneDeep(val)
  currentData.value.map(item => {
    item.rowEdit = false
  })
}, {deep: true})

watch(() => props.editRowIndex, (val) => {
  if (val) {
    cloneEditRowIndex.value = val
  }
})

onMounted(() => {
  currentData.value.map(item => {
    item.rowEdit = false
  })
})

const EditScope = (scope: any) => {
  currentEditItem.value = scope.$index + scope.column.id
}

const confirmIcon = (scope: any) => {
  emit('confirmIcon', scope)
}

const cancelIcon = (scope: any) => {
  emit('cancelIcon', scope)
}

const editCell = () => {
  currentEditItem.value = ''
}

const rowClick = (row: any, column: any) => {

  if (column.label === actionOptions.value!.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit
      currentData.value.map(item=>{
        if(item!=row) item.rowEdit = false
      })
      if(!row.rowEdit)emit('update:editRowIndex','')
    }
  }
}
</script>

<template>
  <el-table v-loading="loading" :data="currentData" @row-click="rowClick">
    <template v-for="(item,index) in tableOptions" :key="index">
      <el-table-column
          :label="item.label"
          :prop="item.prop"
          :align="item.align">

          <template #default="scope">
            <template v-if="scope.row.rowEdit">
              <el-input v-model="scope.row[item.prop!]" style="width: auto">
              </el-input>
            </template>
            <template v-else>
              <template v-if="currentEditItem === scope.$index + scope.column.id">
                <div style="display: flex; align-items: center;justify-content: center">
                  <el-input style="width: auto" v-model="scope.row[item.prop!]"></el-input>
                  <div @click.stop="editCell" style="display: flex ;justify-content: center">
                    <slot name="editCell" :scope="scope" v-if="$slots.editCell"/>
                    <div style="display: flex" v-else>
                      <el-icon @click="confirmIcon(scope)" style="cursor: pointer ;margin-left: 10px; color: red">
                        <Check/>
                      </el-icon>
                      <el-icon @click="cancelIcon(scope)" style="cursor: pointer ;margin-left: 10px; color: green">
                        <Close/>
                      </el-icon>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                <slot v-else>{{ scope.row[item.prop!] }}</slot>
                <el-icon class="edit" v-if="item.editable" @click.stop="EditScope(scope)">
                  <Edit/>
                </el-icon>
              </template>
            </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
        v-if="actionOptions"
        :label="actionOptions.label"
        :width="actionOptions.width"
        :align="actionOptions.align"
    >
      <template #default="scope">
        <slot name="action" :scope="scope" v-if="!scope.row.rowEdit"></slot>
        <slot name="editRow" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.edit {
  position: relative;
  top: 2px;
  left: 8px;
  cursor: pointer;
}
</style>
