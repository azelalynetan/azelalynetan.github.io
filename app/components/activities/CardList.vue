<template>
  <ClientOnly>
    <div v-if="status === 'pending'">
      <p>Loading ... </p>
    </div>
    <div v-else class="flex flex-col gap-4">
      <div v-for="activity in activities" class="border-brand-darkPink bg-brand-lightPink border-2 rounded-md shadow-lg">
        <div class="p-10">
          <div class="text-xs">
            <span>{{activity.date}}</span>
          </div>
          <NuxtLink :to="activity.path" class="font-bold text-base block mb-1">
            {{activity.title}}
          </NuxtLink>
          <div class="flex flex-col sm:flex-row sm:gap-2 text-sm">
            <!-- <span class="hidden sm:block">•</span> -->
            <!-- <span>{{activity.description}}</span> -->
            <div v-if="activity.tags && activity.tags.length > 0" class="flex gap-2">
              <UiBadge v-for="tag in activity.tags" variant="gray" :key="tag">{{ tag }}</UiBadge>
            </div>
          </div>
        </div>
        <!-- <div v-if="activity.image" class="h-full max-w-60 object-cover aspect-[1.91/1] hidden sm:block">
          <img :src="activity.image" class="h-full w-auto" />
        </div> -->
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { data: activities, status } = await useAsyncData('activities', async () => {
  const items = await queryCollection('activities')
    .order('date', 'DESC')
    .select('title', 'date', 'description', 'image', "path", "tags")
    .all()

  return items.map((item) => ({
    title: item.title,
    description: item.description,
    tags: item.tags,
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