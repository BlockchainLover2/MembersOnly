const query = require("../db/queries")
const {body, validationResult} = require("express-validator");



const validationPost = [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("content").isLength({min: 15}).withMessage("Content should be minimum 15 char"),
    body().custom((value,{req})=>{
        return req.user !== undefined
    }).withMessage("Please log-in to create a post")
]

async function getAllPosts(req,res){
    const posts = (await query.getAllPosts()).rows
    res.render("index",{posts:posts})
}

async function createPostGet(req,res){
    res.render("createPostForm")

}

const createPostPost = [validationPost, async (req,res)=>{
    if(!errorHandler(req,res)) return
    const post = req.body
    post.user = req.user
    await query.createPost(post)
    res.redirect("/")


}]

function errorHandler(req,res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send(errors)
        return false
    }
    return true
}

module.exports = {
    getAllPosts,
    createPostGet,
    createPostPost
}

