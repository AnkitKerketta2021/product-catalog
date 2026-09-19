import { ProductGrid } from "./components/ProductGrid";
import { products } from "./data/products";

export default function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="header-copy">
          <p className="eyebrow">React Project 02</p>
          <h1>Product Catalog</h1>
          <p className="subtitle">
            Build reusable product interfaces with props, composition, list
            rendering, and clean component boundaries.
          </p>
        </div>
        <div className="learning-panel">
          <span>Focus</span>
          <strong>Props + Reusability</strong>
          <span>{products.length} products</span>
        </div>
      </header>
      <section className="catalog-section" aria-labelledby="catalog-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Featured collection</p>
            <h2 id="catalog-heading">Popular picks</h2>
          </div>
          <p className="section-note">One card component. Different data.</p>
        </div>
        <ProductGrid products={products} />
      </section>
      <footer className="page-footer">
        <p>
          Learning goal: understand how the same component can render completely
          different UI from props.
        </p>
      </footer>
    </main>
  );
}
