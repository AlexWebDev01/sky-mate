export const TEMPERATURE_RANGES = [
    {name: 'DANGEROUS_FREEZING', lowestTemp: -100, highestTemp: -40},
    {name: "EXTREMELY_FREEZING", lowestTemp: -40, highestTemp: -20},
    {name: "FREEZING", lowestTemp: -20, highestTemp: -10},
    {name: "VERY_COLD", lowestTemp: -10, highestTemp: -5},
    {name: "COLD", lowestTemp: -5, highestTemp: 0},
    {name: "SLIGHTLY_COLD", lowestTemp: 0, highestTemp: 5},
    {name: "SLIGHTLY_FRESH", lowestTemp: 5, highestTemp: 10},
    {name: "FRESH", lowestTemp: 10, highestTemp: 15},
    {name: "WARM", lowestTemp: 15, highestTemp: 20},
    {name: "VERY_WARM", lowestTemp: 20, highestTemp: 25},
    {name: "HOT", lowestTemp: 25, highestTemp: 30},
    {name: "VERY_HOT", lowestTemp: 30, highestTemp: 45},
    {name: "DANGEROUSLY_HOT", lowestTemp: 45, highestTemp: 100}
];

export const CLOTHES_ADVICES_RAIN = [
    {
        tempRange: 'COLD',
        clothesList: ['Hoodie/Sweater', 'Jeans', 'Waterproof Shoes', 'Cap', 'Mittens', 'Waterproof Coat'],
        clothesDescription: 'Opt for a waterproof or water-resistant jacket made of materials like Gore-Tex or a similar breathable fabric, and layer with insulating materials such as down or synthetic insulation to keep you warm in the cold and protected from the rain.',
    },
    {
        tempRange: 'SLIGHTLY_COLD',
        clothesList: ['Hoodie', 'Waterproof Coat', 'Waterproof Boots', 'Hat', 'Umbrella'],
        clothesDescription: 'Wear a waterproof or water-resistant jacket made of materials like Gore-Tex or a similar breathable fabric, along with a thick, insulated layer such as a down or synthetic-filled jacket to keep you warm in colder temperatures.',
    },
    {
        tempRange: 'SLIGHTLY_FRESH',
        clothesList: ['Hoodie', 'Shorts', 'Sneakers', 'Cap', 'Umbrella'],
        clothesDescription: 'It`s best to wear a waterproof or water-resistant jacket made of materials like Gore-Tex or a similar breathable fabric to keep you dry and protected. Layer with a mid-weight sweater or fleece made of polyester or wool to provide insulation and warmth in cooler temperatures.',
    },
];

export const CLOTHES_ADVICES_SUN = [
    {
        tempRange: 'FREEZING',
        clothesList: ['Long Coat', 'Fleece Pants', 'Waterproof Boots', 'Wool Mittens', 'Waterproof Hat', 'Sweater', 'Underpants', 'Scarf', 'Sunglasses'],
        clothesDescription: "It's essential to prioritize both warmth and sun protection. Opt for insulating materials like wool or synthetic blends to keep you warm, and consider wearing layers with UV-protective materials or adding a UV-blocking coating to protect your skin from the sun's rays.",
    },
    {
        tempRange: 'VERY_COLD',
        clothesList: ['Down Jacket', 'Pants/ Jeans', 'Sweater', 'Leather Boots', 'Cloth Mittens', 'Hat'],
        clothesDescription: "Choose insulating materials like wool or synthetic blends for warmth, and consider wearing layers with UV-protective materials or adding a UV-blocking coating to shield your skin from the sun's rays",
    },
    {
        tempRange: 'COLD',
        clothesList: ['Down Jacket', 'Jeans', 'Hat', 'Leather Boots', 'Sunglasses*'],
        clothesDescription: "It's crucial to prioritize warmth while also protecting yourself from the sun. Opt for insulating materials like wool or synthetic blends to keep you warm, and consider wearing layers with UV-protective fabrics or adding a UV-blocking coating to shield your skin from the sun's rays."
    },
    {
        tempRange: 'SLIGHTLY_COLD',
        clothesList: ['Cotton Hoodie', 'Down Vest', 'Jeans', 'Sneakers', 'Cotton Hat'],
        clothesDescription: "Choose clothes made of breathable fabrics like nylon or polyester to provide insulation, and layer with a long-sleeved apparel made of UV-protective materials like UPF-rated polyester or a lightweight merino wool blend to shield your skin from the sun's rays.",
    },
    {
        tempRange: 'SLIGHTLY_FRESH',
        clothesList: ['Sweater', 'Long Coat', 'Cloth Pants', 'Leather Boots', 'Scarf*'],
        clothesDescription: "Consider wearing breathable fabrics like cotton or linen for your clothing layers, and opt for lightweight materials such as polyester or cotton blends for additional insulation and versatility.",
    },
    {
        tempRange: 'FRESH',
        clothesList: ['Hoodie', 'Jeans', 'Sneakers', 'Cap', 'Sunglasses*'],
        clothesDesription: "Consider wearing fabrics like cotton, linen, or lightweight synthetics that offer breathability and allow for adequate airflow to help regulate your body temperature under the sun.",
    },
    {
        tempRange: 'VERY_WARM',
        clothesList: ['T-Shirt', 'Shorts', 'Sneakers', 'Panama', 'Sunglasses*'],
        clothesDescription: "You can choose lightweight and breathable materials to stay comfortable. Consider fabrics like cotton, linen, or light synthetic blends that offer breathability and allow for adequate air circulation to keep you cool in the sun.",
    },
    {
        tempRange: 'HOT',
        clothesList: ['Top', 'Shorts', 'Open Shoes', 'Panama', 'Sunglasses*'],
        clothesDescription: "It's best to choose lightweight and breathable materials that promote airflow and moisture-wicking. Fabrics such as cotton, linen, or moisture-wicking synthetics like polyester or nylon can help keep you cool and comfortable in the heat of the sun.",
    },
];

export const CLOTHES_ADVICES_CLOUDS = [
    {
        tempRange: 'FREEZING',
        clothesList: ['Winter Coverall', 'Underpants', 'High Boots', 'Wool Mittens', 'Wool Hat', 'Sweater', 'Underpants'],
        clothesDescription: 'Choose materials like thick wool, down, or synthetic insulations to provide warmth, and opt for windproof and water-resistant fabrics to shield yourself from the elements.',
    },
    {
        tempRange: '',
        clothesList: ['Cotton Top', 'Cotton Pants', 'Leather Boots', 'Cloth Jacket'],
        clothesDescription: 'Choose comfortable and versatile materials for your clothing. Consider wearing breathable fabrics like cotton or linen, and layer with lightweight materials such as polyester or cotton blends for added warmth and flexibility.',
    },
    {
        tempRange: '',
        clothesList: ['Long Coat', 'Cotton Pants', 'Waterproof Boots', 'Scarf', 'Hat', 'Hoodie'],
        clothesDescription: 'Opt for insulating materials like wool or synthetic blends to keep you warm, and choose moisture-wicking fabrics like polyester or merino wool to help regulate body temperature and keep you comfortable in the cool conditions.',
    },
    {
        tempRange: 'SLIGHTLY_FRESH',
        clothesList: ['Sweater', 'Jacket', 'Underpants', 'Skirt/Pants', 'Hat', 'Mittens', 'Leather Boots'],
        clothesDescription: 'Opt for materials like wool or synthetic blends for insulation, and consider wearing a waterproof or water-resistant outer layer to protect against the dampness of the fog.', 
    },
    {
        tempRange: 'VERY_WARM',
        clothesList: ['T-Shirt', 'Shorts', 'Sneakers'],
        clothesDescription: "Choose lightweight and breathable materials to stay cool and comfortable. Opt for fabrics like cotton, linen, or moisture-wicking synthetics such as polyester or nylon that allow for air circulation and help wick away sweat from the body.",
    },
];

export const CLOTHES_ADVICES_SNOW = [
    {
        tempRange: 'FREEZING', 
        clothesList: ['Winter Sports Jacket', 'Waterproof Pants', 'Waterproof Boots', 'Mittens', 'Cotton Hat', 'Sweater', 'Underpants', 'Sunglasses*'],
        clothesDescription: 'Opt for materials like heavyweight wool or synthetic blends for optimal insulation, and choose waterproof or water-resistant fabrics like Gore-Tex or nylon to keep you dry and shielded from the snowy conditions.'
    },
    {
        tempRange: 'VERY_COLD',
        clothesList: ['Down-Jacket', 'Fleece Pants', 'Waterproof Boots', 'Wool Mittens', 'Wool Hat', 'Wool Scarf', 'Sweater', 'Sunglasses'],
        clothesDescription: 'Opt for materials like thick wool or synthetic blends for insulation, and choose waterproof or water-resistant fabrics like Gore-Tex or nylon to keep you dry and protected from the snowy conditions.',
    },
];

export const CLOTHES_ADVICES: any = {
    Rain: CLOTHES_ADVICES_RAIN,
    Sun: CLOTHES_ADVICES_SUN,
    Clear: CLOTHES_ADVICES_SUN,
    Clouds: CLOTHES_ADVICES_CLOUDS,
    Snow: CLOTHES_ADVICES_SNOW,
};
