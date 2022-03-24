const db = require('../db')
const Food = require('../models/food')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const foods = [
        { name: 'Hamburger', price: 3, description: 'Not made from real ham', image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg' },
        { name: 'Hamburger with cheese', price: 4, description: 'Not made from ham, now contains cheese', image: 'https://assets.myfoodandfamily.com/adaptivemedia/rendition/195370-3000x2000.jpg?id=093000b4880e99e6cd87fa511235a789145c5a0a&ht=650&wd=1004&version=1&clid=pim'},
        { name: 'Hotdog', price: 3, description: 'Hot Diggity Dog', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png'}
    ]

    await Food.insertMany(foods)
    console.log('Yum yum time to eat!')
}

const run = async () => {
    await main()
    db.close()
}

run()