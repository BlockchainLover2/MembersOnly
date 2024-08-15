const express = require('express')
const indexRouter = express.Router()
const postController = require("../controllers/PostController")



indexRouter.get("/",postController.getAllPosts)

module.exports = indexRouter