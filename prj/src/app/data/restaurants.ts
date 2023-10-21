import IRest from '../models/restaurant';

const restaurants: IRest[] = [
  {
    id: 1,
    name: 'Burger Kingdom',
    address: 'Staalstraat 12 1011 JL Amsterdam',
    description: 'Nicest place for burgers',
    category: ['american', 'burgers', 'street food'],
    image:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20',
    rating: {
      rate: 4.2,
      count: 120,
    },
    isClosed: false,
    isNew: false,
    menu: {
      food: [
        {
          id: 1,
          name: 'Cheeseburger',
          description: 'Nice grilled burger with cheese',
          price: 8.5,
        },
        {
          id: 2,
          name: 'Fries',
          description: 'Fried french fries',
          price: 2.5,
        },
      ],
      dessert: [
        {
          id: 3,
          name: 'Vanilla ice cream',
          description: 'Ice cream',
          price: 2,
        },
      ],
      drinks: [
        {
          id: 4,
          name: 'Coca-Cola',
          price: 1.75,
        },
        {
          id: 5,
          name: 'Fanta',
          price: 1.5,
        },
        {
          id: 6,
          name: 'Sprite',
          price: 1.5,
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Krua Thai',
    address: 'Staalstraat 22, 1011 JM Amsterdam',
    description: 'Traditional Thai cuisine',
    category: ['thai', 'asian'],
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.7,
      count: 1004,
    },
    isClosed: true,
    isNew: false,
    menu: {
      food: [
        {
          id: 1,
          name: 'Pad Thai',
          description: 'Stir-fried rice noodle with chicken or seafood',
          price: 8.5,
        },
        {
          id: 2,
          name: 'Tom Yum',
          description: 'Hot and sour Thai soup',
          price: 13,
        },
      ],
      dessert: [
        {
          id: 3,
          name: 'Mango Sticky Rice',
          description:
            'Traditional Thai dessert with sweet sticky rice and fresh mangoes',
          price: 5.7,
        },
        {
          id: 4,
          name: 'Thai Banana Fritters',
          description: 'Thai fried bananas with coconut ice cream',
          price: 7.5,
        },
      ],
      drinks: [
        {
          id: 5,
          name: 'Iced Tea With Lemon',
          price: 2,
        },
        {
          id: 6,
          name: 'Coca-Cola',
          price: 3,
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Trattoria Graziella',
    address: 'Nieuwe Doelenstraat 12-14, 1012 CP Amsterdam',
    description: 'Italian cuisine',
    category: ['italian', 'pizza', 'pasta'],
    image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.5,
      count: 156,
    },
    isClosed: false,
    isNew: true,
    menu: {
      food: [
        {
          id: 1,
          name: 'Carbonara',
          description: 'Nice grilled burger with cheese',
          price: 22,
        },
        {
          id: 2,
          name: 'Bolognese',
          description: 'Fried french fries',
          price: 22,
        },
        {
          id: 3,
          name: 'Insalata mista',
          description: 'Mixed salad',
          price: 5,
        },
      ],
      dessert: [],
      drinks: [
        {
          id: 4,
          name: 'Coca-Cola',
          price: 1.75,
        },
        {
          id: 5,
          name: 'Fanta',
          price: 1.5,
        },
        {
          id: 6,
          name: 'Sprite',
          price: 1.5,
        },
      ],
    },
  },
  {
    id: 4,
    name: 'The Seafood Bar',
    address: 'Spui 15, 1012 WX Amsterdam',
    description: 'Seafood cuisine',
    category: ['seafood'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.6,
      count: 8961,
    },
    isClosed: false,
    isNew: false,
    menu: {
      food: [
        {
          id: 1,
          name: 'Salmon fillet with grilled leek',
          description: '',
          price: 22,
        },
        {
          id: 2,
          name: 'Fish and chips',
          description: 'Fried Cod Filet',
          price: 19.5,
        },
        {
          id: 3,
          name: 'Plateau',
          description: 'Fresh salad, smoked mackerel, shrimp, crab salad and two types of smoked salmon',
          price: 17.5,
        },
      ],
      dessert: [
        {
          id: 4,
          name: 'Lemon Meringue Pie',
          description:
            'Dessert pie consisting of a shortened pastry base filled with lemon curd and topped with meringue',
          price: 7.95,
        },
      ],
      drinks: [
        {
          id: 5,
          name: 'San Pellegrino',
          price: 3.5,
        },
        {
          id: 6,
          name: 'Fever-Tree',
          price: 4,
        },
        {
          id: 7,
          name: 'Lipton Ice Tea',
          price: 3.25,
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Sampurna',
    address: 'Singel 498, 1017 AX Amsterdam',
    description: 'Indonesian cuisine',
    category: ['asian', 'indonesian'],
    image: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.3,
      count: 1676,
    },
    isClosed: false,
    isNew: false,
    menu: {
      food: [
        {
          id: 1,
          name: 'Ayam Malakka',
          description: 'Chickenfillet in a spicy peanut sauce with tomato and spring onions',
          price: 21.5,
        },
        {
          id: 2,
          name: 'Udang Mentega',
          description: 'Shrimps in a soya sauce with spring unions and ginger',
          price: 27.5,
        },
        {
          id: 3,
          name: 'Bami Goreng Jakarta',
          description: 'Fried rice with chicken and shrimps',
          price: 19.5,
        },
      ],
      dessert: [],
      drinks: [
        {
          id: 4,
          name: 'Coca-Cola',
          price: 1.75,
        },
        {
          id: 5,
          name: 'Soda',
          price: 1.5,
        },
      ],
    },
  },
  {
    id: 6,
    name: 'Pancakehouse Upstairs',
    address: 'Grimburgwal 2, 1012 GA Amsterdam',
    description: 'Pancakes',
    category: ['desserts'],
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.6,
      count: 23,
    },
    isClosed: false,
    isNew: true,
    menu: {
      food: [],
      dessert: [
        {
          id: 1,
          name: 'Chocolate sauce & coconut',
          description: '',
          price: 11.25,
        },
        {
          id: 2,
          name: 'Banana & honey',
          description: '',
          price: 12.5,
        },
        {
          id: 3,
          name: 'Apple & cinnamon',
          description: '',
          price: 12.5,
        },
        {
          id: 4,
          name: 'Bacon, cheese & sugared ginger',
          description: '',
          price: 14.5,
        },
        {
          id: 5,
          name: 'Ham, cheese & tomato',
          description: '',
          price: 14.5,
        },
      ],
      drinks: [
        {
          id: 6,
          name: 'Pot of tea',
          price: 3.25,
        },
        {
          id: 7,
          name: 'Hot chocolate milk with whipped cream',
          price: 4.75,
        },
        {
          id: 8,
          name: 'Fresh orange juice',
          price: 4,
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Fabel Friet',
    address: 'Runstraat 1, 1016 GJ Amsterdam',
    description: 'Cozy fastfood restaurant',
    category: ['street food'],
    image: 'https://images.unsplash.com/photo-1675523300593-667579c8488a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: {
      rate: 4.7,
      count: 121,
    },
    isClosed: false,
    isNew: true,
    menu: {
      food: [
        {
          id: 1,
          name: 'Frikandel',
          description: 'Deep-fried sausage made from minced meat, spices, and seasonings',
          price: 2.95,
        },
        {
          id: 2,
          name: 'Croquettes',
          description: 'Traditional Dutch snack',
          price: 3.25,
        },
        {
          id: 3,
          name: 'Fries',
          description: '',
          price: 3.95,
        },
      ],
      dessert: [],
      drinks: [
        {
          id: 4,
          name: 'Coca-Cola',
          price: 2.75,
        },
        {
          id: 5,
          name: 'Fuze Tea Mango',
          price: 2.75,
        },
      ],
    },
  },
];

export default restaurants;
