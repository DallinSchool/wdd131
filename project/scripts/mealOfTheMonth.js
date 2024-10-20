document.addEventListener('DOMContentLoaded', () => {
    const recipeOfTheMonth = [
        recipes[0], // January
        recipes[1], // February
        recipes[2], // March
        recipes[3], // April
        recipes[4], // May
        recipes[5], // June
        recipes[6], // July
        recipes[8], // August
        recipes[10], // September
        recipes[7], // October
        recipes[9], // November
        recipes[11], // December
    ];

    const fallbackRecipe = {
        name: "Moonberry Pancakes",
        description: "Light and airy pancakes infused with mystical moonberries, drizzled with nectar and sprinkled with powdered sugar.",
        imageUrl: "images/food/elven_food/moonberry_pancakes.webp"
    };

    const currentMonth = new Date().getMonth();
    
    // Select the recipe for the current month
    const mealOfTheMonth = recipeOfTheMonth[currentMonth] || fallbackRecipe;

    const mealImage = document.getElementById('meal-image');
    const mealName = document.getElementById('meal-name');
    const mealDescription = document.getElementById('meal-description');

    if (mealImage && mealName && mealDescription) {
        mealImage.src = mealOfTheMonth.imageUrl;
        mealName.textContent = mealOfTheMonth.name;
        mealDescription.textContent = mealOfTheMonth.description;
    } else {
        console.error("Meal of the Month elements not found.");
    }
});
