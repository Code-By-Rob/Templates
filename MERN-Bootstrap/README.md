# MERN + Bootstrap Template

<!-- Reminder: When using a MERN Stack, Node is used as a backend to process CRUD operations and any other server side operations such as authentication.

Whereas React can & will handle all of the routing between different pages. -->



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

Now, to install bootstrap, navigate to your frontend folder from the backend directory.

```sh
cd ..
cd frontned
```

Inside the frontend folder you can write the npm command to install bootstrap 5.
We're installing this package from [npmjs bootstrap](https://www.npmjs.com/package/bootstrap/v/5.0.1)

```sh
npm i bootstrap@5.0.1
```

or

```sh
npm i bootstrap
```

This will install bootstrap & allow you to use bootstrap 4 components. This will require you to install popper.js & JQuery for certain components which is done with the following command.

```sh
npm i @popperjs/core jquery
```

However, if you are using bootstrap only for CSS then you should not need the extra dependencies.

After doing all of the above, you are ready to use your MERN stack with Bootstrap!

## The Bootstrap Components

[Link to Bootstrap UI Snippets](https://getbootstrap.com/docs/5.1/examples/)