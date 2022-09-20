const Post = require('../models/Post')
const { v4: uuid } = require('uuid')
const User = require('../models/User')

module.exports = {
    async index(req, res){
        try{
            const posts = await Post.find()
            res.status(200).json({ posts })
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }, 

    async createPost(req, res){
        const {title, description, type, imgURL} = req.body

        if(!title || !description || !imgURL || !type){
            res.status(400).json({error: 'missing some input required.'})
        }

        const post = new Post({
            _id: uuid(),
            title,
            description,
            type,
            imgURL
        })

        try{
            await post.save()

            res.status(200).json('post created with successfully')
        }catch(err){
            res.status(400).json({error: err.message})
        }
    },

    async update(req, res){
        const { id } = req.params
        const {title, description, type} = req.body

        if(!title & !description & !type){
            res.status(400).json({error: 'Update not valid'})
        }

        const post = await Post.findById(id)


        if(title){
            post.title = title 
            post.identification = title
        }
        if(description) post.description = description
        if(type) post.type = type

        try{
            await post.save()

            res.status(200).json({post})
        }catch(err){
            res.status(500).json({error: err.message})
        }
    },

    async delete(req, res){
        const { id } = req.params

        const post = await Post.findById(id)

        try{
            await post.remove()

            res.status(200).json('post deleted with successfully')
        }catch(err){
            res.status(500).json({error: err.message})
        }


    },

    uploadImg(req, res) {
        if(req.file){
            res.status(200).json('successfully')
        }else{
            res.status(400).json('error')
        }
    },

    async user(req, res){
        try{
            const user = await User.findOne({
                name: req.body.name,
            })

            const passwordValidated = await User.findOne({
                password: req.body.password,
            })


            if(!user || !passwordValidated){
                return res.status(400).json('name or password not validated.')
            }

            res.status(200).json('name and password validated!')
        }catch(err){
            res.status(400).json({error: err.message})
        }

    }
}