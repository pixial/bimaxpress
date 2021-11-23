const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonalDetailsSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    occupation: { type: String, required: true },
    selfNumber: { type: Number, required: true },
    relativeContaclNum: { type: Number },
    InsureCardNum: { type: Number, required: true },
    PolicyNum: { type: Number, required: true },
    EmployeeID: { type: Number, required: true },
    previousHealthInsurance: { type: String, required: true },
    familyPhysician: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    State: { type: String, required: true },
    PostalCode: { type: Number, required: true },
    TPAcompany: { type: String, required: true },
}, {
    timestamps: true,
});

const PersonalDetails = mongoose.model(
    'PersonalDetails',
    PersonalDetailsSchema
);

module.exports = PersonalDetails;