

const express = require("express");
const router = express.Router();

const { getAllListings, getListingById, updateListingById, deleteListingById, createListing } = require("../controllers/airbnb");

router.route("/").get(getAllListings).post(createListing);
router.route("/:id").get(getListingById).put(updateListingById).delete(deleteListingById);

module.exports = router;