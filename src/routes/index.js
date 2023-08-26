const express = require('express')
const router = express.Router()
const { contactMail } = require('../config/nodemailer');
//Route for homepage
const authController = require('../controllers/authControllers')
const { requireAuth, redirectIfLoggedIn } = require('../middleware/userAuth')
router.get('/', redirectIfLoggedIn, async (req, res) => {
    const isLoggedIn=req.cookies.jwt
    // var user=null
    // if(isLoggedIn){
    //     user==await req.user.populate('bag').execPopulate()
    // }
    res.render('./userViews/index',{
        isLoggedIn
    })
});

module.exports = router
