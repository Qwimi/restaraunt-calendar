<script setup lang="ts">
import { onMounted } from 'vue'
import { useBookingStore } from '@/stores/booking.ts'
import AppHeader from '@/components/app-header.vue'
import { storeToRefs } from 'pinia'

const bookingStore = useBookingStore()

const { restaurant } = storeToRefs(bookingStore)

onMounted(() => {
  bookingStore.getBookingData()
})
</script>

<template>
  <app-header :restaurant_name="restaurant?.restaurant_name" />
  <div class="main">
    <!--    {{ currentTime }}-->
    <!--    <pre>-->
    <!--      {{ tables }}-->
    <!--    </pre>-->
  </div>
</template>
