import { useState, useEffect } from "react";
import ProductCard from "../components/productCard"; 
import productsData from "../data/products.json";

function Catalogue() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortOrder, setSortOrder] = useState("");

  // Main categories in English
  const mainCategories = [
    "All", "FACE", "BODY", "HAIR", "BABY & MOM", 
    "FOOD SUPPLEMENTS", "HYGIENE", "MEN", 
    "SUN CARE", "MAKEUP", "PROMO"
  ];

  // Subcategories in English
  const subcategories = {
    "FACE": [
      "Hydrating & Nourishing Care",
      "Anti-Age & Anti-Wrinkle", 
      "Makeup",
      "Makeup Removers & Face Cleansers",
      "Oily, Mixed & Acne Skin Care",
      "Face Masks & Scrubs",
      "Anti-Redness & Sensitive Skin Care"
    ],
    "BODY": [
      "Body Hydration & Nutrition",
      "Foot Care",
      "Hair Removal",
      "Slimming Care",
      "Body Care",
      "Joints Care"
    ],
    "BABY & MOM": [
      "Baby Gear",
      "Baby Bath & Care",
      "Baby Changing",
      "Baby Gifts & Sets",
      "Baby & Children Supplements",
      "Lice & Nits"
    ],
    "FOOD SUPPLEMENTS": [
      "Vitamins",
      "Omega & Fatty Acids",
      "Proteins",
      "Minerals",
      "Antioxidants"
    ],
    "HYGIENE": [
      "Hand Sanitizers",
      "Soaps & Disinfectants",
      "Intimate Hygiene",
      "Hand Care"
    ],
    "All": ["All"]
  };

  // Load products
  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let results = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Apply sorting
    if (sortOrder === "price-asc") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      results.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
  }, [products, searchTerm, selectedCategory, priceRange, sortOrder]);

  return (
    <div className="container-fluid py-4">
      {/* HORIZONTAL CATEGORY NAVIGATION */}
      <section className="mb-4 border-bottom">
        <div className="d-flex flex-wrap justify-content-center py-2">
          {mainCategories.map((category, index) => (
            <button
              key={index}
              className={`btn btn-link text-decoration-none fw-semibold mx-2 px-3 py-2 ${
                selectedCategory === category ? "text-primary border-bottom border-primary" : "text-dark"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className="row">
        {/* SIDEBAR WITH SUBCATEGORIES */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white fw-bold">
              {selectedCategory === "All" ? "CATEGORIES" : selectedCategory}
            </div>
            <div className="card-body p-0">
              {/* Subcategories List */}
              <ul className="list-group list-group-flush">
                {(subcategories[selectedCategory] || subcategories["All"]).map((subcat, index) => (
                  <li 
                    key={index}
                    className={`list-group-item border-0 py-2 px-3 cursor-pointer ${
                      selectedSubcategory === subcat ? "bg-light fw-bold" : ""
                    }`}
                    onClick={() => setSelectedSubcategory(subcat)}
                    style={{cursor: "pointer"}}
                  >
                    {subcat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FILTERS CARD */}
          <div className="card shadow-sm border-0 mt-4">
            <div className="card-header bg-light fw-bold">FILTERS</div>
            <div className="card-body">
              {/* Search */}
              <div className="mb-3">
                <label className="form-label fw-semibold small">Search</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search for a product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Price Range */}
              <div className="mb-3">
                <label className="form-label fw-semibold small">Price (TND)</label>
                <div className="d-flex gap-2">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  />
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  />
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-3">
                <label className="form-label fw-semibold small">Sort by</label>
                <select
                  className="form-select form-select-sm"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="border-top pt-2">
                <small className="text-muted">
                  {filteredProducts.length} product(s) found
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="col-md-9">
          {/* Category Title */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-primary fw-bold mb-0">
              {selectedCategory === "All" ? "ALL PRODUCTS" : selectedCategory}
            </h2>
            {selectedSubcategory !== "All" && (
              <span className="badge bg-secondary fs-6">{selectedSubcategory}</span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <div className="card shadow-sm bg-white p-5 border-0">
                <h4 className="text-secondary mb-3">No products found</h4>
                <p className="text-muted">
                  Adjust your search criteria or filters to find what you're looking for.
                </p>
              </div>
            </div>
          ) : (
            <div className="row g-3">
              {filteredProducts.map(product => (
                <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;