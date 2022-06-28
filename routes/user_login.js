const express = require('express')
const User = require('../model/user_model');
const router = express.Router();


//Post
router.post('/authentication', async (req, res) => {
    try {
        const data = await User.findOne({email:req.body.email})
        if (data == null) {
            throw new Error('Email nao cadastrado')
        }
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;