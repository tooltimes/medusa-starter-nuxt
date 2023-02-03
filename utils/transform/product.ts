import { Product } from "@medusajs/medusa";
import { ProductPreviewType } from "~~/types/product";

export const transformProductPreview = (
  product: Product
): ProductPreviewType => {
  const { id, handle, title, subtitle, thumbnail } = product;

  return {
    id,
    handle,
    title,
    subtitle,
    thumbnail: thumbnail ?? "",
  };
};
