<template>
  <div>
    <ul>
      <li>
        <button role="button" @click="() => setScreen('collections')">
          Collections
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const { setScreen } = useMobileMenu();
</script>
