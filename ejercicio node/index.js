const express = require("express");
const app = express()
const port = 9000;



app.get("/", (req, res) => {
    res.send("API arrancó");
})

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
})