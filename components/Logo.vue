<template>
  <div>
    <NuxtLink to="/" class="font-display text-3xl" v-bind="$attrs">
      {{ appConfig.brand.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
