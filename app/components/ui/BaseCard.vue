<template>
  <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="image" :alt="title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{title}}</div>
      <div class="text-gray-600">
        <slot name="description"></slot>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 flex gap-2 mb-2 flex-wrap">
      <UiBadge v-for="tag in tags" variant="gray" :key="tag">{{ tag }}</UiBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UiBadge } from '#components';

defineProps<{
  title: string
  description: string,
  image: string,
  tags: []
}>()
</script>