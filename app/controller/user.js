const User = require('../model/user')

module.exports = {
    insert: async(req,res) => {
        const data = [
            {
                name: 'diana',
                email: 'diana@test.com',
                age: 23,
                hobbies: [
                    {
                        title: 'sport',
                        frequency: '60'
                    },
                    {
                        title: 'cooking',
                        frequency: '50'
                    },
                ],
                phone: '09885885'
            },
            {
                name: 'banny',
                email: 'banny@test.com',
                age: 30,
                hobbies: [
                    {
                        title: 'motor',
                        frequency: '20'
                    },
                    {
                        title: 'googling',
                        frequency: '10'
                    },
                ],
                phone: '098822'
            },
            {
                name: 'percy',
                email: 'percy@test.com',
                age: 20,
                hobbies: [
                    {
                        title: 'climb',
                        frequency: '60'
                    },
                    {
                        title: 'dancing',
                        frequency: '50'
                    },
                ],
                phone: '0999'
            },
        ]
        await User.insertMany(data)
        res.send('success')
    },
    get: async(req,res) => {
        const response = await User.find()
        const notage = await User.find({age: {$exists: true, $gte: 30}})
        res.json({
            data: notage
        })
    }
}