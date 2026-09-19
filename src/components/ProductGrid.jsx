import { ProductCard } from "./ProductCard";
export function ProductGrid({ products }) {
  if (!products?.length)
    return (
      <div className="empty-state">
        <p>No products available.</p>
      </div>
    );
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
