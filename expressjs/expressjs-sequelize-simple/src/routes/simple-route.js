const express = require('express');
const contactService = require('../services/contact-service');


var router = express.Router();
router.get('/', getData);

async function getData(req, res, next) {
    let data = await contactService.findAll();
    res.status(200).json(data);
}

module.exports = router;