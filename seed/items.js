const db = require('../db')
const Item = require('../models/items')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  // Item.collection.drop()
  const items = [
    {
      name: 'Sunglasses',
      description: 'Ray Ban Aviators',
      price: 'Price: $249.99',
      image:
        'https://library.kissclipart.com/20180906/ruw/kissclipart-disney-world-clipart-disneyland-magic-kingdom-clip-a8cf97b09e15d788.jpg',
      id: '62df0454e8c14fe3e9f1ae3b'
    },
    {
      name: 'Water Bottle',
      description: 'Keep your water ice cold.',
      price: 'Price: $19.99',
      image: 'https://flyclipart.com/thumb2/clipart-disney-parks-459226.png',
      id: '62df0454e8c14fe3e9f1ae3c'
    },
    {
      name: 'Hat',
      description: 'I like this hat',
      price: 'Price: $49.99',
      image:
        'https://e7.pngegg.com/pngimages/395/361/png-clipart-legoland-california-resort-logo-brand-legoland-drive-legoland-logo-text-retail-thumbnail.png',
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
