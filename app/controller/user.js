const User = require('../model/user')

module.exports = {
    insert: async(req,res) => {
        const data = [
            {
                name: 'mariana',
                email: 'mariana@test.com',
                age: 28,
                hobbies: [
                    {
                        title: 'shooting',
                        frequency: '90'
                    },
                    {
                        title: 'cycling',
                        frequency: '10'
                    },
                ],
                phone: '094488484'
            },
            {
                name: 'angelo',
                email: 'angelo@test.com',
                age: 10,
                hobbies: [
                    {
                        title: 'shooting',
                        frequency: '20'
                    },
                    {
                        title: 'racer',
                        frequency: '10'
                    },
                ],
                phone: '00300303'
            },
            {
                name: 'moreno',
                email: 'moreno@test.com',
                age: 21,
                hobbies: [
                    {
                        title: 'sport',
                        frequency: '60'
                    },
                    {
                        title: 'dancing',
                        frequency: '50'
                    },
                ],
                phone: '08883'
            },
        ]
        await User.insertMany(data)
        res.send('success')
    },
    get: async(req,res) => {
        const response = await User.find()
        const notage = await User.find({age: {$exists: true, $gte: 30}}) // kalo di ubah false cari data yang tiak mempunyai value tersebut
        const arr = await User.find({'hobbies.title': 'climb'})
        const elem = await User.find({hobbies: {$elemMatch: {title: 'climb', frequency: {$gt: 10}}}})
        const shortingData = await User.find({},{name: 1, _id: 0})
        res.json({
            data: shortingData
        })
    },
    update: async(req,res) => {
        await User.updateMany({hobbies: {$elemMatch: {title: 'shooting'}}}, {$set:{
            'hobbies.$': {title: 'shooter',frequency: 30}
        }}) // -> .$ untuk tidak mngubah semua data atau menghilangkan data
        await User.updateMany({hobbies: {$elemMatch: {title: 'shooting'}}}, {$set:{
            'hobbies.$.highFrequency': {title: 'shooter',frequency: 30}
        }}) // menambahkan field baru ke dalam arry object
        res.send('succes updating data')
    },
    updateArrayEach: async(req,res) => {
        const {id} = req.params
        await User.updateOne({_id:id}, {$push: {hobbies: {$each: [
            {
                title: 'snorkling',
                frequency: 80
            },
            {
                title: 'sleeping',
                frequency: 100
            }
        ]}}})
        res.send('door success')
    },
    removingArray: async(req,res) => {
        const {id} = req.params
        await User.updateOne({_id:id}, {$pull: {hobbies: {title: 'sleeping'}}})
        res.send('door succes')
    }
}