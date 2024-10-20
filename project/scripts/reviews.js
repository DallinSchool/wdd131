document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.querySelector('.submit-review form');
    const reviewList = document.getElementById('review-list'); 
    const dishDropdown = document.getElementById('dish');
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    function populateDishDropdown() {
        if (typeof recipes !== 'undefined') {
            recipes.forEach(recipe => {
                const option = document.createElement('option');
                option.value = recipe.name;
                option.textContent = recipe.name;
                dishDropdown.appendChild(option);
            });
        }

        dishDropdown.addEventListener('focus', function() {
            this.setAttribute('size', 4);  
        });
    
        dishDropdown.addEventListener('blur', function() {
            this.removeAttribute('size'); 
        });
    
        dishDropdown.addEventListener('change', function() {
            this.blur();
        });
    }
    

    if (reviewForm && reviewList) {
        reviewForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const race = document.getElementById('race').value;
            const dish = document.getElementById('dish').value;
            const reviewText = document.getElementById('review').value;

            const newReview = { name, race, dish, reviewText };
            storedReviews.push(newReview);
            localStorage.setItem('reviews', JSON.stringify(storedReviews));

            reviewForm.reset();
            renderReviews(storedReviews);
        });

        function renderReviews(reviews) {
            reviewList.innerHTML = ''; 

            const staticReviews = [
                {
                    name: 'Elrion',
                    race: 'Elf',
                    dish: 'Lunar Blossom Tarts',
                    reviewText: "The Lunar Blossom Tarts were a delicate balance of sweetness and magic! Just like mother used to make!"
                },
                {
                    name: 'Borin Stonefoot',
                    race: 'Dwarf',
                    dish: 'Dwarven Stone Stew',
                    reviewText: "The Dwarven Stone Stew is hearty, just like home! Glorf really does know how to cook dwarven meals..."
                },
                {
                    name: 'Lady Seraphine',
                    race: 'Human',
                    dish: 'Farmhouse Skillet',
                    reviewText: "The Farmhouse Skillet reminded me of the countryside. It's the perfect breakfast after a long journey. Or even before one!"
                },
                {
                    name: 'Grog the Mangler',
                    race: 'Goblin',
                    dish: 'Roasted Rat Hash',
                    reviewText: "Never thought I'd enjoy fancy food, but Glorf's roasted rat hash is surprisingly tasty! Still, I do prefer the meal to be alive."
                }
            ];

            staticReviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <p><strong>${review.name} - a ${review.race}</strong> made <strong>${review.dish}</strong>:</p>
                    <p>"${review.reviewText}"</p>
                `;
                reviewList.appendChild(reviewElement);
            });

            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                const capitalizedRace = review.race.charAt(0).toUpperCase() + review.race.slice(1);
                reviewElement.innerHTML = `
                <p><strong>${review.name} - a ${capitalizedRace}</strong> made <strong>${review.dish}</strong>:</p>
                <p>"${review.reviewText}"</p>
                `;
            reviewList.appendChild(reviewElement);
            });
        }
        populateDishDropdown();
        renderReviews(storedReviews);
    }
});
