const express = require('express');
const router = express.Router();

// Contact Form Routes
const {postContactForm , getContactForm} = require('./ContactForm/ContactForm')
router.post('/postcontactform' , postContactForm);
router.get('/getcontactform' , getContactForm);


// Home Form Routes
const {postHomeForm , getHomeForm} = require('./HomeForm/HomeForm')
router.post('/posthomeform' , postHomeForm);
router.get('/gethomeform' , getHomeForm);


// Subscribe Form Routes
const {postSubscribeForm , getSubscribeForm} = require('./SubscribeForm/SubscribeForm')
router.post('/postsubscribeform' , postSubscribeForm);
router.get('/getsubscribeform' , getSubscribeForm);



module.exports = router ;