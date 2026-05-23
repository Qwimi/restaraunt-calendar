<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBookingStore } from '@/stores/booking.ts'
import AppHeader from '@/components/app-header.vue'
import { storeToRefs } from 'pinia'
import DatePicker from '@/components/date-picker.vue'

const bookingStore = useBookingStore()

const { restaurant, available_days, current_day } = storeToRefs(bookingStore)

const selectedDate = ref('')

onMounted(() => {
  bookingStore.getBookingData()
})
</script>

<template>
  <app-header :restaurant_name="restaurant?.restaurant_name" />
  <div class="main container">
    <section class="pickers">
      <h2 class="pickers__title">Бронирования</h2>
      <div class="pickers__group">
        <h3 class="pickers__subtitle">Дата</h3>
        <date-picker
          v-if="current_day"
          :available_days="available_days"
          :current_date="current_day"
          v-model="selectedDate"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding-block: 32px;
}

.pickers {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    font-size: var(--size-font-large);
    line-height: var(--size-line-height-large);
    font-weight: 700;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__subtitle {
    font-size: var(--size-font-small);
    line-height: var(--size-line-height-small);
    color: var(--color-picker-subtitle);
  }
}
</style>
