const express = require('express');
//Express router
const router = express.Router();
const path = require('path');
// Home route
router.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, 
        '../view/index.html'));
})
// Let's export both express and router
module.exports = {router, express};