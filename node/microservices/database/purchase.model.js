
//THIS will be used once we connect MongoDB   console.log("UnauthorizedError req:",req.url);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document


//TODO: notice that the goals are missing from this schema.
const schema = new Schema({
    item: { type: String, required: true },
    dollarCost: { type: Number, required: true },
    necessity: { type: Number, required: true },
    monthPurchased: { type: String, required: true, default: 1 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdDate: { type: Date, required: true}
    });

schema.index({createdDate:1, createdBy:1}, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Purchase', schema);