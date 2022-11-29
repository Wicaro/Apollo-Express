const express       = require('express');
const session       = require('express-session')
const bodyParser    = require('body-parser')
const app           = express()
const flash         = require('connect-flash')
const cookieParser  = require('cookie-parser')
const cors          = require('cors')
const router        = require('../routes/Router')
const path          = require('path')
const dotenv        = require('dotenv').config()



class ExpressConfiguration{

    async startApp(){

        app.listen(process.env.HOST_PORT, ()=>{
            console.log(`Author: Koda`)
            console.log(`Documentation: https://apolloexpress.com/`)
            console.log(`Application running: http://${process.env.HOST}:${process.env.HOST_PORT}/`)
        })

    }

    async App(){

        app.use(session({ secret: `${process.env.SECRET_SESSION}`, resave: true, saveUninitialized: true }))
        app.use(express.static(path.join(__dirname, '../assets/public')))
        app.set('view engine', 'ejs')
        app.set('views', path.join(__dirname, '../resources/views'));

        app.use(cookieParser())
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.use(flash())
        app.use(cors())
        app.use(router)

    }
    
}

module.exports = new ExpressConfiguration();