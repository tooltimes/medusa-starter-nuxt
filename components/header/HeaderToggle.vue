<template>
  <button class="py-2 lg:hidden" role="button" @click="open">
    <IconHamburger />
  </button>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const { open } = useMobileMenu();
</script>
