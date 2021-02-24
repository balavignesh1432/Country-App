const {getData,searchName} =require('../api');
const express=require('express');
const router = express.Router();

router.get("/",getData);
router.post("/:name",searchName);

module.exports = router;
