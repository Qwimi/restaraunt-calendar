<script setup lang="ts">
import type { PositionedEvent, Reservation } from '@/types'
import { computed } from 'vue'
import EventBadge, { type BadgeProps } from '@/components/table/event-badge.vue'
import AppIcon from '@/components/app-icon.vue'

const props = defineProps<{ reservation: PositionedEvent<Reservation> }>()

const badge = computed<BadgeProps>(() => {
  switch (props.reservation.status) {
    case 'Живая очередь':
      return { label: 'Живая очередь', type: 'neutral' }
    case 'Новая':
      return { label: 'Ожидает подтверждения', type: 'primary' }
    case 'Заявка':
      return { label: 'Ожидаем', type: 'primary-reserve' }
    case 'Открыт':
      return { label: 'В зале', type: 'success' }
    default:
      return { label: 'Отменен', type: 'neutral' }
  }
})
</script>

<template>
  <div class="reservation">
    <p class="reservation__number">№{{ props.reservation.id }}</p>
    <p class="reservation__title">
      <span> {{ props.reservation.name_for_reservation }}; </span>
      <span class="reservation__capacity">
        <span class="reservation__people-number"> {{ props.reservation.num_people }} </span>чел
      </span>
    </p>
    <event-badge v-if="badge" v-bind="badge" />
    <p class="reservation__phone">
      <app-icon class="reservation__phone-icon" name="phone" size="xs" />
      {{ props.reservation.phone_number }}
    </p>
    <p>{{ props.reservation.start_time }} - {{ props.reservation.end_time }}</p>
  </div>
</template>

<style scoped lang="scss">
.reservation {
  font-size: var(--size-font-small);
  line-height: var(--size-line-height-small);

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__number {
    font-size: var(--size-font-extrasmall);
    line-height: var(--size-line-height-reset);
  }

  &__title {
    font-weight: 600;
  }

  &__phone {
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  &__capacity {
    font-size: var(--size-font-extrasmall);
    line-height: var(--size-line-height-reset);
    margin-left: 4px;
  }

  &__people-number {
    font-size: var(--size-font-small);
    line-height: var(--size-line-height-small);
    font-weight: 600;
  }

  &__phone-icon {
    flex-shrink: 0;
  }
}
</style>
