import boots from './collection/boots.jpg'
import highheels from './collection/highheels.jpg'
import converse from './collection/converseshoes.jpg'
import sneakers from './collection/sneakersuede.jpg'

const datas =  [
    {
        id: 1,
        title: "High Heels",
        description: "Beautiful High Heels to make you more gorgeous than any angel or mermaid 🧜🏻‍♀️",
        image: `${highheels}`,
        price: 1999,
        qty: 1
    },
    {
        id: 2,
        title: "Converse Shoes",
        description: "these are the trending Converse Shoes you do not want to miss, buy before it goes out of stock 😱",
        image: `${converse}`,
        price: 1599,
        qty: 1
    },
    {
        id: 3,
        title: "Sneakers",
        description: "for cool and stylish people. Stand out from the crowd in these pairs and flex like a rapper 🤟",
        image: `${sneakers}`,
        price: 999,
        qty: 1
    },
    {
        id: 4,
        title: "Boots",
        description: "start your adventures and voyages in these and make it more memorable and comfortable 🏝️",
        image: `${boots}`,
        price: 3999,
        qty: 1
    },
]

export default datas;