import React, { useState, useEffect } from 'react';
import './global.css';

const ProductModal = ({ product, onClose }) => {
  const hasMatrix = !!product.matrix;
  const hasSizes = !!product.sizes;
  const hasVariants = !!product.variants;

  const keys = hasMatrix 
    ? Object.keys(product.matrix) 
    : (hasSizes ? Object.keys(product.sizes) : (hasVariants ? Object.keys(product.variants) : null));
  
  const isSingleSize = hasMatrix && keys && keys.length === 1 && keys[0] === 'One';
  
  const [selectedKey, setSelectedKey] = useState(keys ? keys[0] : 'Default');

  const getFlavorKeys = () => {
    if (hasMatrix && product.matrix[selectedKey]) {
      return Object.keys(product.matrix[selectedKey]);
    }
    return null;
  };

  const flavorKeys = getFlavorKeys();
  const [selectedFlavor, setSelectedFlavor] = useState(flavorKeys ? flavorKeys[0] : 'Standard');

  useEffect(() => {
    if (hasMatrix && product.matrix[selectedKey]) {
      const availableFlavors = Object.keys(product.matrix[selectedKey]);
      if (!availableFlavors.includes(selectedFlavor)) {
        setSelectedFlavor(availableFlavors[0]);
      }
    }
  }, [selectedKey, hasMatrix, product.matrix, selectedFlavor]);

  let price = product.price || 0;
  let nutrition = {};

  if (hasMatrix) {
    const sizeData = product.matrix[selectedKey];
    if (sizeData && sizeData[selectedFlavor]) {
      const data = sizeData[selectedFlavor];
      price = data.price;
      nutrition = data.nutrition || {};
    } else if (sizeData) {
      const firstFlavor = Object.keys(sizeData)[0];
      const data = sizeData[firstFlavor];
      price = data.price;
      nutrition = data.nutrition || {};
    }
  } else if (hasSizes) {
    price = product.sizes[selectedKey];
    nutrition = product.nutrition?.[selectedKey] || product.nutrition || {};
  } else if (hasVariants) {
    price = product.variants[selectedKey];
    nutrition = product.nutrition?.[selectedKey] || product.nutrition || {};
  } else {
    nutrition = product.nutrition || {};
  }

  const currentFlavorKeys = hasMatrix && product.matrix[selectedKey] 
    ? Object.keys(product.matrix[selectedKey]) 
    : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">✕</button>
        
        <div className="modal-content">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="modal-product-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="mars-logo-small" style={product.image ? {display: 'none'} : {}}>MARS</div>
          
          <h2 className="product-title">{product.name}</h2>
          <p className="product-subtitle">Mars Coffee House</p>
          
          {product.description && (
            <p className="product-description">{product.description}</p>
          )}
          
          <div className="selection-grid-container">
            {keys && keys.length > 0 && !isSingleSize && (
              <div className="selection-column">
                <p className="selection-label">Select Size</p>
                <div className="size-selector-container-grid">
                  {keys.map(k => (
                    <button 
                      key={k} 
                      onClick={() => setSelectedKey(k)} 
                      className={`size-btn-square ${selectedKey === k ? 'active' : ''}`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="selection-column">
              <p className="selection-label">{isSingleSize ? 'Select Type' : 'Select Flavor'}</p>
              {currentFlavorKeys && currentFlavorKeys.length > 1 ? (
                <select 
                  className="flavor-dropdown"
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                >
                  {currentFlavorKeys.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              ) : (
                <div className="flavor-dropdown disabled-box">
                  {currentFlavorKeys && currentFlavorKeys.length === 1 ? currentFlavorKeys[0] : 'Standard'}
                </div>
              )}
            </div>
          </div>

          <div className="nutrition-card">
            <h4 className="nutrition-title">Nutrition Facts</h4>
            <div className="nutrition-list">
              {Object.entries(nutrition || {}).length > 0 ? (
                Object.entries(nutrition).map(([k, v]) => (
                  <div key={k} className="nutrition-row">
                    <span className="nutrition-label">{k.replace('_', ' ')}</span>
                    <span className="nutrition-value">{v}</span>
                  </div>
                ))
              ) : (
                <p className="nutrition-empty">Mars Profile</p>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <div className="price-display">
              {price?.toLocaleString()} <span className="price-currency">IQD</span>
            </div>
            <button onClick={onClose} className="done-btn">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [menuData, setMenuData] = useState(null);
  const [view, setView] = useState('hub'); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProd, setSelectedProd] = useState(null);

  useEffect(() => {
    fetch('/data/menu_data.json')
      .then(res => res.json())
      .then(data => setMenuData(data))
      .catch(err => console.error("Error loading menu data:", err));
  }, []);

  if (!menuData) {
    return (
      <div className="loading-screen">
        <div className="mars-circle-btn">MARS</div>
        <p>Loading...</p>
      </div>
    );
  }

  const ImageOrPlaceholder = ({ src, alt, className }) => {
    if (!src) {
      return <div className="mars-circle-btn shadow-lg">MARS</div>;
    }
    return (
      <div className="product-image-container">
        <img 
          src={src} 
          alt={alt} 
          className="product-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('image-fallback');
          }}
        />
        <span className="image-fallback-text">MARS</span>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* HUB VIEW */}
      {view === 'hub' && (
        <div className="page-container">
          <header className="hub-header">
            <div>
              <h1 className="font-crimson brand-title">mars</h1>
              <p className="brand-subtitle">Coffee House</p>
            </div>
            <div className="location-badge">Erbil</div>
          </header>
          
          <main className="hub-main">
            <h2 className="section-title">Menu</h2>
            <div 
              onClick={() => setView('drinks')} 
              className="mars-card-list"
            >
              {menuData.main_drinks_image ? (
                <div className="product-image-container">
                  <img 
                    src={menuData.main_drinks_image} 
                    alt="Drinks" 
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                    }}
                  />
                  <span className="image-fallback-text">MARS</span>
                </div>
              ) : (
                <div className="mars-circle-btn">Drinks</div>
              )}
              <h3 className="card-title">Drinks →</h3>
            </div>
            <div 
              onClick={() => setView('food')} 
              className="mars-card-list"
            >
              {menuData.main_food_image ? (
                <div className="product-image-container">
                  <img 
                    src={menuData.main_food_image} 
                    alt="Food" 
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                    }}
                  />
                  <span className="image-fallback-text">MARS</span>
                </div>
              ) : (
                <div className="mars-circle-btn">Food</div>
              )}
              <h3 className="card-title">Food →</h3>
            </div>
          </main>
        </div>
      )}

      {/* DRINKS CATEGORIES VIEW */}
      {view === 'drinks' && (
        <div className="page-container">
          <h1 className="font-crimson page-title">Drinks</h1>
          <button onClick={() => setView('hub')} className="back-btn">← Back</button>
          
          <main className="category-grid">
            {menuData.drinks_categories.map(cat => (
              <div 
                key={cat.name} 
                onClick={() => { setActiveCategory(cat); setView('products'); }} 
                className="category-item"
              >
                <ImageOrPlaceholder src={cat.image} alt={cat.name} />
                <span className="cat-label">{cat.name}</span>
              </div>
            ))}
          </main>
        </div>
      )}

      {/* FOOD CATEGORIES VIEW */}
      {view === 'food' && (
        <div className="page-container">
          <h1 className="font-crimson page-title">Food</h1>
          <button onClick={() => setView('hub')} className="back-btn">← Back</button>
          
          <main className="category-grid">
            {menuData.food_categories.map(cat => (
              <div 
                key={cat.name} 
                onClick={() => { setActiveCategory(cat); setView('products'); }} 
                className="category-item"
              >
                <ImageOrPlaceholder src={cat.image} alt={cat.name} />
                <span className="cat-label">{cat.name}</span>
              </div>
            ))}
          </main>
        </div>
      )}

      {/* PRODUCTS VIEW */}
      {view === 'products' && activeCategory && (
        <div className="page-container">
          <div className="products-header">
            <h1 className="font-crimson page-title-small">{activeCategory.name}</h1>
            <button onClick={() => {
              const isDrinks = menuData.drinks_categories.some(c => c.name === activeCategory.name);
              setView(isDrinks ? 'drinks' : 'food');
            }} className="back-btn">← Categories</button>
          </div>
          
          <main className="products-grid">
            {activeCategory.items.map(p => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProd(p)} 
                className="product-item"
              >
                <ImageOrPlaceholder src={p.image} alt={p.name} />
                <span className="cat-label">{p.name}</span>
              </div>
            ))}
          </main>
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProd && (
        <ProductModal 
          product={selectedProd} 
          onClose={() => setSelectedProd(null)} 
        />
      )}
    </div>
  );
}
