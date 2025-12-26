import React from 'react';

export default function CategoryGrid({ title, categories, onBack, onSelectCategory }) {
  return (
    <div className="p-6 md:p-12">
      <h1 className="font-crimson text-5xl mb-6">{title}</h1>
      <button onClick={onBack} className="back-btn mb-12">← Back to Menu</button>
      <main className="grid grid-cols-2 gap-y-12 max-w-sm mx-auto">
        {categories.map(cat => (
          <div key={cat} onClick={() => onSelectCategory(cat)} className="flex flex-col items-center cursor-pointer group">
            <div className="mars-circle-btn group-active:scale-95 transition-transform shadow-lg">MARS</div>
            <span className="cat-label">{cat}</span>
          </div>
        ))}
      </main>
    </div>
  );
}