<template>
  <nav class="relative mx-6 my-6">
    <div class="relative flex justify-between h-16">
      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6 items-center w-full justify-center">
        <NuxtLink to="/activities" class="uppercase font-bold hover:text-brand-darkPink" activeClass="underline underline-offset-8">Activites</NuxtLink>
        <NuxtLink to="/" class="uppercase font-bold hover:text-brand-darkPink" activeClass="underline underline-offset-8">About</NuxtLink>
        <NuxtLink to="/projects" class="uppercase font-bold hover:text-brand-darkPink" activeClass="underline underline-offset-8">Projects</NuxtLink>
      </div>

      <!-- Mobile Hamburger -->
      <div class="ml-auto flex items-center md:hidden">
        <button @click="isOpen = !isOpen" class="p-2 rounded-md text-black bg-brand-darkPink hover:bg-brand-lightPink">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
              viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute left-0 w-full p-6 rounded-lg space-y-4 flex flex-col bg-brand-darkPink">
      <NuxtLink to="/activities" @click="isOpen = false" class="uppercase font-bold p-4 hover:text-white hover:bg-brand-pink rounded-md" activeClass="text-white">Activites</NuxtLink>
      <NuxtLink to="/" @click="isOpen = false" class="uppercase font-bold p-4 hover:text-white hover:bg-brand-pink rounded-md" activeClass="text-white">About</NuxtLink>
      <NuxtLink to="/projects" @click="isOpen = false" class="uppercase font-bold p-4 hover:text-white hover:bg-brand-pink rounded-md" activeClass="text-white">Projects</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)
</script>