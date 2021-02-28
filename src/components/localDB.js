import boots from './collection/boots.jpg'
import highheels from './collection/highheels.jpg'
import converse from './collection/converseshoes.jpg'
import sneakers from './collection/sneakersuede.jpg'

const datas =  [
    {
        id: 1,
        title: "High Heels",
        description: "Beutiful High Heels",
        image: `${highheels}`,
        price: 1999,
    },
    {
        id: 2,
        title: "Converse Shoes",
        description: "these are trending Converse Shoes",
        image: `${converse}`,
        price: 1599,
    },
    {
        id: 3,
        title: "Sneakers",
        description: "for cool people",
        image: `${sneakers}`,
        price: 999,
    },
    {
        id: 4,
        title: "Boots",
        description: "any? cowboy here",
        image: `${boots}`,
        price: 3999,
    },
]

export default datas;