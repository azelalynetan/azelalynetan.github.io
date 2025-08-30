<template>
  <ClientOnly>
    <div v-if="status === 'pending'">
      <p>Loading ... </p>
    </div>
    <div v-else class="flex flex-col gap-4">
      <div v-for="activity in activities" class="border-brand-darkPink bg-brand-lightPink border-2 rounded-md w-full flex gap-2 justify-between">
        <div class="p-10">
          <NuxtLink :to="activity.path" class="font-bold text-base">
            {{activity.title}}
          </NuxtLink>
          <div class="flex gap-2 text-sm">
            <span>{{activity.date}}</span>
            <span>•</span>
            <span>{{activity.description}}</span>
          </div>
        </div>
        <div v-if="activity.image" class="h-full max-w-60 object-cover aspect-[1.91/1]">
          <img :src="activity.image" class="h-full w-auto" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
type Activity = {
  title: string,
  description: string,
  date: string
  tags?: string[]
}

const { data: activities, status } = await useAsyncData('activities', async () => {
  const items = await queryCollection('activities')
    .order('date', 'DESC')
    .select('title', 'date', 'description', 'image', "path")
    .all()
  return items.map((item: any) => ({
    title: item.title,
    description: item.description,
    tags: item.meta?.tags,
    date: item.date
      ? new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      : '',
    image: item.image,
    path: item.path
  }))
})
</script>