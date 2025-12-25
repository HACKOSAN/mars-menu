import React from 'react';

const FoodMenu = ({ onBack, onSelectCategory }) => {
  const foodCategories = [
    "Breakfast", "Bakery Treats", "Sandwiches & Toasties", "Chocolate & Snacks"
  ];

  return (
    <div className="p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6">
        <h1 className="font-crimson text-5xl text-black">Food</h1>
      </header>

      <button onClick={onBack} className="back-btn mb-12">
        ← Back to Menu
      </button>

      <main className="grid grid-cols-2 gap-y-12 max-w-sm mx-auto">
        {foodCategories.map(cat => (
          <div 
            key={cat} 
            onClick={() => onSelectCategory(cat)} 
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="mars-circle-btn group-active:scale-95 transition-transform">
              MARS
            </div>
            <span className="cat-label">{cat}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FoodMenu;