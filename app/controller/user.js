const User = require('../model/user')

module.exports = {
    insert: async(req,res) => {
        const data = [
            {
                name: 'alibaba',
                email: 'alibaba@test.com',
                age: 20
            },
            {
                name: 'bianka',
                email: 'bianka@test.com',
                age: 25
            },
            {
                name: 'andromeda',
                email: 'andromeda@test.com',
                age: 20
            },
        ]
        await User.insertMany(data)
        res.send('success')
    }
}