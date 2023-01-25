const express = require("express");
// const ContactFormModel  = require("../../../models/Forms/ContactFormModel");
const mongoose = require('mongoose');
const ContactFormModel = require("../../../models/Forms/ContactFormModel");

const postContactForm = (req, resp) => {
  const { firstname,lastname,email,message } = req.body;
  const val = new ContactFormModel({
    _id: new mongoose.Types.ObjectId(),
    firstname,lastname,email,message
  })
    .save()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

const getContactForm =  (req, resp) => {
  ContactFormModel.find()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

module.exports = { postContactForm , getContactForm};
