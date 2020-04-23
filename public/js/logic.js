// pull the data from sql, and seperate the info into to devour and devoured
function updateTable(){
    $.get("/api/burgers", function(data) {
        console.log(data);
        $("#burgerWell").empty();
        $("#devouredWell").empty();

        if (data.length !== 0) {
            for (burger of data.filter(burger => !burger.devoured)){
                $("#burgerWell").append(
                    $("<div>",{class:"w-100 d-flex justify-content-end"}).append([
                        $("<div>",{class:"", text:burger.burger_name}),
                        $("<button/>",{class:"devour-btn btn btn-secondary orange ml-5 py-0", text:"DEVOUR", 'data-burger-id':burger.id})
                    ])
                )
            }

            for (burger of data.filter(burger => burger.devoured)){
                $("#devouredWell").append(
                    $("<div>",{class:"", text:burger.burger_name})
                )
            }
        }
    });
}

$("#burger-submit").on("click", function(event) {
    event.preventDefault();

    // Make a burger object
    var burger = {
        burger_name: $("#burger-name").val().trim()
    };

    console.log(burger);

  // Send an AJAX POST-request with jQuery
    $.post("/api/burgers", burger)
    // On success, run the following code
    .then(function(res) {
        console.log(res);
        updateTable();
    });

  // Empty each input box by replacing the value with an empty string
    $("#burger-name").val("");
});

$(document).on("click", ".devour-btn", function(){
    console.log($(this).attr("data-burger-id"));
    $.get("/api/burgers/"+ $(this).attr("data-burger-id"))
    // On success, run the following code
    .then(function(res) {
        console.log(res);
        updateTable();
    });
})

updateTable();