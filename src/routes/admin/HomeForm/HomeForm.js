const express = require("express");
const mongoose = require('mongoose');
const HomeFormModel = require("../../../models/Forms/HomeFormModel");

const postHomeForm = (req, resp) => {
  const { name,number,email,message,country } = req.body;
  const val = new HomeFormModel({
    _id: new mongoose.Types.ObjectId(),
    name,number,email,message,country
  })
    .save()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

const getHomeForm =  (req, resp) => {
  HomeFormModel.find()
    .then((result) => {
      resp.status(200).json({ result });
    })
    .catch((err) => {
      resp.status(500).json({ err });
    });
};

// Single Data Delete
const delHomeForm = async (req, resp) => {
  const _id = req.params.id;
  try {
    const result = await HomeFormModel.findOneAndDelete({ _id });
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(500).json({ problem: error });
  }
};

module.exports = { postHomeForm , getHomeForm , delHomeForm};
