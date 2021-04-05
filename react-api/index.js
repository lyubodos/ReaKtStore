const express = required("express");

const app = express();


app.get("/", (req, res) => {
    res.json()({ok: true});    
});





app.listen(5001, console.log.bind(console, "Erver is running..."));