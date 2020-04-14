const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')

// обработка POST-запроса на маршруте posts
router.post('/posts', (req, res) => {
    // экземпляр post модели Post наследует у него методы для записи в базу
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, data) => {
        // выводим ошибку либо успех
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            })
        }
    })
})

router.get('/posts', (req, res) => {
    // найдем все записи в базе данных
    Post.find({}, 'title description', (err, posts) => {
        if (err) {
            res.sendStatus(500)
        } else {
            // вернем их методом send
            res.send({ posts: posts })
        }
    }).sort({ _id: -1 })
})

module.exports = router