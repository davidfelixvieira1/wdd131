const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyw_BTyO-YWBm8Wf0p7FeqpERFjLTLp7AiA&s"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52693,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EV17WaX9JAh-JTaJJtArVoKTA97KCoQdtg&s"
    }
];

const createTempleCard = (temple) => {
    return `
        <div class="temple-card">
            <img src="${temple.imageUrl}" alt="${temple.templeName}">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </div>
        </div>
    `;
};

const renderTemples = (filterFunction = null) => {
    const templeCardsContainer = document.getElementById('temple-cards');
    templeCardsContainer.innerHTML = ''; // Clear previous cards

    const filteredTemples = filterFunction ? temples.filter(filterFunction) : temples;

    filteredTemples.forEach(temple => {
        templeCardsContainer.innerHTML += createTempleCard(temple);
    });
};

// Event listeners for filter buttons
document.getElementById('home').addEventListener('click', () => renderTemples());
document.getElementById('old').addEventListener('click', () => renderTemples(temple => new Date(temple.dedicated) < new Date('2000-01-01')));
document.getElementById('new').addEventListener('click', () => renderTemples(temple => new Date(temple.dedicated) >= new Date('2000-01-01')));
document.getElementById('large').addEventListener('click', () => renderTemples(temple => temple.area > 30000));
document.getElementById('small').addEventListener('click', () => renderTemples(temple => temple.area <= 30000));

// Render all temples on initial load
renderTemples();

// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;








