<template>
  <ClientOnly>
    <Teleport to="#actions">
      <div class="flex gap-2 items-center justify-end text-xl">
        <slot>
          <NuxtLink to="/cart">
            <IconCart />
          </NuxtLink>
          <NuxtLink to="/account">
            <IconUser />
          </NuxtLink>
        </slot>
      </div>
    </Teleport>
  </ClientOnly>
</template>
