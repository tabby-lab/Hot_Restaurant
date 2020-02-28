const PORT = process.env.PORT || 8300;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//reservation data
var tables = [
    {
        customerName: "",
        email: "",
        phoneNumber: "",
        id: ""
    }
];

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "add.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(_dirname, "add.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

//displays tables
app.get("/api/tables/:tables", function(req, res) {
    const 
});

app.post("/api/tables", function (req, res) {
    const newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
