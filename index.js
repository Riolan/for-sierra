var express = require("express"),
    app = express();


app.set("view engine", "ejs");
app.use(express.static('views/public'));


app.get("/", function(req, res) {
    res.render("landing");
});

var server = app.listen(3000, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
