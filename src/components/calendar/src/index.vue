<script setup lang="ts">
import {Calendar} from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import {onMounted} from "@vue/runtime-dom";
import {ref} from "vue";

const props = defineProps({
  local: {
    type: String,
    default: 'zh-cn'
  },
  initalView: {
    type: String,
    default: 'dayGridMonth'
  },
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        preYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next'
      }
    }
  },
  footerToolbar: {
    type: Object,
    default: () => {
    }
  }
})

const calendar = ref<Calendar>()

const renderCalendar = () => {
  const el = document.getElementById('calendar')
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      initialView: props.initalView,
      locale: props.local,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      buttonText: props.buttonText,

    })
    calendar.value.render()
  }
}
onMounted(() => {
  renderCalendar()
})
</script>

<template>
  <div id="calendar">
  </div>
</template>

<style lang="scss" scoped>

</style>
