const express = require("express");
const mongoose = require('mongoose');
const SubscribeFormModel   = require("../../../models/Forms/SubscribeFormModel");

const postSubscribeForm = (req, resp) => {
  const {email} = req.body;
  const val = new SubscribeFormModel({
    _id: new mongoose.Types.ObjectId(),
    email
  })
    .save()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

const getSubscribeForm =  (req, resp) => {
  SubscribeFormModel.find()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

// Single Data Delete
const delSubscribeForm = async (req, resp) => {
  const _id = req.params.id;
  try {
    const result = await SubscribeFormModel.findOneAndDelete({ _id });
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(500).json({ problem: error });
  }
};

module.exports = { postSubscribeForm , getSubscribeForm , delSubscribeForm };