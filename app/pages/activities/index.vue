<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="font-montserrat font-bold text-3xl mb-4">My Activities</h1>
      <p>
        Showcasing my tech-related activities beyond work — 
        from writing and community engagement to continuous learning. 
      </p>
      <p>
        Some of these were originally published on <a href="https://devbits.ph" aria-label="Devbits.ph" target="_blank" rel="noopener noreferrer" class="font-bold">Devbits.ph</a>.
      </p>
    </div>
    <div class="border-brand-darkPink border-2 rounded-md p-4 mb-16 sm:px-14 sm:py-10 bg-white">
      <ActivitiesCardList />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Activities | AT Portfolio',
  ogTitle: 'Activities | AT Portfolio',
  description: 'Showcasing my tech-related activities beyond work — from writing and community engagement to continuous learning.',
  ogDescription: 'Showcasing my tech-related activities beyond work — from writing and community engagement to continuous learning.',
  ogImage: 'https://res.cloudinary.com/dytehra8d/image/upload/f_auto,q_auto/v1756536426/portfolio/assets/og_image_gpmnzz.png',
  twitterCard: 'summary_large_image',
})
</script>