<script setup lang="ts">
import CheckboxItem from '@/components/checkbox-item.vue'
import CheckboxGroup from '@/components/checkbox-group.vue'
import { onMounted } from 'vue'

const props = defineProps<{
  available_days: string[]
  current_date: string
}>()

const selectedDay = defineModel<string>()

onMounted(() => {
  selectedDay.value = props.current_date
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(date)
}

const formatDaySubtitle = (dateString: string) => {
  const date = new Date(dateString)

  const currentDate = new Date(props.current_date)

  currentDate.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)

  const diff = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)

  if (diff === 0) return 'сегодня'
  if (diff === -1) return 'вчера'
  if (diff === 1) return 'завтра'

  return new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
  }).format(date)
}
</script>

<template>
  <checkbox-group mode="single" required v-model="selectedDay">
    <checkbox-item v-for="day in available_days" :key="day" :value="day" class="day">
      <div class="day__date">
        {{ formatDate(day) }}
      </div>

      <div class="day__subtitle">
        {{ formatDaySubtitle(day) }}
      </div>
    </checkbox-item>
  </checkbox-group>
</template>

<style lang="scss" scoped>
.day {
  flex-direction: column;

  text-align: start;
  line-height: var(--size-line-height-small);

  border-radius: 8px;
  padding: 4px 8px;

  ----color-chechbox-bg: var(--color-date-picker-bg);

  &__date {
    font-weight: 600;
  }
}
</style>
