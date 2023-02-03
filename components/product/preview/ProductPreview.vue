<template>
  <NuxtLink :to="`/product/${product.handle}`">
    <div class="aspect-square rounded bg-body-100">
      <NuxtImg class="mix-blend-multiply" :src="product.thumbnail" />
    </div>
    <p class="my-2 font-semibold text-sm">{{ product.title }}</p>
    <p class="text-xs">{{ product.subtitle }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ProductPreviewType } from "~~/types/product";

type Props = {
  product: ProductPreviewType;
};

defineProps<Props>();
</script>
