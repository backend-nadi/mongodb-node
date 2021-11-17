const Person = require('../model/person')

module.exports = {
    get: async(req,res) => {
        // await Person.createIndexes({"dob.age": -1})s
        // const data = await Person.find({"dob.age": {$gt:20}}).explain("executionStats")
        // const selector = await Person.find({},{name: {title:1, first:1,last:1},email: 1,phone: 1})
        // const index1 = await Person.find({"dob.age":35}).explain().sort({gender: 1})
        // const index2 =  await Person.createIndexes({email:1}, {unique: true})
        const dex = await Person.find({email: "abigail.clark@example.com"})
        res.json({
            data: dex
        })
        
    },
    getIndexOne: async(req,res) => {
        // await Person.createIndexes({"dob.age": 1}, {partialFilterExpression: {gender: 'male'}})

        const response = await Person.find({nat: 'DE'})
        res.json({
            data: response
        })
    },
    changingArray: async(req,res) => {
        const example = [
            {
                name: {
                    title: 'mr',
                    first: 'johshon',
                    last: 'dwyne'
                },
                email: 'jdp@test.com',
                hp: '088838383'
            },
            {
                name: {
                    title: 'ms',
                    first: 'dina',
                    last: 'peterson',
                },
                email: 'test2@test.com',
                hp: '088838383'
            },
            {
                name: {
                    title: 'mr',
                    first: 'apple',
                    last: 'dong'
                },
                email: 'tets3@test.com',
                hp: '088838383'
            },
        ]
        const change = []
        example.forEach(data =>{
           const names = data.name.title + ' ' + data.name.first + ' ' + data.name.last
           const datas = {
               fullname: names,
               email: data.email,
               hp: data.hp
           }
           change.push(datas)
            
        })
        res.json({
            data: change
        })
    },
    getById: async(req,res) => {
        const {id} = req.params
        const response = await Person.findOne({_id: id})
        res.json({
            data: response
        })
    },
    updateFIeld: async(req,res) => {
        await Person.updateMany({}, {$rename: {id: ids}})
        res.send('success')
    }
}