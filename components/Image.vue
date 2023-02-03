<template>
  <figure class="w-full h-full">
    <NuxtImg :src="src" :class="imageClasses" />
  </figure>
</template>

<script lang="ts" setup>
type ImageProps = {
  src: string;
  fit?: "fill" | "none" | "scale-down" | "cover" | "contain";
};

const props = withDefaults(defineProps<ImageProps>(), {
  fit: "cover",
});

const imageClasses = computed(() => ({
  "h-full w-full": true,
  [`object-${props.fit}`]: true,
}));
</script>
