const express = require('express')
const postRouter = express.Router()
const postController = require("../controllers/PostController")


postRouter.get("/create",postController.createPostGet)
postRouter.post("/create",postController.createPostPost)


module.exports = postRouter