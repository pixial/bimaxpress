const router = require('express').Router();
let PersonalDetails = require('../models/PersonalDetails.modal');

router.route('/').get((req, res) => {
  PersonalDetails.find()
    .then((personalDetails) => res.json(personalDetails))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// To Add new Data
//POST Request http://localhost:5000/personalDetails/add
router.route('/add').post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const occupation = req.body.occupation;
  const selfNumber = req.body.selfNumber;
  const relativeContaclNum = req.body.relativeContaclNum;
  const InsureCardNum = req.body.InsureCardNum;
  const PolicyNum = req.body.PolicyNum;
  const EmployeeID = req.body.EmployeeID;
  const previousHealthInsurance = req.body.previousHealthInsurance;
  const familyPhysician = req.body.familyPhysician;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const State = req.body.State;
  const PostalCode = req.body.PostalCode;
  const TPAcompany = req.body.TPAcompany;

  const newPersonalDetails = new PersonalDetails({
    id,
    name,
    gender,
    dob,
    occupation,
    selfNumber,
    relativeContaclNum,
    InsureCardNum,
    PolicyNum,
    EmployeeID,
    previousHealthInsurance,
    familyPhysician,
    streetAddress,
    city,
    State,
    PostalCode,
    TPAcompany,
  });
  newPersonalDetails
    .save()
    .then(() => res.json('PersonalDetail added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// To Get Data By Id
//Get Request http://localhost:5000/personalDetails/id
router.route('/:id').get((req, res) => {
  PersonalDetails.findById(req.params.id)
    .then((personalDetails) => res.json(personalDetails))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// To Delete
//Delete Request http://localhost:5000/personalDetails/id
router.route('/:id').delete((req, res) => {
  PersonalDetails.findByIdAndDelete(req.params.id)
    .then(() => res.json('PersonalDetails deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// To Update
//POST Request http://localhost:5000/personalDetails/update/id
router.route('/update/:id').post((req, res) => {
  PersonalDetails.findById(req.params.id)
    .then((personalDetails) => {
      personalDetails.id = req.body.id;
      personalDetails.name = req.body.name;
      personalDetails.gender = req.body.gender;
      personalDetails.dob = req.body.dob;
      personalDetails.occupation = req.body.occupation;
      personalDetails.selfNumber = req.body.selfNumber;
      personalDetails.relativeContaclNum = req.body.relativeContaclNum;
      personalDetails.InsureCardNum = req.body.InsureCardNum;
      personalDetails.PolicyNum = req.body.PolicyNum;
      personalDetails.EmployeeID = req.body.EmployeeID;
      personalDetails.previousHealthInsurance =
        req.body.previousHealthInsurance;
      personalDetails.familyPhysician = req.body.familyPhysician;
      personalDetails.streetAddress = req.body.streetAddress;
      personalDetails.city = req.body.city;
      personalDetails.State = req.body.State;
      personalDetails.PostalCode = req.body.PostalCode;
      personalDetails.TPAcompany = req.body.TPAcompany;

      personalDetails
        .save()
        .then(() => res.json('PersonalDetails updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

// {
// 	"id": "1211",
// 	"name": "Ishan Indraniya",
// 	"gender": "Male",
// 	"dob": "15-04-2000",
// 	"occupation": "NA",
// 	"selfNumber": "8349326329",
// 	"relativeContaclNum": "8349326329",
// 	"InsureCardNum": "12345678",
// 	"PolicyNum": "12345678",
// 	"EmployeeID":"12345678",
// 	"previousHealthInsurance": "Yes",
// 	"familyPhysician": "Yes",
// 	"streetAddress": "Yes",
// 	"city": "Indore",
// 	"State": "MP",
// 	"PostalCode": "452001"
//  "TPAcompany": "bajaj asdfg"
// }
