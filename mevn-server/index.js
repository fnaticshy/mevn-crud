const express = require('express'),
 bodyParser = require('body-parser'),
 cors = require('cors'),
 morgan = require('morgan'),
 app = express(),
 config = require('./config/config'),
 mongoose = require('mongoose'),
 routes = require('./routes/posts');

mongoose.Promise = global.Promise

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

// конектимся к бд
mongoose.connect(config.dbURL, config.dbOptions)
// прослушиваем подключение
mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        // включаем сервер express
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))

// ToDo disconnected