const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const d = weekdays.length;
    for (let i = 0; i < d; i++) {
        if (currentDay === i) {
            day = weekdays[i];
        }
    }

    res.render("list", { Eday: day });

})

app.listen(3300, function () {
    console.log("Server started at port number 3300.");
})