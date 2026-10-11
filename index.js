const express = require("express")
const env = require("dotenv").config()
const app = express()
const port = process.env.PORT
const db_connection = require("./backend/config/db_connection")
const user_routes = require("./backend/routes/auth_routes/user_routes")
const product_routes = require("./backend/routes/product_routes/product_route")
const bodyParser = require("body-parser")
db_connection()

const cors=require('cors')
const credentials=require('./backend/middlewares/credentials')
const error=require('./backend/middlewares/error')
const corsOptions=require('./backend/config/cors_options')
const path = require("path")
app.use(credentials)
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/uploads', express.static(path.join('uploads')))

app.use("/api/v1/", user_routes)
app.use("/api/v1/", product_routes)

// app.use("/users", user_routes)
app.use(error)

app.listen(port || 5000, () => {
    console.log(`port is listening on ${port}`);
})

