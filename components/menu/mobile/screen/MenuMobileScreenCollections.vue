<template>
  <button
    role="button"
    class="w-full text-left p-2 bg-body-100"
    @click="menu.setScreen('main')"
  >
    Back to
  </button>

  <ul>
    <li class="p-2">Collection</li>
  </ul>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const menu = useMobileMenu();
</script>
