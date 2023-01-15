const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var items = [];

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    var day = today.toLocaleDateString("hi-IN", options);

    res.render("list", { Eday: day, newListItems: items });
})

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
})

app.listen(3300, function () {
    console.log("LIstening at port number 3300.");
})