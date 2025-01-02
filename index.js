import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render("index.ejs");
});


// when a user clicks on 'Any' button, it sends the gets request to /any-joke endpoint.
// The server then makes a request to https://v2.jokeapi.dev/joke/Any api and gets the response and renders the joke on the screen.
app.get('/any-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any");

        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/dark-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Dark");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/pun-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Pun");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/spooky-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Spooky");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/christmas-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Christmas");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/programming-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/miscellaneous-joke', async(req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Miscellaneous");
        
        console.log(result.data);
        renderJoke(res, result);
    } catch(error) {
        console.log(error.response.data);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// helper function to render joke based on single liner or two liner
function renderJoke(res, result) {
    if(result.data.type === "single") {
        res.render("index.ejs", {joke: result.data.joke});
    } else {
        res.render("index.ejs", {setup: result.data.setup, delivery: result.data.delivery});
    }
    
}