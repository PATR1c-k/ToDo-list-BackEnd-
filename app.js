const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Make Food", "Eat Food"];
const workList = [];

app.get("/", function (req, res) {

    let day = date.getDate();   //date.js custome module

    res.render("list", { listTitle: day, newListItems: items });
})

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workList });
})

app.post("/work", function (req, res) {
    workList.push(req.body.newItem);
    res.redirect("/work");
})

app.post("/", function (req, res) {

    var item = req.body.newItem;

    if (req.body.list === "Work List") {
        workList.push(item);
        res.redirect("/work");
    }
    else {

        items.push(item);
        res.redirect("/");
    }
});


app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3300, function () {
    console.log("LIstening at port number 3300.");
});