const Product = require('../model/product')

module.exports = {
    create: async(req,res) => {
        const data = [
            {
                name: 'axer i7',
                price: 780,
                tags: ['electronic', 'laptop', 'gadget'],
                details: {
                    cpu: 'intel i7'
                }
            },
            {
                name: 'axus i9',
                price: 889,
                tags: ['pakaian', 'sembako', 'furniture'],
                details: {
                    cpu: 'intel i9'
                }
            },
            {
                name: 'rog i3',
                price: 200,
                tags: ['electronic', 'pakaian', 'furniture'],
                details: {
                    cpu: 'intel i3'
                }
            },
        ]

        await Product.insertMany(data)
        res.send('success')
    },
    get: async(req,res) => {
        const {name} = req.query
        const getOne = await Product.find({tags: {$all: name}})
        res.json({
            data:getOne
        })
    },
}