import { ProductBadge } from "./ProductBadge";
import { ProductRating } from "./ProductRating";
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});
export function ProductCard({ product }) {
  const {
    name,
    category,
    description,
    price,
    originalPrice,
    rating,
    reviewCount,
    badge,
    image,
    accent,
  } = product;
  return (
    <article className={`product-card product-card--${accent}`}>
      <div className="product-media">
        <img src={image} alt={name} loading="lazy" />
        {badge && <ProductBadge label={badge} />}
        <button
          type="button"
          className="favorite-button"
          aria-label={`Add ${name} to favorites`}
        >
          ♡
        </button>
      </div>
      <div className="product-content">
        <p className="product-category">{category}</p>
        <h3>{name}</h3>
        <p className="product-description">{description}</p>
        <ProductRating rating={rating} reviewCount={reviewCount} />
        <div className="product-footer">
          <div className="price-group">
            <strong>{currencyFormatter.format(price)}</strong>
            {originalPrice && (
              <span>{currencyFormatter.format(originalPrice)}</span>
            )}
          </div>
          <button type="button" className="add-button">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
