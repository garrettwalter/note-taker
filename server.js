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

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  //  ===============================================================================
  // LOAD DATA
  // We are linking our routes to a series of "data" sources.
  // These data sources hold arrays of information on table-data, waitinglist, etc.
  // ===============================================================================
  
  var notesData = require("./db/db.json");

  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      notesData.push(req.body);
      res.json(true);
  });
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});