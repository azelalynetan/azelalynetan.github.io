<script setup lang="ts">
const route = useRoute()

const { data: activity } = await useAsyncData('activity', async () => {
  const item = await queryCollection('activities')
    .path(route.path)
    .first()
  if (!item) return null

  return {
    ...item,
    date: item.date
      ? new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : null,
    description: item.description,
  }
})

useSeoMeta({
  title: activity.value?.title,
  description: activity.value?.description
})
</script>

<template>
  <div v-if="activity" class="prose mx-auto px-4 text-wrap">
    <div class="mb-6">
      <p class="font-roboto text-sm mb-0">{{activity.date}}</p>
      <h1 class="font-roboto font-bold text-2xl mb-0">{{ activity.title }}</h1>
    </div>
    
    <div v-if="activity.tags && activity.tags.length > 0" class="flex gap-2">
      <UiBadge v-for="tag in activity.tags" variant="gray" :key="tag">{{ tag }}</UiBadge>
    </div>
    
    <div class="md-content">
      <ContentRenderer :value="activity" class="font-roboto" />
    </div>
  </div>  
</template>