const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const administratorAPI = require('./src/api/administratorsAPI')
const userRouter = require("./src/routes/users")
const editorAPI = require('./src/api/editor.api');
const conferenceAPI = require('./src/api/conferenceAPI')
const ResearcherApi = require('./src/api/ResearchApi');
const paymentApi = require('./src/api/paymentApi');
const workshopAPI = require('./src/api/workshop.api');
const attendeeAPI = require('./src/api/attendee.api');

const PORT = process.env.PORT || 9996;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success");
})

app.route('/').get((req, res) => {
    res.send('AF Project');
});

app.use('/administrator', administratorAPI());
app.use("/user", userRouter)
app.use('/editor', editorAPI());
app.use('/conferenced', conferenceAPI());
app.use('/research', ResearcherApi());
app.use('/payment', paymentApi());
app.use('/workshop', workshopAPI());
app.use('/atendee', attendeeAPI());

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});