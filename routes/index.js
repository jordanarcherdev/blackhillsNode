const express = require('express');
const router = express.Router();

//Home
router.get('/', (req, res) => {
  res.render('index/home', {title: "Home", oneactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//Wheel nut removal
router.get('/locking-wheel-nut-removal-peterhead', (req, res) => {
  res.render('index/wnr', {title: "Locking Wheel Nut Removal", twoactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//Motorcycle Tyres
router.get('/motorcycle-tyres-in-peterhead', (req, res) => {
  res.render('index/biketyres', {title: "Motorcycle Tyres", threeactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//Parts and accessories
router.get('/motorcycle-parts-in-peterhead', (req, res) => {
  res.render('index/parts', {title: "Parts and Accessories", fouractive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//tpms
router.get('/tpms-sensor-valves', (req, res) => {
  res.render('index/sensors', {title: "TPMS Sensor Valves", fiveactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//Contact us
router.get('/contact-us', (req, res) => {
  res.render('index/contact', {title: "Contact Us", sixactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

//Pit bikes
router.get('/pit-bikes', (req, res) => {
  res.render('index/pitbikes', {title: "Pit Bikes", sevenactive: "current-menu-item page_item page-item-164 current_page_item menu-item-203"});
});

module.exports = router;
