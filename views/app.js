module.exports = function(body){
    return `
    <!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="UTF-8">
    <title>Eat-Da-Burger!</title>
    <script src="https://code.jquery.com/jquery.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body class="h-100">
    <div class="jumbotron py-2 orange">
        <img id="logo" class="rounded-circle mx-auto d-block"
            src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="Burger Image">
    </div>
    
    <div class="container h-100">
        <div class="card p-0 overflow-hidden">
            <div class="card-title text-center text-light orange">
                <h1>Eat-Da-Burger</h1>
            </div>

            <div class="row">
                <div class="col-6">
                    <h3 class="text-center colHead">Order Up!</h3>
                    <div id="burgerWell" class="data-well"></div>
                </div>
                <div class="col-6">
                    <h3 class="text-center colHead">Devoured</h3>
                    <div id="devouredWell" class="data-well"></div>
                </div>
            </div>
            <div class="card-footer orange text-center text-light p-0 mt-3">
                <h3>Add a Burger!</h3>
            </div>
            <div class="card-footer row justify-content-center">
                <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <form>
                        <div class="input-group mb-3">
                            <input type="text" id="burger-name" class="form-control" placeholder="" aria-label=""
                                aria-describedby="basic-addon1">
                            <div class="input-group-append">
                                <button id="burger-submit" class="btn btn-outline-secondary orange text-light"
                                    type="button">Add Burger!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/logic.js"></script>
</body>

</html>
    `
}