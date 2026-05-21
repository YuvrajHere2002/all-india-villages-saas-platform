const express = require('express');

const {

    getStates,

    getDistricts,

    getVillages,

    searchVillages,

    addVillage

} = require('../controllers/villageController');

const router = express.Router();

router.get('/states', getStates);

router.get('/districts/:stateId', getDistricts);

router.get('/villages/:subdistrictId', getVillages);

router.get('/search', searchVillages);

router.post('/villages', addVillage);

module.exports = router;