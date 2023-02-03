<template>
  <div class="p-4">
    <h2 class="flex justify-between items-center mb-2">
      <span>Featured products</span>
      <NuxtLink to="/store" class="font-sans text-xs"> See all </NuxtLink>
    </h2>

    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <li v-if="pending" v-for="_ in [1, 2, 3, 4]">
        <SkeletonProductPreview />
      </li>
      <li v-if="products" v-for="product in featured">
        <ProductPreview :product="product" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: products, error, pending } = await useFeaturedProducts();

const featured = computed(() => {
  if (!products.value) return [];
  return products.value.map(transformProductPreview);
});
</script>
