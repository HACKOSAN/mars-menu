import React from 'react';

const DrinksMenu = ({ onBack, onSelectCategory }) => {
  const drinkCategories = [
    "Espresso Drinks", "Brewed Coffee", "Iced Coffee & Cold Brew", 
    "Hot Tea", "Iced Tea", "Starbucks Refresha® Drink", 
    "Frappuccino® Blended Beverages", "Hot Chocolate & Other Drinks", "Bottled Drinks"
  ];

  return (
    <div className="p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6">
        <h1 className="font-crimson text-5xl text-black">Drinks</h1>
      </header>

      <button onClick={onBack} className="back-btn mb-12">
        ← Back to Menu
      </button>

      <main className="grid grid-cols-2 gap-y-12 max-w-sm mx-auto">
        {drinkCategories.map(cat => (
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

export default DrinksMenu;