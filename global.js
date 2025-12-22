let menuData = null;
let currentProduct = null;

async function getMenu() {
    if (!menuData) {
        const paths = ['./data.json', '../data.json', '../../data.json'];
        for (let path of paths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    menuData = await response.json();
                    break;
                }
            } catch (e) {}
        }
    }
    return menuData;
}

function openProductModal(productId) {
    currentProduct = menuData.products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    const isDrink = currentProduct.type === 'drinks';
    const initialSize = isDrink ? 'S' : 'Default';
    
    document.body.style.overflow = 'hidden';
    modalBody.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="w-16 h-16 mars-circle-btn mb-6 scale-75">MARS</div>
            <h2 class="font-crimson text-4xl mb-2 text-black text-center">${currentProduct.name}</h2>
            <p class="text-gray-500 text-sm mb-8 px-6 text-center">${currentProduct.description}</p>
            
            ${isDrink ? `
            <div class="size-selector-container">
                <button onclick="updateModalSize('S')" id="size-S" class="size-btn">S</button>
                <button onclick="updateModalSize('M')" id="size-M" class="size-btn">M</button>
            </div>
            ` : ''}

            <div class="w-full bg-[#f7f0e8] p-8 rounded-[2.5rem] mb-8 shadow-sm">
                <h4 class="text-[10px] font-black uppercase tracking-widest mb-4 opacity-30 text-black">Nutrition Facts</h4>
                <div id="nutrition-container"></div>
            </div>

            <div class="w-full flex justify-between items-center px-4">
                <div id="price-display" class="text-3xl font-black text-black"></div>
                <button onclick="closeModal()" class="bg-[#203467] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest active:scale-95 transition-transform">Done</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    updateModalSize(initialSize);
    setTimeout(() => modal.classList.add('active'), 10);
}

function updateModalSize(size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`size-${size}`);
    if (btn) btn.classList.add('active');

    const variant = currentProduct.variants[size];
    document.getElementById('price-display').innerHTML = `${variant.price} <small class="text-xs opacity-30 font-bold">IQD</small>`;
    
    const container = document.getElementById('nutrition-container');
    container.innerHTML = Object.entries(variant.nutrition).map(([key, val]) => `
        <div class="flex justify-between py-3 border-b border-black/5 text-sm">
            <span class="capitalize text-gray-400 font-medium">${key}</span>
            <span class="font-bold text-black">${val}</span>
        </div>
    `).join('');
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    setTimeout(() => { modal.classList.add('hidden'); document.body.style.overflow = 'auto'; }, 400);
}