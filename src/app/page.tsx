import { ProductCard } from "@/components/products/ProductCard";
import { pb } from "@/lib/pocketbase";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const productsList = await pb.collection("productos").getList(1, 11, {
    cache: "no-store"
  });
  console.log(productsList);

  return (
    <div className="grid grid-cols-3 gap-3">
      {productsList.items.map((producto) => (
        <ProductCard key={producto.id} product={producto} />
      ))}
    </div>
  );
}
