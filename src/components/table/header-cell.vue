<script setup lang="ts">
import type { Table } from '@/types'

const props = defineProps<{
  cellData: Omit<Table, 'orders' | 'reservations'>
}>()
</script>

<template>
  <th class="header-cell">
    <div class="header-cell__content">
      <p class="header-cell__line">
        <span>
          #<span class="header-cell__number">
            {{ props.cellData.number }}
          </span>
        </span>
        {{ props.cellData.capacity }} чел
      </p>
      <p>{{ props.cellData.zone }}</p>
    </div>
  </th>
</template>

<style scoped lang="scss">
.header-cell {
  width: var(--size-cell-width);
  min-width: var(--size-cell-width);
  color: var(--color-table-header-text);
  font-size: var(--size-font-small);
  line-height: var(--size-line-height-small);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding-block: 7px;
    font-weight: 400;
  }

  &__number {
    font-size: var(--size-font-medium);
    line-height: var(--size-line-height-large);
    color: var(--color-text-primary);
    font-weight: 600;
  }

  &__line {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    vertical-align: center;
  }
}
</style>
