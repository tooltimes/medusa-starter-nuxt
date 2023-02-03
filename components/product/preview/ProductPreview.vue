<template>
  <div class="aspect-square rounded bg-body-100">
    <NuxtImg class="mix-blend-multiply" :src="product.thumbnail"> </NuxtImg>
  </div>
</template>

<script lang="ts" setup>
import { ProductPreviewType } from "~~/types/product";

type Props = {
  product: ProductPreviewType;
};

defineProps<Props>();
</script>
