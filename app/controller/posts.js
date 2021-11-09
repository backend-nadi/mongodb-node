const Post = require('../model/posts')

module.exports = {
    insert: async(req,res) => {
        const data = {
            title: 'my frist blog',
            text: 'hello this is my first blog',
            tags: ['it', 'develop', 'managering'],
            creator: '6188e8de155c4809b20c78f4',
            comments: [
                {
                    text: 'your blog is good',
                    author: '6188e8de155c4809b20c78f3'
                }
            ]
        }

        await Post.create(data)
        res.send('success')
    },
    get: async(req,res) => {
       const response =  await Post.aggregate([
            {$lookup: {
                from: 'users',
                localField: 'comments.author',
                foreignField: '_id',
                as: 'user_reply'
            }},
            {
                $lookup: {
                    from: 'users',
                    localField: 'creator',
                    foreignField: '_id',
                    as: 'user_creator'
                }
            }
        ])
        res.json({
            data: response
        })
    },
    update: async(req,res) => {
        const {id} = req.params
        const posts = await Post.updateOne({_id: id}, [
            {
                $set: {
                    text: req.body.text,
                    
                } 
            },
        ])
        res.json({
            response: 'success',
            data: posts
        })

    },
    addMoreArray: async(req,res) => {
        const {id} = req.params
        const data = {
                text: 'hi im new here,please help',
                author: '6188e8de155c4809b20c78f5'
        }
        await Post.update({_id:id}, {
            $push:{
                comments: data
            }
        })
        res.send('succes add array')
    }
}