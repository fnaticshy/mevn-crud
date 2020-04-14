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

// получение единичной записи
router.get('/posts/:id', (req, res) => {
    // воспользуемся моделью Post и методом findById,
    // ID приходит со стороны клиента как значение id объекта request,
    // берем только поля title и description найденного объекта
    Post.findById(req.params.id, 'title description', (err, post) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(post)
        }
    })
})

// обновление единичной записи
router.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description', (err, post) => {
        if (err) {
            console.log(err)
        } else {
            if (req.body.title) {
                post.title = req.body.title
            }
            if (req.body.description) {
                post.description = req.body.description
            }
            post.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/posts/:id', (req, res) => {
    Post.remove({
        _id: req.params.id
    }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router