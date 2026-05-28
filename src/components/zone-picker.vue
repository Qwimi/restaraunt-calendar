<script setup lang="ts">
import type { Table } from '@/types'
import CheckboxGroup from '@/components/checkbox-group.vue'
import CheckboxItem from '@/components/checkbox-item.vue'

const props = defineProps<{
  zones: Table['zone'][]
}>()

const selectedZone = defineModel<Table['zone'][]>()
</script>

<template>
  <checkbox-group mode="multiple" v-model="selectedZone">
    <checkbox-item v-for="zone in props.zones" :key="zone" :value="zone" />
  </checkbox-group>
</template>
