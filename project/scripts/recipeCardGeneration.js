document.addEventListener('DOMContentLoaded', () => {
    const recipeGrid = document.getElementById('recipe-grid');
    const mealTypeSelect = document.getElementById('meal-type');
    const styleSelect = document.getElementById('style');

    function renderRecipes(filteredRecipes) {
        recipeGrid.innerHTML = '';

        if (filteredRecipes.length === 0) {
            recipeGrid.innerHTML = '<p>No recipes found for the selected filters.</p>';
            return;
        }

        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.imageUrl}" alt="${recipe.name}" loading="lazy" />
                <h3>${recipe.name}</h3>
                <h4>${recipe.style.charAt(0).toUpperCase() + recipe.style.slice(1)}</h4>
                <p>${recipe.description}</p>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            `;
            recipeGrid.appendChild(recipeCard);
        });
        
    }

    function filterRecipes() {
        const selectedMealType = mealTypeSelect ? mealTypeSelect.value : 'all';
        const selectedStyle = styleSelect ? styleSelect.value : 'all';

        const filteredRecipes = recipes.filter(recipe => {
            const matchesMealType = selectedMealType === 'all' || recipe.mealType === selectedMealType;
            const matchesStyle = selectedStyle === 'all' || recipe.style === selectedStyle;
            return matchesMealType && matchesStyle;
        });

        renderRecipes(filteredRecipes);
    }

    if (recipeGrid) {
        renderRecipes(recipes);
    }

    if (mealTypeSelect && styleSelect) {
        mealTypeSelect.addEventListener('change', filterRecipes);
        styleSelect.addEventListener('change', filterRecipes);
    }
});
