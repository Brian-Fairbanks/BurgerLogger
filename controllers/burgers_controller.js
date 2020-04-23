const burgers = require("../models/burger");

module.exports = function(app){
    // API call to get Burgers from database
    app.get("/api/burgers", async function(req,res){
        try{
            let allBurg = await burgers.get();
            //console.log(allBurg);
            res.json(allBurg);
        }
        catch(err){
            res.status(500);
            console.error("Could not pull data: " + err.stack);
        }
    })

    // API to add a burger
    app.post("/api/burgers", function(req, res){
        let burger=req.body;
        console.log(burger)
        res.send(burgers.add({burger_name:burger.burger_name, devoured:0}));
    });

    // API to devour a burger
    app.get("/api/burgers/:id", function(req, res){
        let burger=parseInt(req.params.id);
        //console.log(burger);

        res.send(burgers.devour(burger));
    });

}