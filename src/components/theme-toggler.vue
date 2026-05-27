<script setup lang="ts">
import { ref, watch } from 'vue'
import AppIcon from '@/components/app-icon.vue'

type Theme = 'dark' | 'light'

const getInitTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const theme = ref<Theme>(getInitTheme())

const changeTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watch(
  theme,
  (newTheme) => {
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  },
  { immediate: true },
)
</script>

<template>
  <button class="theme-toggler" @click="changeTheme">
    <app-icon :name="theme === 'dark' ? 'solar' : 'moon'" />
  </button>
</template>

<style scoped lang="scss">
.theme-toggler {
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--color-theme-toggler-bg);
}
</style>
