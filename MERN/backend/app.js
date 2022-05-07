// Third-Party Libraries & Tools
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// Anything Server Related
const app = express();
const PORT = process.env.PORT || 3000;

// Express plugins
app.use(express.json());

// Connect to MongoDB Database
// process.env.MONGODB_KEY === dotenv path || mongodb://localhost:27017/mern-basic-template-database
mongoose.connect(process.env.MONGODB_KEY, { // Note: You can change the string after the '/' to whatever suites you.
    useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
    console.log('CONNECTION OPEN!');
})
.catch(err => {
    console.log('CONNECTION ERROR!')
    console.log(err);
})

// Application Route Test
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Opening the port
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT ${PORT}!`);
})