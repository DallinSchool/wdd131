document.addEventListener('DOMContentLoaded', () => {
    const goblinWords = [
        { word: "Grickle", description: "To burn something unintentionally, but still eat it anyway." },
        { word: "Squishmash", description: "A mashed combination of ingredients due to being lazy." },
        { word: "Glubnug", description: "A small, round mushroom often cooked with goblin herbs or eaten raw." },
        { word: "Binglebop", description: "A term used when friends come together to share a meal." },
        { word: "Snarfrizzle", description: "To eat quickly and noisily when something is very tasty." },
        { word: "Flamfrozzle", description: "To cook something over an open flame until it has a nice crisp to it." },
        { word: "Zizzlecrunch", description: "A crunchy topping added to dishes for texture. Don't ask what it is." },
        { word: "Cragglespice", description: "A special goblin spice used to make food more flavorful. It may or may not be stolen." },
        { word: "Nibbletock", description: "Small bites of food that are shared amongst friends!" },
        { word: "Glimmerpot", description: "A pot that holds food made to share with others." },
        { word: "Gruncheon", description: "A brunch-like meal served to those who wake up late." },
        { word: "Frothflop", description: "Any frothy drink that's enjoyed with a meal. Dwarves know this well!" }
    ];

    const currentMonth = new Date().getMonth();
    const goblinWordOfTheMonth = goblinWords[currentMonth];

    const goblinWordContainer = document.getElementById('goblin-word-container');
    if (goblinWordContainer) {
        goblinWordContainer.innerHTML = `<strong>${goblinWordOfTheMonth.word}</strong>: ${goblinWordOfTheMonth.description}`;
    }
});
