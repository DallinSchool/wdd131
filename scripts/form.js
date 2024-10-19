document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const productNameSelect = document.getElementById("productName");

    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    }

    if (window.location.pathname.includes("review.html")) {
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
        reviewCount++; 
        localStorage.setItem("reviewCount", reviewCount);

        const reviewCountDisplay = document.getElementById("reviewCountDisplay");
        if (reviewCountDisplay) {
            reviewCountDisplay.textContent = reviewCount;
        }
    }
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    if (currentYearSpan) currentYearSpan.textContent = currentYear;
    if (lastModifiedSpan) lastModifiedSpan.textContent = lastModified;
});
