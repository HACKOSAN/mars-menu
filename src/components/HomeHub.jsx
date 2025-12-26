import React from 'react';

export default function HomeHub({ onNavigate }) {
  return (
    <div className="p-6 md:p-12">
      <header className="mb-20 flex justify-between items-start">
        <div>
          <h1 className="font-crimson text-6xl lowercase tracking-tighter leading-none">mars</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mt-2 ml-1">Coffee House</p>
        </div>
        <div className="border-2 border-[#203467] text-[#203467] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Kirkuk</div>
      </header>
      <main className="max-w-xl mx-auto">
        <h2 className="text-4xl font-black mb-10 tracking-tight">Menu</h2>
        <div onClick={() => onNavigate('drinks')} className="mars-card-list">
          <div className="mars-circle-btn">Drinks</div>
          <h3 className="text-3xl font-bold">Drinks →</h3>
        </div>
        <div onClick={() => onNavigate('food')} className="mars-card-list">
          <div className="mars-circle-btn">Food</div>
          <h3 className="text-3xl font-bold">Food →</h3>
        </div>
      </main>
    </div>
  );
}