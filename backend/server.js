const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB =
  'mongodb+srv://dbBimaXpress:bimaXpress@cluster0.vwo2r.mongodb.net/bimaExpressUser?retryWrites=true&w=majority';
mongoose
  .connect(DB)
  .then(() => {
    console.log(`Connection Successful`);
  })
  .catch((err) => console.log('no connection'));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const personalDetailsRouter = require('./routes/PersonalDetails');
app.use('/personalDetails', personalDetailsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
