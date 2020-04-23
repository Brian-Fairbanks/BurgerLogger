$("#burger-submit").on("click", function(event) {
    event.preventDefault();

    // Make a newChirp object
    var burger = {
        burger_name: $("#burger-name").val().trim()
    };

    console.log(burger);
});