export function ProductRating({ rating, reviewCount }) {
  return (
    <div
      className="product-rating"
      aria-label={`Rated ${rating} out of 5 from ${reviewCount} reviews`}
    >
      <span className="stars" aria-hidden="true">
        ★★★★★
      </span>
      <strong>{rating}</strong>
      <span>({reviewCount})</span>
    </div>
  );
}
