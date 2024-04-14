import axios from 'axios';

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const products = response.data;
        const container = document.getElementById('products-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.image}" alt="${product.title}">
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
            `;
            container.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

fetchProducts();
