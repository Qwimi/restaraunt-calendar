<script setup lang="ts">
import { formatDate, getFormatedTimeDuration, setISOString } from '@/composables'
import AppButton from '@/components/app-button.vue'
import type { OrderCreateRequest, Table } from '@/types'

const props = defineProps<{
  startTime: string
  endTime: string
  tablesNumbers: Table['number'][]
  tablesCapacity: number
  tableIds: Table['id'][]
  selectedDate: string
  isDragging: boolean
  timeZone: string
  verticalAlign: 'top' | 'bottom'
}>()

const emit = defineEmits<{
  cancel: []
  submit: [OrderCreateRequest]
}>()

const submit = () => {
  const startTime = setISOString(props.selectedDate, props.startTime, props.timeZone)
  const endTime = setISOString(props.selectedDate, props.endTime, props.timeZone)

  emit('submit', {
    startTime,
    endTime,
    tableIds: props.tableIds,
  })
}
</script>

<template>
  <div class="overlay-form" :class="`overlay-form--${props.verticalAlign}`">
    <p class="overlay-form__title">Новое бронирование</p>
    <p>
      {{ formatDate(props.selectedDate) }}
    </p>
    <p class="overlay-form__time">{{ props.startTime }} - {{ props.endTime }}</p>
    <p class="overlay-form__duration">
      {{ getFormatedTimeDuration(props.startTime, props.endTime) }}
    </p>
    <p class="overlay-form__table-wrapper">
      Столы
      <span class="overlay-form__table" v-for="table in props.tablesNumbers" :key="table">
        {{ table }}
      </span>
    </p>

    <div v-if="!isDragging" class="overlay-form__btn-group">
      <app-button variant="primary" @click="submit"> Создать </app-button>
      <app-button variant="neutral" @click="emit('cancel')"> Отменить </app-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay-form {
  background-color: var(--color-table-overlay-form-bg);
  border-radius: 4px;
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: fit-content;
  isolation: isolate;
  z-index: 1000;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 8px;
  font-size: var(--size-font-small);
  line-height: var(--size-line-height-small);
  color: var(--color-table-overlay-text-primary);

  &--top {
    top: 0;
  }

  &--bottom {
    bottom: 0;
  }

  &__title {
    font-weight: 700;
  }

  &__time {
    font-size: var(--size-font-medium);
    font-weight: 700;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  &__duration {
    font-size: var(--size-font-small);
  }

  &__table-wrapper {
    display: flex;
    gap: 4px;
    color: var(--color-table-overlay-text-secondary);
  }

  &__table {
    font-weight: 700;
    font-size: var(--size-font-medium);
    color: var(--color-table-overlay-text-primary);

    &::before {
      content: '#';
      font-weight: 500;
      font-size: var(--size-font-small);
      color: var(--color-table-overlay-text-secondary);
    }

    &:not(:last-child)::after {
      content: '+';
      margin-left: 4px;
    }
  }

  &__btn-group {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-top: auto;
  }
}
</style>
