// Sample product data
const products = [
    {
        id: 1,
        name: "Zulu Beaded Crown",
        category: "accessories",
        price: 89.99,
        image: "images/products/zulu-crown.jfif",
        description: "Traditional Zulu beaded crown, handcrafted by skilled artisans"
    },
    {
        id: 2,
        name: "Xhosa Ceremonial Dress",
        category: "women",
        price: 249.99,
        image: "images/products/xhosa-dress.jfif",
        description: "Beautiful Xhosa ceremonial dress with authentic beadwork"
    },
    {
        id: 3,
        name: "Ndebele Necklace",
        category: "accessories",
        price: 59.99,
        image: "images/products/ndebele-necklace.jfif",
        description: "Traditional Ndebele beaded necklace, vibrant and colorful"
    },
    {
        id: 4,
        name: "Men's Traditional Shirt",
        category: "men",
        price: 129.99,
        image: "images/products/mens-shirt.jfif",
        description: "Hand-embroidered traditional shirt with cultural patterns"
    }
];

// Function to display featured products
function displayFeaturedProducts() {
    const productGrid = document.getElementById('featured-products');
    if (!productGrid) return;

    // Display first 4 products as featured
    const featuredProducts = products.slice(0, 4);
    
    productGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">R${product.price.toFixed(2)}</p>
                <br>
                <p class="product-description">${product.description}</p>
            </div>
        </div>
    `).join('');
}

// Function to display all products (for shop page)
function displayAllProducts() {
    const shopGrid = document.getElementById('shop-products');
    if (!shopGrid) return;

    shopGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">R${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    const filtered = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    const shopGrid = document.getElementById('shop-products');
    if (shopGrid) {
        shopGrid.innerHTML = filtered.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">R${product.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    }
}

// Initialize products display
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayAllProducts();
});