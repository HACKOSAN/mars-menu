const menuData = [
    // Coffee
    { "item_name": "Espresso", "item_price_s": 2000, "item_price_m": null, "item_price_l": null, "item_category": "Coffee" },
    { "item_name": "Espresso Doppio", "item_price_s": 2500, "item_price_m": null, "item_price_l": null, "item_category": "Coffee" },
    { "item_name": "Hot Americano", "item_price_s": 2000, "item_price_m": 3000, "item_price_l": 4000, "item_category": "Coffee" },
    { "item_name": "Iced Americano", "item_price_s": 2000, "item_price_m": 3000, "item_price_l": 4000, "item_category": "Coffee" },
    { "item_name": "Turkish Coffee", "item_price_s": 2500, "item_price_m": 3500, "item_price_l": null, "item_category": "Coffee" },

    // Hot Coffee With Milk
    { "item_name": "Cortado", "item_price_s": 3000, "item_price_m": null, "item_price_l": null, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Flat white", "item_price_s": 3500, "item_price_m": null, "item_price_l": null, "item_category": "Hot Coffee With Milk" },
    { "item_name": "White Chocolate Mocha", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Dark Chocolate Mocha", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Classic Latte", "item_price_s": 2500, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Caramel latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Vanila Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Hazelnut Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Brownie Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Cookies Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Spanish latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Classic Cappuccino", "item_price_s": 2500, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Caramel Cappuccino", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Vanilla Cappuccino", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },
    { "item_name": "Hazelnut Cappuccino", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Hot Coffee With Milk" },

    // Cold Coffee
    { "item_name": "Classic Latte", "item_price_s": 2500, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Cold Coffee" },
    { "item_name": "Caramel latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Vanila Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Hazelnut Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Brownie Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Cookies Latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Spanish latte", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "White Chocolate Mocha", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Dark Chocolate Mocha", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },
    { "item_name": "Iced Dalgona", "item_price_s": 3000, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Cold Coffee" },

    // Smoothie
    { "item_name": "Strawberry", "item_price_s": null, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Smoothie" },
    { "item_name": "Passion Fruit", "item_price_s": null, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Smoothie" },
    { "item_name": "Blueberry", "item_price_s": null, "item_price_m": 3500, "item_price_l": 4500, "item_category": "Smoothie" },
    { "item_name": "Smoked", "item_price_s": null, "item_price_m": 4000, "item_price_l": 5000, "item_category": "Smoothie" },
    { "item_name": "Hawaii", "item_price_s": null, "item_price_m": 4500, "item_price_l": 5000, "item_category": "Smoothie" },
    { "item_name": "Pomegranate", "item_price_s": null, "item_price_m": 4500, "item_price_l": 5500, "item_category": "Smoothie" },
    { "item_name": "Mango With Orange", "item_price_s": null, "item_price_m": 4000, "item_price_l": 4500, "item_category": "Smoothie" },
    { "item_name": "Strawberry With Orange", "item_price_s": null, "item_price_m": 4000, "item_price_l": 4500, "item_category": "Smoothie" },

    // Milkshakes
    { "item_name": "Oreo Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Lotus Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Strawberry Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Nutella Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Blueberry Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Pistachio Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },
    { "item_name": "Dragon Milkshake", "item_price_s": 4000, "item_price_m": 5000, "item_price_l": 6000, "item_category": "Milkshakes" },

    // Bakery
    { "item_name": "Plain Croissant", "item_price_s": 2500, "item_price_m": null, "item_price_l": null, "item_category": "Bakery" },
    { "item_name": "Cheese Croissant", "item_price_s": 3000, "item_price_m": null, "item_price_l": null, "item_category": "Bakery" },
    { "item_name": "Chocolate Croissant", "item_price_s": 3500, "item_price_m": null, "item_price_l": null, "item_category": "Bakery" },

    // Cookies
    { "item_name": "Chocolate Chip", "item_price_s": 2500, "item_price_m": null, "item_price_l": null, "item_category": "Cookies" },
    { "item_name": "Red Velvet", "item_price_s": 3000, "item_price_m": null, "item_price_l": null, "item_category": "Cookies" }
];

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        icon.innerText = '🌙';
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        icon.innerText = '☀️';
    }
}

const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'hot-milk', name: 'Hot Coffee With Milk' },
    { id: 'cold-coffee', name: 'Cold Coffee' },
    { id: 'smoothie', name: 'Smoothie' },
    { id: 'shakes', name: 'Milkshakes' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'cookies', name: 'Cookies' }
];

const container = document.getElementById('menu-container');

categories.forEach(cat => {
    const section = document.createElement('section');
    section.id = cat.id;
    section.className = 'category-tab';

    const itemsHtml = menuData
        .filter(item => item.item_category === cat.name)
        .map(item => {
            const fileName = item.item_name.toLowerCase().replace(/\s+/g, '-');
            const imgPath = `assets/images/${fileName}.webp`;

            return `
                <div class="flex items-center space-x-5 border-b item-border pb-6 mb-6">
                    <div class="w-20 h-20 rounded-2xl bg-black/10 flex-shrink-0 overflow-hidden">
                        <img src="${imgPath}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                        <div style="display:none;" class="w-full h-full items-center justify-center text-[8px] font-black opacity-10 uppercase italic">Mars</div>
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h3 class="font-serif-mars text-[18px] leading-tight pr-2">${item.item_name}</h3>
                            <div class="flex space-x-4 text-right">
                                ${renderPrice(item.item_price_s, 'S')}
                                ${renderPrice(item.item_price_m, 'M')}
                                ${renderPrice(item.item_price_l, 'L')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

    section.innerHTML = `<h2 class="text-[10px] font-black uppercase tracking-[0.5em] mb-8 opacity-30">${cat.name}</h2><div>${itemsHtml}</div>`;
    container.appendChild(section);
});

function renderPrice(price, label) {
    if (!price) return '';
    return `<div class="text-right flex flex-col items-center">
                <span class="size-label">${label}</span>
                <span class="price-value">${price.toLocaleString()}</span>
            </div>`;
}

// ACTIVE UNDERLINE LOGIC
const sections = document.querySelectorAll('.category-tab');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = { 
    root: null, 
    threshold: 0.2, 
    rootMargin: "-10% 0px -70% 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                    link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        }
    });
}, observerOptions);

sections.forEach(s => observer.observe(s));