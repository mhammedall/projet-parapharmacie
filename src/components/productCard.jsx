function ProductCard({ product }) {
  const hasDiscount = product.id % 3 === 0;
  const discountPercentage = hasDiscount ? (product.id % 2 === 0 ? 10 : 15) : 0;
  const originalPrice = hasDiscount ? (product.price * 100 / (100 - discountPercentage)).toFixed(3) : null;

  const handleImageError = (e) => {
    console.error(`Image not found: ${product.image}`);
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%236c757d'%3EImage: " + product.image + "%3C/text%3E%3C/svg%3E";
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge bg-danger fs-6">-{discountPercentage}%</span>
        </div>
      )}
      
      {/* Product Image */}
      <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={handleImageError}
        />
      </div>

      <div className="card-body d-flex flex-column p-3">
        <h6 className="card-title text-dark fw-bold mb-2" style={{ fontSize: "0.9rem" }}>
          {product.name}
        </h6>
        
        <p className="card-text flex-grow-1 text-muted small mb-2">
          {product.description}
        </p>

        <div className="mb-2">
          <span className="badge bg-light text-dark border small">{product.category}</span>
        </div>

        <div className="mt-auto">
          {hasDiscount ? (
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="fw-bold text-danger fs-5">{product.price.toFixed(3)} TND</span>
              <span className="text-muted text-decoration-line-through small">{originalPrice} TND</span>
            </div>
          ) : (
            <div className="mb-2">
              <span className="fw-bold text-dark fs-5">{product.price.toFixed(3)} TND</span>
            </div>
          )}

          <button className="btn btn-primary w-100 py-2 fw-semibold" style={{ fontSize: "0.85rem" }}>
            AJOUTER AU PANIER
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;