import { Product } from "@medusajs/medusa";

export default async function useFeaturedProducts() {
  const { $medusa } = useNuxtApp();

  const fetchFeaturedProducts = async () => {
    try {
      const { products } = await $medusa.products.list({
        is_giftcard: false,
        limit: 4,
      });

      return products;
    } catch (e) {
      return [] as Product[];
    }
  };

  return useAsyncData("get-featured-products", () => fetchFeaturedProducts());
}
