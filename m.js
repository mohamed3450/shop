document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchBar = document.getElementById('searchBar');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        if (query) {
            alert(`You searched for: ${query}`);
            // Here you can add logic to handle the search query, such as sending it to a server or filtering content.
        } else {
            alert('Please enter a search term.');
        }
    });

    // Optional: Allow pressing Enter to trigger search
    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Add click animation to the button
        submitButton.style.animation = 'clickAnimation 0.3s ease';
        
        // Remove the animation after it finishes
        submitButton.addEventListener('animationend', () => {
            submitButton.style.animation = '';
        });

        // Collect form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Display an alert with form data (for demonstration purposes)
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Here you could send the data to a server or handle it as needed
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const notification = document.createElement('div');
    notification.id = 'notification';
    document.body.appendChild(notification);

    // Sample product data
    const products = [
        { name: 'Product 1', price: '$10', imageUrl: 'images/product1.jpg' },
        { name: 'Product 2', price: '$20', imageUrl: 'images/product2.jpg' },
        { name: 'Product 3', price: '$30', imageUrl: 'images/product3.jpg' },
        { name: 'Product 4', price: '$40', imageUrl: 'images/product4.jpg' }
    ];

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button type="button">Buy</button>
        `;

        // Add click event to the Buy button
        card.querySelector('button').addEventListener('click', () => {
            showNotification(`You bought ${product.name}!`);
        });

        return card;
    }

    // Function to show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
                notification.style.opacity = '1';
            }, 500);
        }, 2000);
    }

    // Add product cards to the container
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const notification = document.createElement('div');
    notification.id = 'notification';
    document.body.appendChild(notification);

    // Sample product data
    const products = [
        { name: 'Product 1', price: '$10', imageUrl: 'images/product1.jpg' },
        { name: 'Product 2', price: '$20', imageUrl: 'images/product2.jpg' },
        { name: 'Product 3', price: '$30', imageUrl: 'images/product3.jpg' },
        { name: 'Product 4', price: '$40', imageUrl: 'images/product4.jpg' }
    ];

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button type="button">Buy</button>
        `;

        // Add click event to the Buy button
        card.querySelector('button').addEventListener('click', () => {
            // Add the clicked class to trigger animation
            card.classList.add('clicked');

            // Remove the class after animation ends
            card.addEventListener('animationend', () => {
                card.classList.remove('clicked');
            });

            // Show notification
            showNotification(`You bought ${product.name}!`);
        });

        return card;
    }

    // Function to show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
                notification.style.opacity = '1';
            }, 500);
        }, 2000);
    }

    // Add product cards to the container
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
});
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        // Redirect to the product page with the query parameter
        window.location.href = `product.html?name=${encodeURIComponent(searchInput)}`;
    } else {
        alert('Please enter a product name.');
    }
});
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        // Redirect to the product page with the query parameter
        window.location.href = `product.html?name=${encodeURIComponent(searchInput)}`;
    } else {
        alert('Please enter a product name.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Handle Buy button clicks
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Item added to cart!');
        });
    }); // Show notification function
    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.display = 'block';
        notification.style.opacity = 1;
        setTimeout(() => {
            notification.style.opacity = 0;
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 2000);
 }
});
