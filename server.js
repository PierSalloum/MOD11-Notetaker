const express = require('express');

const app = express();

app.listen(4000)
console.log("working")

app.get('/site', (req, res) => {
    res.send("message test");
    res.console.log("working");
});