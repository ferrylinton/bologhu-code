const express = require('express');


var router = express.Router();
router.get('/', getData);

function getData(req, res, next) {
    let data = {
        name: 'Ferry L. H.'
    }

    res.status(200).json(data);
}

module.exports = router;