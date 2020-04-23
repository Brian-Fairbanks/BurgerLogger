const express = require('express');
const views=require('./views');

const app = express();
var PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("./public"));



require("./controllers/burgers_controller")(app);

app.get("*", function(req,res){
    res.send(views.app("Working!"));
})

// 
app.listen(PORT, function(){
    console.log(`App listening on http://localhost:${PORT}`);
});