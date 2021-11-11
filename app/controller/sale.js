const Sale = require('../model/sales')

module.exports = {
    insert: async(req,res) => {
        const data = [
            {
                volume: 100,
                target: 10
            },
            {
                volume: 200,
                target: 20
            },
            {
                volume: 175,
                target: 300
            },
        ]
        await Sale.insertMany(data)
        res.send('success')
    },
    get: async(req,res) => {
        const expr = await Sale.find({$expr:{$gt: ["$target", "$volume"]}}) // mencari value yg dimana jumlah target lebih besar dari volume
        
        res.json({
            data: expr
        })
    }
}