document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const products = [
    { id: 'fc-1888', name: "Flux capacitor", avgRating: 4.5 },
    { id: 'fc-2050', name: "Power laces", avgRating: 4.7 },
    { id: 'fs-1987', name: "Time circuits", avgRating: 3.5 },
    { id: 'ac-2000', name: "Low voltage reactor", avgRating: 3.9 },
    { id: 'jj-1969', name: "Warp equalizer", avgRating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});

