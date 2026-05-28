<script setup lang="ts">
import type { Order, PositionedEvent } from '@/types'
import { computed } from 'vue'
import EventBadge, { type BadgeProps } from '@/components/table/event-badge.vue'

const props = defineProps<{ order: PositionedEvent<Order> }>()

const badge = computed<BadgeProps | null>(() => {
  switch (props.order.status) {
    case 'New':
      return { label: 'Новый', type: 'neutral' }
    case 'Closed':
      return { label: 'Закрытый', type: 'neutral' }
    case 'Bill':
      return { label: 'Пречек', type: 'success' }
    default:
      return null
  }
})
</script>

<template>
  <div class="order">
    <p class="order__title">{{ props.order.status === 'Banquet' ? 'Банкет' : 'Заказ' }}</p>
    <event-badge v-if="badge" v-bind="badge" />
    <p>{{ props.order.start_time }} - {{ props.order.end_time }}</p>
  </div>
</template>

<style scoped lang="scss">
.order {
  font-size: var(--size-font-small);
  line-height: var(--size-line-height-small);

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__title {
    font-weight: 600;
  }
}
</style>
