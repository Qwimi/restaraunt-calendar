<script setup lang="ts">
import { Fragment, ref, watchEffect, useSlots, type VNode } from 'vue'

type Checkbox = {
  value: string
  vNode: VNode
}

const props = defineProps<{
  mode: 'single' | 'multiple'
  required?: boolean
}>()

const model = defineModel<string | string[]>()

const slots = useSlots()

const checkboxes = ref<Checkbox[]>([])

const collectCheckboxes = () => {
  const result: Checkbox[] = []

  if (!slots.default) {
    checkboxes.value = result
    return
  }

  const nodes = slots.default()

  nodes.forEach((node: any) => {
    if (node.type === Fragment && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        result.push({
          value: child.props?.value,
          vNode: child,
        })
      })

      return
    }

    result.push({
      value: node.props?.value,
      vNode: node,
    })
  })

  checkboxes.value = result
}

const updateValue = (value: string, checked: boolean) => {
  if (props.mode === 'single') {
    if (props.required && !checked) return

    model.value = checked ? value : ''
    return
  }

  const current = (model.value || []) as string[]

  if (props.required && !checked && current.length === 1) return

  model.value = checked ? [...current, value] : current.filter((item) => item !== value)
}

watchEffect(() => {
  collectCheckboxes()
})
</script>

<template>
  <div class="checkbox-group">
    <component
      v-for="(checkbox, index) in checkboxes"
      :key="index"
      :is="checkbox.vNode"
      :active="props.mode === 'single' ? model === checkbox.value : model?.includes(checkbox.value)"
      @toggle-checkbox="updateValue"
    />
  </div>
</template>

<style scoped lang="scss">
.checkbox-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
