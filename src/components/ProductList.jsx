import React from 'react';

export default function ProductList({ category, allProducts, onBack, onSelectProduct }) {
  const filtered = allProducts.filter(p => p.category === category);

  return (
    <div className="p-6 md:p-12">
      <h1 className="font-crimson text-3xl mb-4 lowercase tracking-tighter">{category}</h1>
      <button onClick={onBack} className="back-btn mb-12">← Back</button>
      <main className="grid grid-cols-2 gap-y-12 max-w-sm mx-auto">
        {filtered.map(p => (
          <div key={p.id} onClick={() => onSelectProduct(p)} className="flex flex-col items-center cursor-pointer group">
            <div className="mars-circle-btn group-active:scale-95 transition-transform shadow-lg">MARS</div>
            <span className="cat-label px-2">{p.name}</span>
          </div>
        ))}
      </main>
    </div>
  );
}