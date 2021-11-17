const Place = require('../model/place')


module.exports = {
    insert: async(req,res) => {
        const data = [
            {
                name: 'kelapa gading',
                location: {
                    type: 'Point',
                    coordinates: [106.905462, -6.160455]
                }
            },
            // {
            //     name: 'Bellatera',
            //     location: {
            //         type: 'Point',
            //         coordinates: [-6.1784994, 106.8916262]
            //     }
            // },
            // {
            //     name: 'TM Session City',
            //     location: {
            //         type: 'Point',
            //         coordinates: [-6.1594949, 106.7853433]
            //     }
            // },
            
        ]
        
        await Place.insertMany(data)
        res.send('success')
    },
    get: async(req,res) => {
        try {
            const response = await Place.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.471114,37.771104]}, $maxDistance: 500, $minDistance:10}}})
            res.json({
                data: response
            })
        } catch (error) {
            res.json({
                error: error.message
            })
        }
    },
    getKm: async(req,res) => {
        try {
            const long = parseFloat(req.query.long)
            const lat = parseFloat(req.query.lat)
            const response = await Place.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: [long, lat]
                        },
                        distanceField: 'dist.calculated',
                        maxDistance: 500,
                        spherical: true
                    }
                }
            ])
            const datas = []
            response.forEach(data => {
                const kilometer = (data.dist.calculated / 1000).toFixed(1)
                const format = {
                    id: data._id,
                    name: data.name,
                    km: `${kilometer} KM`,
                    location: {
                        type: data.location.type,
                        coordinate: data.location.coordinates
                    }
                }
                datas.push(format)
            })
            res.json({
                data: datas
            })
        } catch (error) {
            res.json({
                error: error.message
            })
        }
    }
}