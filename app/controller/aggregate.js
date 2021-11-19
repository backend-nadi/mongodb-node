const Person = require('../model/person')
const User = require('../model/user')
const Product = require('../model/product')

module.exports = {
    get: async(req,res) => {
        const data = await Person.aggregate([
            {$match:{gender: 'female'}},
            {$group: {_id: {state: '$location.state'}, totalPerson: {$sum: 1}}},
            {$sort: {totalPerson: -1}}, // -1 diurutkan paling gede ke ekcil 1 kecil ke besar
            
        ])
        res.json({
            data: data
        })
    },
    project: async(req,res) => {
        const data = await Person.aggregate([
            {$project: {
                _id: 0,
                name: 1,
                email: 1,
                birthDay: {$toDate: '$dob.date'}, 
                age: '$dob.age',
                location: {
                    type: 'Point', 
                    coordinates: [
                        {$convert: {
                            input: '$location.coordinates.longitude', 
                            to: 'double'
                        }
                        }, 
                            {$convert: {
                                input: '$location.coordinates.latitude', 
                                to: 'double'}
                            }
                        ]}}},
            { $project: {_id: 0, gender: 1, birthDay:1, age:1,location:1,fullName: {$concat: [{$toUpper: '$name.title'},' ','$name.first',' ','$name.last']}}}
        ])
        res.json({
            data: data
        })
    },
    array: async(req,res) => {
        const data = await User.aggregate([
            {
                $group: {
                    _id: {age: '$age'},
                    allHobies: {$push: '$hobbies'}
                }
            }
        ])
        const data2 = await User.aggregate([
            {
                $project: {
                    _id:0,
                    hobbie: {
                        $slice: ['$hobbies', 1]
                    }
                }
            }
        ])
        res.json({
            data: data2
        })
    },
    unwind: async(req,res) => {
        const data = await Product.aggregate([
            {$unwind: '$tags'},
            {$group: {
                _id: {name: '$name'},
            }}
        ]) // memecah data      berdasarkan tags data array 
        // tambahkan $addToSet untuk menghilangkan data duplikat
        res.json({
            data: data
        })
    },
    filter: async(req,res) => {
        const data = await User.aggregate([
            {
                $project: {
                    _id: 0,
                    ages: {
                        $filter:{
                            input: '$hobbies',
                            as: 'sc',
                            cond: { $gte: ['$$sc.frequency', 23]}
                        }
                    }
                }
            }
        ])
        res.json({
            data: data
        })
    },
     multipleArray: async(req,res) => {
         const data = await User.aggregate([
             {
                 $unwind: '$hobbies'
             },
             {
                 $project: {
                     _id: 1,
                     name: 1,
                     age: 1,
                     score: '$hobbies.frequency'
                 }
             },
             {$sort: {score: -1}},
             {
                 $group: {
                     _id: "$_id",
                     name: {
                         $first: '$name'
                     },
                     maxScore: {
                         $max: '$score'
                     }
                 }
             },
             {$sort: {
                 maxScore: -1
             }}
         ])
         res.json({
             data: data
         })
     },
     bucket: async(req,res) => {
         const data = await Person.aggregate([
             {
                 $bucket: {
                     groupBy: '$dob.age',
                     boundaries: [0,18,30,50,80,120],
                     output: {
                         numPerson: {$sum: 1},
                         avarage: {
                             $avg: '$dob.age'
                         },
                         names: {
                             $push: '$name.first'
                         }
                     }
                 }
             }
         ])
         res.json({
             data: data
         })
     },
     stage: async(req,res) => {
         const data = await Person.aggregate([
             {
                 $project: {
                     _id: 0,
                     name: 1,
                     birthdate: {
                         $toDate: '$dob.date'
                     }
                 }
             },
             {
                 $sort: {
                     birthdate: 1
                 }
             },
             {$limit: 10}
         ])
         res.json({
             data: data
         })
     }
}