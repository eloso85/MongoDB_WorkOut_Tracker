const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
require("./routes/api.js")(app);
require("./routes/html.js")(app);

 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
  useNewUrlParser: true, 
  useNewUrlParser: true, 
  useFindAndModify: false, 

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });