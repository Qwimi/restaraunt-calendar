<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    name: 'moon' | 'solar' | 'phone'
    size?: 'xs' | 's' | 'm'
  }>(),
  {
    size: 's',
  },
)

const svgContent = ref<string>('')

const icons = import.meta.glob('../assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
})

watchEffect(async () => {
  const path = `../assets/icons/${props.name}.svg`
  const loader = icons[path]

  if (loader) {
    svgContent.value = (await loader()) as string
  } else {
    svgContent.value = ''
  }
})
</script>

<template>
  <div v-if="svgContent" v-html="svgContent" class="icon" :class="`icon--${props.size}`" />
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: var(--icon-size);
  height: var(--icon-size);

  :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
    fill: currentcolor;
  }

  &--xs {
    --icon-size: var(--size-icon-xs);
  }

  &--s {
    --icon-size: var(--size-icon-s);
  }

  &--m {
    --icon-size: var(--size-icon-m);
  }
}
</style>
