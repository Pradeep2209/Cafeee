// Complete Menu Data Structure
const menuData = {
    'rice-bowls': {
        title: 'Rice Bowls',
        tagline: "I'll fill you up slowly",
        items: [
            { name: 'Herb Rice', price: 129, isSpecial: false },
            { name: 'Mexican Rice', price: 159, isSpecial: false },
            { name: 'Chinoue Spl Herb Rice', price: 189, isSpecial: true },
            { name: 'Creamy Alfredo Rice', price: 199, isSpecial: false },
            { name: 'Peri Peri Creamy Rice', price: 219, isSpecial: false },
            { name: 'Tandoori Paneer', price: 239, isSpecial: true }
        ]
    },
    'pasta': {
        title: 'Pasta',
        tagline: "Creamy when handled Right",
        items: [
            { name: 'White Sauce', price: 169, isSpecial: false },
            { name: 'Pink Sauce', price: 179, isSpecial: false },
            { name: 'Red Sauce', price: 189, isSpecial: false },
            { name: 'Chinoue Spl Spicy Sauce', price: 199, isSpecial: true }
        ]
    },
    'momos': {
        title: 'Momos',
        tagline: "Hot juicy, Don't burn yourself",
        items: [
            { name: 'Steamed Momos', variants: { 'Veg': 129, 'Paneer': 149 }, isSpecial: false },
            { name: 'Fried Momos', variants: { 'Veg': 149, 'Paneer': 169 }, isSpecial: false },
            { name: 'Schezwan Momos', variants: { 'Veg': 199, 'Paneer': 229 }, isSpecial: false },
            { name: 'Tandoori Momos', variants: { 'Veg': 229, 'Paneer': 249 }, isSpecial: true }
        ]
    },
    'snacks': {
        title: 'Snacks',
        tagline: "Looks small Ruins self control",
        items: [
            { name: 'Salted French Fries', price: 119, isSpecial: false },
            { name: 'Periperi French Fries', price: 129, isSpecial: false },
            { name: 'Spring Rolls', price: 139, isSpecial: false },
            { name: 'Chinoue Crunch Pasta', price: 149, isSpecial: false },
            { name: 'Schezwan Spring Rolls', price: 179, isSpecial: true },
            { name: 'Veg Manchuria', price: 199, isSpecial: false },
            { name: 'Tandoori Spring Rolls', price: 199, isSpecial: false },
            { name: 'Loaded Nugget Fries', price: 219, isSpecial: true },
            { name: 'Loaded Nugget Nachos', price: 239, isSpecial: false },
            { name: 'Loaded Paneer Fries', price: 249, isSpecial: false },
            { name: 'Loaded Paneer Nachos', price: 249, isSpecial: true }
        ]
    },
    'brownie': {
        title: 'Brownie',
        tagline: "Break me. I won't complain",
        items: [
            { name: 'Chocolate Brownie', price: 119, isSpecial: false },
            { name: 'Triple Chocolate Brownie', price: 129, isSpecial: true },
            { name: 'Oreo Brownie', price: 129, isSpecial: false },
            { name: 'KitKat Crust', price: 129, isSpecial: false },
            { name: 'LotusBiscoff', price: 139, isSpecial: false },
            { name: 'Pistachio Brownie', price: 149, isSpecial: true }
        ],
        addOns: [
            { name: 'Vanilla ice-cream', price: 39 },
            { name: 'Chocolate Ice-cream', price: 58 }
        ]
    },
    'waffle': {
        title: 'Waffle',
        tagline: "The messier, the better",
        items: [
            { name: 'Chocolate', price: 89, isSpecial: false },
            { name: 'Double Chocolate', price: 99, isSpecial: false },
            { name: 'Caramel', price: 109, isSpecial: false },
            { name: 'Oreo', price: 119, isSpecial: false },
            { name: 'White Chocolate', price: 119, isSpecial: false },
            { name: 'KitKat', price: 129, isSpecial: false },
            { name: 'Triple Chocolate', price: 129, isSpecial: true },
            { name: 'Lotus Biscoff', price: 129, isSpecial: false },
            { name: 'Pistachio', price: 139, isSpecial: false },
            { name: 'Kunafa chocolate', price: 149, isSpecial: true },
            { name: 'Kunafa Pistachio', price: 159, isSpecial: false }
        ],
        addOns: [
            { name: 'Vanilla Ice-cream', price: 39 },
            { name: 'Chocolate ice-cream', price: 59 }
        ]
    },
    'cake-bowls': {
        title: 'Cake Bowls',
        tagline: "Go deep. There's more inside",
        items: [
            { name: 'Oreo Crumble', price: 179, isSpecial: false },
            { name: 'Triple Chocolate', price: 179, isSpecial: true },
            { name: 'Kit kat Crust', price: 189, isSpecial: false }
        ]
    },
    'choco-dips': {
        title: 'Choco Dips',
        tagline: "Dip it slow. Don't rush this",
        items: [
            { name: 'Cake Dip', price: 49, isSpecial: false },
            { name: 'Wafer Dip', price: 49, isSpecial: false },
            { name: 'Little Hearts', price: 59, isSpecial: false }
        ]
    },
    'mojito': {
        title: 'Mojito',
        tagline: "Sip me... things get sweaty!",
        items: [
            { name: 'Virgin Mojito', price: 119, isSpecial: false },
            { name: 'Lemon Punch spicy', price: 119, isSpecial: false },
            { name: 'Masala Thumsup', price: 109, isSpecial: false },
            { name: 'Blue Lagoon', price: 139, isSpecial: false },
            { name: 'Strawberry Mint', price: 139, isSpecial: false },
            { name: 'Chinoue Spl fusion mojito', price: 149, isSpecial: true }
        ]
    },
    'latte': {
        title: 'Latte',
        tagline: "Pull me up until I finish",
        items: [
            { name: 'Ocean Latte', price: 139, isSpecial: false },
            { name: 'Thai Choco Latte', price: 149, isSpecial: false },
            { name: 'Choco Orange Latte', price: 199, isSpecial: true },
            { name: 'Rose Pistachio Latte', price: 239, isSpecial: false },
            { name: 'Tiramisu Latte', price: 249, isSpecial: true }
        ]
    },
    'boba': {
        title: 'Boba',
        tagline: "Suck it, Chew it, Smile",
        items: [
            { name: 'Classic Boba Tea', price: 159, isSpecial: false },
            { name: 'Strawberry Boba Milkshake', price: 179, isSpecial: false },
            { name: 'Chocolate Boba Milkshake', price: 179, isSpecial: false },
            { name: 'Blueberry Boba Milkshake', price: 179, isSpecial: false },
            { name: 'Boba Hot Chocolate', price: 189, isSpecial: false }
        ]
    },
    'cold-coffee': {
        title: 'Cold Coffee',
        tagline: "Hits hard",
        items: [
            { name: 'Classic cold coffee', price: 119, isSpecial: false },
            { name: 'Chocolate cold coffee', price: 139, isSpecial: false },
            { name: 'Cranberry cold coffee', price: 159, isSpecial: true },
            { name: 'White chocolate cold coffee', price: 159, isSpecial: false },
            { name: 'Lotus biscoff cold coffee', price: 169, isSpecial: false }
        ]
    },
    'hot-chocolate': {
        title: 'Hot Chocolate',
        tagline: "Melts you slowly",
        items: [
            { name: 'Hot Chocolate', price: 159, isSpecial: false },
            { name: 'Hot Chocolate with Brownie', price: 219, isSpecial: true }
        ]
    },
    'hot-drinks': {
        title: 'Hot Drinks',
        tagline: "Warms you from inside",
        items: [
            { name: 'Tea', price: 49, isSpecial: false },
            { name: 'Masala Tea', price: 59, isSpecial: false },
            { name: 'Rose Petal Tea', price: 59, isSpecial: false },
            { name: 'Green Tea', price: 69, isSpecial: false }
        ]
    },
    'cheesecakes': {
        title: 'Cheese Cakes',
        tagline: "Gentle at first. Then it's hits you",
        items: [
            { name: 'Blueberry', price: 179, isSpecial: false },
            { name: 'Caramel', price: 179, isSpecial: false },
            { name: 'Red Velvet', price: 209, isSpecial: false },
            { name: 'Triple Chocolate', price: 249, isSpecial: true },
            { name: 'Choco Brownie Cheesecake', price: 249, isSpecial: false },
            { name: 'Lotus Biscoff', price: 259, isSpecial: false },
            { name: 'Kunafa Chocolate', price: 299, isSpecial: false },
            { name: 'Kunafa Pistachio', price: 319, isSpecial: true }
        ]
    },
    'tresleches': {
        title: 'Tresleches',
        tagline: "Gets better the deeper you go",
        items: [
            { name: 'Plain Tresleches', price: 159, isSpecial: false },
            { name: 'Blueberry', price: 179, isSpecial: false },
            { name: 'Caramel', price: 179, isSpecial: true },
            { name: 'Red Velvet', price: 199, isSpecial: false },
            { name: 'Triple Chocolate', price: 219, isSpecial: false },
            { name: 'Lotus Biscoff', price: 229, isSpecial: false },
            { name: 'Choco Brownie', price: 239, isSpecial: false },
            { name: 'Kunafa Chocolate', price: 259, isSpecial: true },
            { name: 'Kunafa Pistachio', price: 279, isSpecial: false }
        ]
    },
    'desserts': {
        title: 'Desserts',
        tagline: "You know you want to",
        items: [
            { name: 'Apricot Delight', price: 159, isSpecial: false },
            { name: 'Tiramisu', price: 199, isSpecial: false },
            { name: 'Banana Foster', price: 179, isSpecial: true },
            { name: 'Death by Chocolate', price: 249, isSpecial: false },
            { name: 'Rasmalia Delight', price: 249, isSpecial: false }
        ]
    },
    'kunafa': {
        title: 'Kunafa',
        tagline: "Break it gently. Let it melt.",
        items: [
            { name: 'Cheese Kunafa', price: 229, isSpecial: false },
            { name: 'Blueberry Kunafa', price: 249, isSpecial: false },
            { name: 'Caramel Kunafa', price: 249, isSpecial: false },
            { name: 'White Chocolate Kunafa', price: 259, isSpecial: false },
            { name: 'Nutella Kunafa', price: 299, isSpecial: false },
            { name: 'Triple Chocolate Kunafa', price: 319, isSpecial: false },
            { name: 'Lotus Biscoff Kunafa', price: 319, isSpecial: false },
            { name: 'Pistachio Kunafa', price: 349, isSpecial: true },
            { name: 'Chocolate Brownie Kunafa', price: 399, isSpecial: true }
        ],
        addOns: [
            { name: 'Vanilla ice-cream', price: 39 },
            { name: 'Chocolate Ice-cream', price: 59 }
        ]
    }
};

// Whatsapp notification link
function sendWhatsApp() {
  window.open("https://wa.me/919000909090?text=Website%20Updated%20Successfully.%20Check%20Here:%20https://pradeep2209.github.io/Cafeee/");
}

// Close Welcome Modal
function closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const mainContent = document.getElementById('mainContent');
    
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        mainContent.style.display = 'block';
    }, 300);
}

// Navigate to Menu Item Page
function navigateTo(pageId) {
    const data = menuData[pageId];
    if (!data) {
        console.error('Page not found:', pageId);
        return;
    }

    const container = document.getElementById('menuPageContainer');
    const html = generateMenuPage(pageId, data);
    
    container.innerHTML = html;
    document.getElementById('mainContent').style.display = 'none';
    container.style.display = 'block';
    
    window.scrollTo(0, 0);
    
    const backBtn = document.querySelector('.back-button');
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
}

// Generate Menu Page HTML
function generateMenuPage(pageId, data) {
    let itemsHTML = '';

    if (data.items) {
        data.items.forEach(item => {
            if (item.variants) {
                itemsHTML += `
                    <div style="margin-bottom: 25px;">
                        <div class="menu-item" style="margin-bottom: 10px;">
                            <div class="item-info">
                                <span class="item-name">${item.name}</span>
                                ${item.isSpecial ? '<span class="chef-special">👨‍🍳</span>' : ''}
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            ${Object.entries(item.variants).map(([variant, price]) => `
                                <div style="background: #f0e8df; padding: 12px; border-radius: 8px;">
                                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 5px; font-weight: 500;">${variant}</div>
                                    <div class="item-price">₹${price}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                itemsHTML += `
                    <div class="menu-item">
                        <div class="item-info">
                            <span class="item-name">${item.name}</span>
                            ${item.isSpecial ? '<span class="chef-special">👨‍🍳</span>' : ''}
                        </div>
                        <div class="item-price">₹${item.price}</div>
                    </div>
                `;
            }
        });
    }

    let addOnsHTML = '';
    if (data.addOns) {
        addOnsHTML = `
            <div class="addon-section">
                <h4>+ Add Ons</h4>
                ${data.addOns.map(addon => `
                    <div class="menu-item">
                        <div class="item-info">
                            <span class="item-name addon">+ ${addon.name}</span>
                        </div>
                        <div class="item-price">₹${addon.price}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    return `
        <div class="menu-item-page">
            <div class="page-header">
                <button class="back-button">← Back</button>
                <h1>${data.title}</h1>
                <p class="page-tagline"><em>- ${data.tagline}</em></p>
            </div>
            <div class="page-content">
                <div class="items-container">
                    <div class="item-category">
                        ${itemsHTML}
                        ${addOnsHTML}
                    </div>
                </div>
            </div>
            <footer class="footer">
                <p>&copy; 2026 Chinoue Cafe & Patisserie. All rights reserved.</p>
                <p class="footer-tagline">Crafted with love ❤️</p>
            </footer>
        </div>
    `;
}

// Go Back to Main Menu
function goBack() {
    document.getElementById('menuPageContainer').style.display = 'none';
    document.getElementById('menuPageContainer').innerHTML = '';
    document.getElementById('mainContent').style.display = 'block';
    window.scrollTo(0, 0);
}

// Go to Main from Logo
function goToMain() {
    const container = document.getElementById('menuPageContainer');
    if (container.innerHTML.trim() !== '') {
        goBack();
    }
}

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
});

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.menu-category-card');
    
    if (query === '') {
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
        });
        return;
    }
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        
        if (title.includes(query)) {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
        } else {
            card.style.opacity = '0.3';
            card.style.pointerEvents = 'none';
        }
    });
}
