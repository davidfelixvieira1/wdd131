document.addEventListener('DOMContentLoaded', () => {
    const reviewCountSpan = document.getElementById('reviewCount');
    const currentYearSpan = document.getElementById('currentYear');
    const lastModifiedSpan = document.getElementById('lastModified');
    
    // Display current year and last modified date
    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
    
    // Check if 'formSubmitted' flag exists in sessionStorage
    if (sessionStorage.getItem('formSubmitted') === 'true') {
        // Increment the review count
        let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        reviewCount += 1;
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display updated review count
        reviewCountSpan.textContent = reviewCount;

        // Remove the flag from sessionStorage
        sessionStorage.removeItem('formSubmitted');
    } else {
        // If no flag, ensure the count is set to zero
        reviewCountSpan.textContent = localStorage.getItem('reviewCount') || 0;
    }
});



