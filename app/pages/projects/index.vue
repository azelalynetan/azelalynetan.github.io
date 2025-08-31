<template>
  <div class="px-4 mb-10">
    <div class="text-center mb-10">
      <h1 class="font-montserrat font-bold text-3xl mb-4">My Projects</h1>
      <p>
        Here are some of the projects I’ve worked on. 
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4">
      <UiBaseCard 
        title="Devbits.ph"
        image="https://res.cloudinary.com/dytehra8d/image/upload/v1756542261/portfolio/projects/devbits_pmswyt.png"
        :tags="['Nuxt', 'Supabase', 'Pinia', 'Tailwind', 'SASS', 'Vuex', 'Nuxt-OG-Image']"
      >
        <template #description>
          As one of the pioneer developers, I’ve witnessed this project grow and scale 
          — from its beginnings as a single-page app using Vue.js to a full-blown web application built with Nuxt 2. 
          I later led the migration from Nuxt 2 to Nuxt 3, while also developing several key features 
          such as dynamic Open Graph image generation and more.
        </template>
      </UiBaseCard>
      <UiBaseCard 
        title="Devbreak | Haveabreak.dev"
        image="https://res.cloudinary.com/dytehra8d/image/upload/v1756542262/portfolio/projects/devbreak_yqiolz.png"
        :tags="['Nuxt', 'Tailwind', 'Airtable API']"
      >
        <template #description>
          A lightweight website developed with Nuxt and Tailwind CSS, integrated with the Airtable API to handle form submissions.
        </template>
      </UiBaseCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UiBaseCard } from '#components';
</script>