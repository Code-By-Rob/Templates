# A Plain MERN Template
This template is without UI Components. It is as basic as they come.

If you are unsure how to start the git process follow the link below.

<a href="https://github.com/Code-By-Rob/Templates/blob/main/README.md#the-command-line-git-process">Command line git process</a>

Otherwise, let's get started.

Create a backend folder

```sh
mkdir backend
```

Create the React files in the frontend folder

```sh
npx create-react-app frontend
```

Leave this folder after completion and enter the backend folder

```sh
cd backend
```

Initialise the backend file

```sh
npm init
```

*Answer all of those questions.*

Add the libraries // tools you need. 
Here is my suggestion.

```sh
npm i express mongoose dotenv
```

---

<h3>Here is a list of other useful libraries & their uses.</h3>
<div>
    <ul>
        <li>
            <a href="expressjs.com/en/resources/middleware/session.html">express-session</a>
            <p>
                Used for browser session cookies. Extremely useful!
            </p>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/connect-flash">connect-flash</a>
            <p>For handling flash banners / sections e.g., "Hey there ${name}, welcome back this ${timeOfDayLocale}"</p>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/multer">multer</a>
            <p>Multer is a middleware for uploading files (e.g., images :)) to the server to be handled</p>
        </li>
        <!-- <li></li> -->
    </ul>
</div>

---

Create the server file.

```sh
touch app.js || server.js
```

While you are in that folder, create the .env file

```sh
touch .env
```

the .env file is where you will add any keys or secrets you want stored safely away from prying eyes.

Here is the some basic server.js || app.js code to get started.

```js
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
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: true
})
.then(() => {
    console.log('CONNECTION OPEN!');
})
.catch(err => {
    console.log('CONNECTION ERROR!')
    console.log(err);
})

// Application Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Opening the port
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT ${PORT}!`);
})
```