const data = {
    burgers: [
        {
            title: "Classic Beef Burger",
            price: 280,
            category: "Beef",
            description: "Juicy grilled beef patty with lettuce, tomato & cheese.",
            image: "images/burgers/classic-beef-burger.png"
        },
        {
            title: "Cheese Overload Burger",
            price: 320,
            category: "Beef",
            description: "Double cheese slices with smoky beef patty.",
            image: "images/burgers/cheese-overload-burger.png"
        },
        {
            title: "BBQ Beef Burger",
            price: 350,
            category: "Beef",
            description: "Beef patty glazed with smoky BBQ sauce.",
            image: "images/burgers/bbq-beef-burger.png"
        },
        {
            title: "Double Decker Beef Burger",
            price: 450,
            category: "Beef",
            description: "Two beef patties stacked with cheese and mayo.",
            image: "images/burgers/double-decker-beef-burger.png"
        },
        {
            title: "Spicy Beef Jalapeño Burger",
            price: 370,
            category: "Beef",
            description: "Spicy jalapeños with cheese and beef patty.",
            image: "images/burgers/spicy-beef-jalapeno-burger.png"
        },
        {
            title: "Mushroom Melt Beef Burger",
            price: 390,
            category: "Beef",
            description: "Beef patty topped with sautéed mushrooms & cheese.",
            image: "images/burgers/mushroom-melt-beef-burger.png"
        },
        {
            title: "Bacon Beef Burger",
            price: 420,
            category: "Beef",
            description: "Beef patty layered with crispy beef bacon.",
            image: "images/burgers/bacon-beef-burger.png"
        },
        {
            title: "Teriyaki Beef Burger",
            price: 360,
            category: "Beef",
            description: "Sweet-savory teriyaki sauce with grilled beef patty.",
            image: "images/burgers/teriyaki-beef-burger.png"
        },
        {
            title: "Smoky Beef Tower Burger",
            price: 520,
            category: "Beef",
            description: "Triple beef patties with smoky BBQ cheese layers.",
            image: "images/burgers/smoky-beef-tower-burger.png"
        },
        {
            title: "Beef Supreme Burger",
            price: 400,
            category: "Beef",
            description: "Premium beef patty with gourmet toppings.",
            image: "images/burgers/beef-supreme-burger.png"
        },
        {
            title: "Classic Chicken Burger",
            price: 250,
            category: "Chicken",
            description: "Crispy fried chicken fillet with mayo.",
            image: "images/burgers/classic-chicken-burger.png"
        },
        {
            title: "Grilled Chicken Burger",
            price: 280,
            category: "Chicken",
            description: "Healthy grilled chicken breast with veggies.",
            image: "images/burgers/grilled-chicken-burger.png"
        },
        {
            title: "Spicy Chicken Burger",
            price: 300,
            category: "Chicken",
            description: "Crispy chicken patty with spicy chili mayo.",
            image: "images/burgers/spicy-chicken-burger.png"
        },
        {
            title: "Chicken Cheese Blast Burger",
            price: 330,
            category: "Chicken",
            description: "Chicken fillet stuffed with melting cheese.",
            image: "images/burgers/chicken-cheese-blast-burger.png"
        },
        {
            title: "BBQ Chicken Burger",
            price: 340,
            category: "Chicken",
            description: "Chicken patty brushed with BBQ sauce.",
            image: "images/burgers/bbq-chicken-burger.png"
        },
        {
            title: "Crispy Zinger Burger",
            price: 350,
            category: "Chicken",
            description: "Extra crunchy chicken fillet with spicy coating.",
            image: "images/burgers/crispy-zinger-burger.png"
        },
        {
            title: "Garlic Mayo Chicken Burger",
            price: 290,
            category: "Chicken",
            description: "Chicken patty with garlic mayo dressing.",
            image: "images/burgers/garlic-mayo-chicken-burger.png"
        },
        {
            title: "Peri-Peri Chicken Burger",
            price: 370,
            category: "Chicken",
            description: "Spicy peri-peri grilled chicken fillet.",
            image: "images/burgers/peri-peri-chicken-burger.png"
        },
        {
            title: "Double Chicken Stacker",
            price: 420,
            category: "Chicken",
            description: "Two chicken patties stacked with cheese & mayo.",
            image: "images/burgers/double-chicken-stacker.png"
        },
        {
            title: "Chicken Mushroom Burger",
            price: 360,
            category: "Chicken",
            description: "Grilled chicken patty topped with mushrooms.",
            image: "images/burgers/chicken-mushroom-burger.png"
        },
        {
            title: "Veggie Delight Burger",
            price: 220,
            category: "Veg",
            description: "Crispy vegetable patty with mayo & lettuce.",
            image: "images/burgers/veggie-delight-burger.png"
        },
        {
            title: "Cheese Veggie Burger",
            price: 250,
            category: "Veg",
            description: "Veg patty loaded with melted cheese.",
            image: "images/burgers/cheese-veggie-burger.png"
        },
        {
            title: "Spicy Paneer Burger",
            price: 280,
            category: "Veg",
            description: "Paneer patty with spicy chili sauce.",
            image: "images/burgers/spicy-paneer-burger.png"
        },
        {
            title: "Falafel Burger",
            price: 300,
            category: "Veg",
            description: "Middle Eastern style falafel patty with tahini sauce.",
            image: "images/burgers/falafel-burger.png"
        },
        {
            title: "Mushroom Veggie Burger",
            price: 270,
            category: "Veg",
            description: "Veg patty topped with sautéed mushrooms.",
            image: "images/burgers/mushroom-veggie-burger.png"
        },
        {
            title: "Grilled Tofu Burger",
            price: 310,
            category: "Veg",
            description: "Smoky grilled tofu patty with fresh veggies.",
            image: "images/burgers/grilled-tofu-burger.png"
        },
        {
            title: "Spinach & Corn Burger",
            price: 280,
            category: "Veg",
            description: "Healthy spinach-corn patty with mayo.",
            image: "images/burgers/spinach-corn-burger.png"
        },
        {
            title: "Chili Bean Burger",
            price: 300,
            category: "Veg",
            description: "Spicy kidney bean patty with salsa.",
            image: "images/burgers/chili-bean-burger.png"
        },
        {
            title: "Cheesy Potato Burger",
            price: 260,
            category: "Veg",
            description: "Crispy potato patty with cheese filling.",
            image: "images/burgers/cheesy-potato-burger.png"
        },
        {
            title: "Vegan Special Burger",
            price: 350,
            category: "Veg",
            description: "Plant-based patty with vegan cheese & sauces.",
            image: "images/burgers/vegan-special-burger.png"
        }

    ],

};

module.exports = data;
