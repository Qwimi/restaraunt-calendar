<script setup lang="ts">
import CheckboxItem from '@/components/checkbox-item.vue'
import CheckboxGroup from '@/components/checkbox-group.vue'
import { formatDate, formatDaySubtitle } from '@/composables'

const props = defineProps<{
  available_days: string[]
  current_date: string
}>()

const selectedDay = defineModel<string>()
</script>

<template>
  <checkbox-group mode="single" required v-model="selectedDay">
    <checkbox-item v-for="day in available_days" :key="day" :value="day" class="day">
      <div class="day__date">
        {{ formatDate(day) }}
      </div>

      <div class="day__subtitle">
        {{ formatDaySubtitle(day, props.current_date) }}
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
