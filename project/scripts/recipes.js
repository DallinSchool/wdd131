const recipes = [
    // ---------------------------------------  Goblin Meals
    {
        name: "Roasted Rat Hash",
        description: "A savory hash of roasted rat chunks, mixed with crispy goblin mushrooms and served with a fried egg.",
        mealType: "breakfast",
        style: "goblin",
        ingredients: ["Rat meat chunks", "Goblin mushrooms", "Onions", "Cragglespice seasoning", "Eggs"],
        imageUrl: "images/food/goblin_food/roasted_rat_hash.webp"
    },
    {
        name: "Swampweed Stew",
        description: "A hearty green stew made with swampweed, fish bones, and goblin spices, boiled until slimy perfection.",
        mealType: "lunch",
        style: "goblin",
        ingredients: ["Swampweed", "Fish bones", "Crushed garlic", "Goblin herbs", "Green onions"],
        imageUrl: "images/food/goblin_food/swampweed_stew.webp"
    },
    {
        name: "Moldy Blackfin",
        description: "Grilled blackfin marinated in Cragglespice (molded) and roasted over an open flame, served with a side of baked grubs.",
        mealType: "dinner",
        style: "goblin",
        ingredients: ["Blackfin", "Cragglespice marinade", "Baked grubs", "Garlic cloves", "Rock salt"],
        imageUrl: "images/food/goblin_food/moldy_blackfin_fish.webp"
    },
    {
        name: "Maggot Pudding",
        description: "A sticky, sweet pudding made from mashed maggots, honey, and crushed berries, topped with crunchy beetle shells.",
        mealType: "dessert",
        style: "goblin",
        ingredients: ["Mashed maggots", "Honey", "Crushed and whole berries", "Beetle shells", "Spoiled milk"],
        imageUrl: "images/food/goblin_food/maggot_pudding.webp"
    },

    // --------------------------------------- Elf Meals
    {
        name: "Moonberry Pancakes",
        description: "Light and airy pancakes infused with mystical moonberries, drizzled with nectar and sprinkled with powdered sugar.",
        mealType: "breakfast",
        style: "elven",
        ingredients: ["Moonberries", "Flour", "Elven nectar", "Eggs", "Powdered sugar"],
        imageUrl: "images/food/elven_food/moonberry_pancakes.webp"
    },
    {
        name: "Forest Herb Salad",
        description: "A refreshing salad made with wild greens, elven herbs, and edible flowers, tossed in a light vinaigrette.",
        mealType: "lunch",
        style: "elven",
        ingredients: ["Wild greens", "Edible flowers", "Elven herbs", "Nuts", "Vinaigrette dressing"],
        imageUrl: "images/food/elven_food/forest_herb_salad.webp"
    },
    {
        name: "Starfire Quinoa Bowl",
        description: "A delicate quinoa dish cooked with forest mushrooms, nuts, and a drizzle of starfire sap, known for its revitalizing properties.",
        mealType: "dinner",
        style: "elven",
        ingredients: ["Quinoa", "Forest mushrooms", "Nuts", "Starfire sap", "Fresh herbs"],
        imageUrl: "images/food/elven_food/starfire_quinoa_bowl.webp"
    },
    {
        name: "Lunar Blossom Tarts",
        description: "Mini tarts filled with a sweet and tangy elven flower jam, topped with edible silverleaf petals.",
        mealType: "dessert",
        style: "elven",
        ingredients: ["Tart shells", "Elven flower jam", "Honey", "Silverleaf petals", "Lemon zest"],
        imageUrl: "images/food/elven_food/lunar_blossom_tarts.webp"
    },

    // ---------------------------------------  Human Meals
    {
        name: "Farmhouse Skillet",
        description: "A hearty breakfast of scrambled eggs, fried potatoes, sausage, and cheese, all cooked together in a cast iron skillet.",
        mealType: "breakfast",
        style: "human",
        ingredients: ["Eggs", "Potatoes", "Sausage", "Cheese", "Butter"],
        imageUrl: "images/food/human_food/farmhouse_skillet.webp"
    },
    {
        name: "Grilled Chicken Sandwich",
        description: "A classic sandwich with grilled chicken breast, lettuce, tomato, and a tangy mustard sauce, served on freshly baked bread.",
        mealType: "lunch",
        style: "human",
        ingredients: ["Grilled chicken breast", "Lettuce", "Tomato", "Mustard sauce", "Bread"],
        imageUrl: "images/food/human_food/grilled_chicken_sandwich.webp"
    },
    {
        name: "Beef and Root Vegetable Stew",
        description: "A slow-cooked stew with tender beef chunks, carrots, potatoes, and herbs, served with a side of rustic bread.",
        mealType: "dinner",
        style: "human",
        ingredients: ["Beef chunks", "Carrots", "Potatoes", "Onions", "Bay leaves"],
        imageUrl: "images/food/human_food/beef_and_root_vegetable_stew.webp"
    },
    {
        name: "Apple Pie",
        description: "A flaky pie crust filled with spiced apples and baked to golden perfection, served with a scoop of vanilla ice cream.",
        mealType: "dessert",
        style: "human",
        ingredients: ["Apples", "Cinnamon", "Sugar", "Pie crust", "Butter"],
        imageUrl: "images/food/human_food/apple_pie.webp"
    },

    // ---------------------------------------  Dwarf Meals
    {
        name: "Stonebread with Cheese and Ale",
        description: "Dense stonebread served with hearty cheese and a pint of morning ale, a typical dwarven start to the day.",
        mealType: "breakfast",
        style: "dwarven",
        ingredients: ["Stonebread", "Hard cheese", "Morning ale", "Rock salt", "Butter"],
        imageUrl: "images/food/dwarven_food/stonebread_with_cheese_and_ale.webp"
    },
    {
        name: "Mutton Meat Pie",
        description: "A savory meat pie filled with tender mutton, onions, and rich gravy, encased in a golden, flaky crust.",
        mealType: "lunch",
        style: "dwarven",
        ingredients: ["Mutton", "Onions", "Gravy", "Pie crust", "Thyme"],
        imageUrl: "images/food/dwarven_food/mutton_meat_pie.webp"
    },
    {
        name: "Dwarven Stone Stew",
        description: "A robust stew made with root vegetables, beef, and potatoes, slow-cooked in a stone pot to bring out rich flavors.",
        mealType: "dinner",
        style: "dwarven",
        ingredients: ["Beef", "Potatoes", "Carrots", "Dwarven spices", "Broth"],
        imageUrl: "images/food/dwarven_food/dwarven_stone_stew.webp"
    },
    {
        name: "Molten Rock Cakes",
        description: "Small, rock-shaped cakes with a molten chocolate center, dusted with powdered sugar and served warm.",
        mealType: "dessert",
        style: "dwarven",
        ingredients: ["Flour", "Cocoa powder", "Dark chocolate", "Eggs", "Sugar"],
        imageUrl: "images/food/dwarven_food/molten_rock_cakes.webp"
    }
];