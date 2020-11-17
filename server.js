var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to handle data parsing
// require("./code/routes/apiRoutes")(app);
// require("./code/routes/htmlRoutes")(app);

var path = require("path");

app.get("*", function(req, res) {
    res.json(path.join(__dirname, "./code/index.html"));
  });

  app.get("/", function(req, res) {
    res.json(path.join(__dirname, "/code/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/code/notes.html"));
  });
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});