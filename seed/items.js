const db = require('../db')
const Item = require('../models/items')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  Item.collection.drop()
  const items = [
    {
      name: 'Sunglasses',
      description: 'Ray Ban Aviators',
      price: 'Price: $249.99',
      image:
        'https://images.ray-ban.com/is/image/RayBan/805289307655__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2',
      id: '62e2d73389ded95a95d5e8d8'
    },
    {
      name: 'Water Bottle',
      description: 'Keep your water ice cold.',
      price: 'Price: $19.99',
      image:
        'https://www.ikea.com/us/en/images/products/ikea-365-water-bottle-dark-gray__0916298_pe785100_s5.jpg',
      id: '62df0454e8c14fe3e9f1ae3c'
    },
    {
      name: 'Hat',
      description: 'I like this hat',
      price: 'Price: $49.99',
      image:
        'https://cdn.shopify.com/s/files/1/1915/8837/products/Black-Basic-Plain-Solid-Baseball-Cap-For-Men_300x.jpg?v=1583488016',
      id: '62df0454e8c14fe3e9f1ae3d'
    }
  ]
  await Item.insertMany(items)
  console.log('Items are ready!')
}
const run = async () => {
  await main()
  db.close()
}
run()
