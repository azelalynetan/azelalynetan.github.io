---
title: "A simple way to add custom layouts and scoped slots in Nuxt 3"
date: "2022-09-11"
description: "Written a post"
tags: ["Blog", "Nuxt"]
---

In Nuxt 3, it allows us to use different customizable layouts for our application.

To get started, let’s create a default layout:

Create a folder ‘layouts’ to the root of your project.
Create a default.vue file inside the layouts folder.
Add this code in your ~/layouts/default.vue:
```VUE
<template>
  <div>
    Some default layout shared across all pages
    <slot />
  </div>
</template>
```

Let’s add additional components/contents to our default layout.
```VUE
<template>
  <div>
    <header>Welcome to my site!</header>
    <main>
      <slot />
    </main>
    <footer>All rights reserved.</footer>
  </div>
</template>
```
In this example, all pages in our application will automatically have a header and footer. The content that we will set in the pages will be rendered in the `<slot>` element inside the default layout.

How to create a custom layout:

Create a new vue file inside the layouts folder. In this case, let’s have a custom.vue.
In your ~/layouts/custom.vue, add this code:
```VUE
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <sidebar />
      <slot />
    </main>
    <footer>All rights reserved.</footer>
  </div>
</template>
```
In this example, all pages with custom layout will have a sidebar and a different header. Since we have `<slot />` already defined inside `<main>` for our page content, and we want to have a customizable header, we can add one more slot with a name on it as it’s identifier.

Let’s apply the custom layout to our page.
```VUE
<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> 
        My Profile
      </template>
      <p> This is my profile page </p>
    </NuxtLayout>
  </div>
</template>
```
In Nuxt 3, we need to wrap our template with `<NuxtLayout>` and add the name of the layout that we want to use.

Noticed that we added `<template #header>,` this will be rendered inside `<slot name="header"></slot>` in the custom.vue.

Add this in your script.
```VUE
<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: false,
});
</script>
```
This config is needed to override the default layout when applying custom layout per page.

And voila, that’s how you can add layouts to your Nuxt 3 application. 😃

*Originally posted in [Devbits.ph](https://devbits.ph/azelalynetan/a-simple-way-to-add-custom-layouts-ju1m)*