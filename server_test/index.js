const express = require("express");

const app = express();

const port = 5001;

app.get("/", (req, res) => {
    res.json("Hello");    
});




app.listen(port, console.log.bind(console, `Server is running on port:${port}`));