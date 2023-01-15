const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Buy Food", "Make Food", "Eat Food"];
var workList = [];

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    var day = today.toLocaleDateString("us-US", options);

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

app.listen(3300, function () {
    console.log("LIstening at port number 3300.");
});