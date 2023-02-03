<template>
  <MenuMobileContainer>
    <div class="grid px-4 py-2 grid-cols-3 items-center">
      <div>language</div>
      <Logo class="text-center" />
      <div class="text-right" @click="menu.close">close</div>
    </div>

    <MenuMobileScreenMain v-if="menu.screen === 'main'" />
    <MenuMobileScreenCollections v-else-if="menu.screen === 'collections'" />
  </MenuMobileContainer>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const menu = useMobileMenu();
</script>
