import Medusa from "@medusajs/medusa-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const medusa = new Medusa({
    baseUrl: config.public.medusaBackendUrl,
    maxRetries: 3,
  });

  return {
    provide: {
      medusa,
    },
  };
});
