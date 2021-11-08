const Product = require('../model/product')

module.exports = {
    create: async(req,res) => {
        const data = {
            name: 'mac book pro',
            price: 900,
            details: {
                cpu: 'intel i5'
            }
        }

        await Product.create(data)
        res.send('success')
    }
}