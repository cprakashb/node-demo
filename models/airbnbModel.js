const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = Schema({
    _id: String,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: Date,
    calendar_last_scraped: Date,
    first_review: Date,
    last_review: Date,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: Schema.Types.Mixed,
    amenities: [String],
    price: Schema.Types.Mixed,
    security_deposit: Schema.Types.Mixed,
    cleaning_fee: Schema.Types.Mixed,
    extra_people: Schema.Types.Mixed,
    guests_included: Schema.Types.Mixed,
    images: Schema.Types.Mixed,
    host: Schema.Types.Mixed,
    address: Schema.Types.Mixed,
    availability: Schema.Types.Mixed,
    review_scores: Schema.Types.Mixed,
    reviews: [Schema.Types.Mixed]
});

module.exports = mongoose.model("listing", listingSchema, "listingsAndReviews");