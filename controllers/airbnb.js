const AirbnbModel = require("../models/airbnbModel");

// Create a Listing
const createListing = async (req, res) => {
  const newListing = req.body;
  const result = await AirbnbModel.insertOne(newListing);
  res.status(201).json(result);
};

// Get all listings
const getAllListings = async (req, res) => {
  const listings = await AirbnbModel.find({});
  res.status(200).json(listings);
};

// Get a listing by id
const getListingById = async (req, res) => {
  const id = req.params.id;
  const listing = await AirbnbModel.findOne({ _id: id});
  if (listing) {
    res.status(200).json(listing);
  } else {
    res.status(404).send('Listing not found');
  }
};

// Update a listing
const updateListingById = async (req, res) => {
  const id = req.params.id;
  const result = await AirbnbModel.updateOne({ _id: id }, { $set: listings });
  if (result.modifiedCount === 1) {
    res.status(200).send('Listing updated');
  } else {
    res.status(404).send('Listing not found');
  }
};

// Delete a listing
const deleteListingById = async (req, res) => {
  const id = req.params.id;
  const result = await AirbnbModel.deleteOne({ _id: id });
  if (result.deletedCount === 1) {
    res.status(200).send('Listing deleted');
  } else {
    res.status(404).send('Listing not found');
  }
};

module.exports = {
  createListing,
  getAllListings,
  getListingById,
  deleteListingById,
  updateListingById
};