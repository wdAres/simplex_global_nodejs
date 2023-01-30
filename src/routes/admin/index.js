const express = require('express');
const router = express.Router();

// Contact Form Routes
const {postContactForm , getContactForm , delContactForm} = require('./ContactForm/ContactForm')
router.post('/postcontactform' , postContactForm);
router.get('/getcontactform' , getContactForm);
router.delete('/delcontactform/:id' , delContactForm);


// Home Form Routes
const {postHomeForm , getHomeForm, delHomeForm} = require('./HomeForm/HomeForm')
router.post('/posthomeform' , postHomeForm);
router.get('/gethomeform' , getHomeForm);
router.delete('/delhomeform/:id' , delHomeForm);

// Subscribe Form Routes
const {postSubscribeForm , getSubscribeForm, delSubscribeForm} = require('./SubscribeForm/SubscribeForm')
router.post('/postsubscribeform' , postSubscribeForm);
router.get('/getsubscribeform' , getSubscribeForm);
router.delete('/delsubscribeform/:id' , delSubscribeForm);


module.exports = router ;