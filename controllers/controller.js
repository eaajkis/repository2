// controller.js
const mongoose = require('mongoose');
const config = require('../config');
const besked = require('../models/beskeder');
const config1 = require('../config');

mongoose.connect(config1.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.createBesked = function (navn, rum, tekst, nr) {
    return besked.create({
        navn,
        rum,
        tekst,
        nr
    })
};

exports.getBesked = function (nr) {
    return besked.findById(nr).exec();
};

exports.getBeskeder = function () {
    return besked.find().exec();
};

exports.getRum = function (rum) {
    return besked.find().distinct('rum').exec();
}