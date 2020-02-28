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


var waitTables = [
    {
        customerName: "",
        email: "",
        phoneNumber: "",
        id: ""
    }
];


// //routes
app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "index.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(_dirname, "add.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(_dirname, "tables.html"));
});
//displays currently seated tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});
// //displays wait list
app.get("/api/waitTables", function(req, res) {
    return res.json(waitTables);
});

// // adding/pushing tables
app.post("/api/tables", function (req, res) {
    const newTable = req.body;
    if (tables.length < 5) {
        tables.push(newTable);
        return res.send("reserved");
    } else {
        waitTables.push(newTable); 
        return res.send("wait");
    }
    
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});