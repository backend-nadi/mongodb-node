const Show = require('../model/show')

module.exports = {
    get: async(req,res) => {
        const response = await Show.findOne({name: 'The Last Ship'})
        res.json({
            data: response
        })
    },
    comparasion: async(req,res) => {
        const eq = await Show.find({runtime: {$eq: 60}}) // -> eq itu sama dengan nilai value
        const ne = await Show.find({runtime: {$ne:60}}) // -> ne itu tidak sama dengan value
        const lt = await Show.find({runtime: {$lt:60}}) // -> lt itu dibawah nilai value bisa tambahkan e contoh lte jadinya nilai <=60
        const gt = await Show.find({runtime: {$gt:60}}) // -> gt itu diatas nilai value bisa tambahkan e contoh gte jadinya nilai >=60
        res.json({
            data: gt
        })
    },
    embededquery: async(req,res) => {
        const response = await Show.find({"rating.average": {$lt: 7}})
        const findarray = await Show.find({genres: ['Drama']})
        const indata = await Show.find({runtime: {$in:[30, 42]}}) // value bernilai 3- dan 42
        const nindata = await Show.find({runtime: {$nin: [30,42]}}) // value bukan bernilai 30 atau 42
        const counts = await Show.find({"rating.avarage": {$gte: 5}}).count() // menghitung total count
        const or = await Show.find({$or: [{"rating.avarage": {$gt: 3}} , {"rating.avarage": {$lt: 5}}]})
        const or2 = await Show.find({$or: [{'network.country.name': 'United States'}, {name: 'The Last Ship'}]})
        const nor = await Show.find({$nor: [{'network.country.name': 'United States'}, {name: 'The Last Ship'}]}) // bukan dari kedua nilai value
        const and = await Show.find({$and: [{name: 'The Last Ship'}, {genres: 'Drama'}]})
        const not = await Show.find({$not: [{name: 'The Last Ship'}, {genres: 'Drama'}]})
        const and1 = await Show.find({$and: [{genres: "Drama"}, {genres: "Horror"}]})
        res.json({
            data: and1
        })
    },
    regex: async(req,res) => {
        const name = req.query.q
        const find = await Show.find({name: {$regex: '.*' + name + '.*', $options: 'i'}})
        res.json({
            data: find
        })
    }
}