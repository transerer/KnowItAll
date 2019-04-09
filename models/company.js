var mongoose   = require("mongoose");




//schema setup

var companiesSchema = new mongoose.Schema({
	name: String,
	image : String,
	website : String,
	description : String
});


module.exports = mongoose.model("Companies",companiesSchema);
