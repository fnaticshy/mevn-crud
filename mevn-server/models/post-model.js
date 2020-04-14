const mongoose = require('mongoose')
const Schema = mongoose.Schema

// cоздаем пользовательский тип данных PostSchema
const PostSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
})

// mongoose прикручивает к модели PostModel
// коллекцию методов:save(), remove(), find() и т.д
const PostModel = mongoose.model('posts', PostSchema)
module.exports = PostModel