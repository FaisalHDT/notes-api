 const express = require('express');
 const router = express.Router();


 router.get('/', (req, res) => {
     res.send(process.env.APP_NAME);
 
 });

module.exports = router;
