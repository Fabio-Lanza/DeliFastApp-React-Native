export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../../assets/images/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../../assets/images/burguer.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../../assets/images/pasta.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../../assets/images/china.png"),
  },
  {
    id: 5,
    name: "Sea Food",
    image: require("../../assets/images/lobster.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../../assets/images/cupcake.png"),
  },
];

export const featured = {
  id: 1,
  title: "Best Restaurants",
  description: "All Around your home",
  restaurants: [
    {
      id: 1,
      name: "Il Fornaio",
      image: require("../../assets/images/fornaio.jpg"),
      description: "All kind of Pastas",
      lng: -122.34697,
      lat: 37.58011,
      address: "327 Lorton Ave, Burlingame.",
      stars: 4,
      reviews: "3.4k",
      category: "Italian",
      dishes: [
        {
          id: 1,
          name: "Carpaccio",
          description:
            "thinly sliced raw certified piedmontese beef, shaved grana padano, capers & wild arugula; drizzled with lemon olive oil",
          price: 18,
          image: require("../../assets/images/carpaccio.jpg"),
        },
        {
          id: 2,
          name: "Tagliatelle Bolognese",
          description: "egg pasta ribbons with traditional meat ragu & grana padano",
          price: 21,
          image: require("../../assets/images/taglianele.jpg"),
        },
        {
          id: 3,
          name: "Ravioli Freschi",
          description: "spinach ravioli filled with italian sausage, ricotta, grana padano & fennel; topped with fresh tomatoes, spicy tomato sauce",
          price: 26,
          image: require("../../assets/images/ravioli.webp"),
        },
      ],
    },
    {
      id: 2,
      name: "Super Duper",
      image: require("../../assets/images/SuperDuper.jpg"),
      description: "Burguers and Shakes",
      lng: -122.46923,
      lat: 37.67583,
      address: "3 Serramonte Center Space 662, Daly City.",
      stars: 4,
      reviews: "1.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Super Burguer",
          description: "Two 1/4 lb daily ground Beef patties served on a fresh baked bun with lettuce, tomato, red onion, and Super Sauce!",
          price: 10,
          image: require("../../assets/images/burguer01.png"),
        },
        {
          id: 2,
          name: "Chicken Sandwich",
          description: "Grilled chicken breast, served with lettuce, tomato, red onion, and house-made chipotle aioli on a fresh baked ciabatta bun.",
          price: 14,
          image: require("../../assets/images/chicken02.png"),
        },
        {
          id: 3,
          name: "Super Shake",
          description: "Made with Straus organic soft-serve.",
          price: 10,
          image: require("../../assets/images/shake03.png"),
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: require("../../assets/images/pizza.png"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.png"),
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.png"),
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../../assets/images/pizzaDish.png"),
        },
      ],
    },
    {
      id: 4,
      name: "SusieCakes",
      image: require("../../assets/images/suzi01.jpg"),
      description: "Simple. Classic. Delicious.",
      lng: -122.26309,
      lat: 37.51755,
      address: "649 Laurel Street,San Carlos.",
      stars: 5,
      reviews: "5k",
      category: "Sweets",
      dishes: [
        {
          id: 1,
          name: "Vanilla Blue Cupcake",
          description: "Vanilla cupcake topped and filled with our signature retro blue vanilla buttercream",
          price: 4.75,
          image: require("../../assets/images/suziCupcake01.jpg"),
        },
        {
          id: 2,
          name: "Southern Red Velvet Cake",
          description: "Deep red, moist cake lightly flavored with cocoa, filled & topped with traditional cream cheese frosting. ",
          price: 46,
          image: require("../../assets/images/suziCake01.jpg"),
        },
        {
          id: 3,
          name: "Black SusieKitty Decorated Cake",
          description: "Old-Fashioned Chocolate Cake covered in black vanilla buttercream and black sanding sugar",
          price: 66,
          image: require("../../assets/images/suziCake02.jpg"),
        },
      ],
    },
  ],
};


export const voucher = [
    {
        id: 1,
        name: "voucher1",
        image: require("../../assets/images/voucher01.jpeg"),
      },
    {
        id: 2,
        name: "voucher2",
        image: require("../../assets/images/voucher02.jpg"),
      },
    {
        id: 3,
        name: "voucher3",
        image: require("../../assets/images/voucher03.jpeg"),
      },
]