<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Energy Profiles App</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/toaster.css" rel="stylesheet">
    <style>
        a {
            color: orange;
        }
    </style>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <link href="css/bootstrap-theme.css" rel="stylesheet">

    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body ng-cloak="">
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/energy/#/">Energy Profiles App</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/energy/#/">Home</a></li>
                <li><a href="/energy/#/dashboard">Dashboard</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="/energy/#/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/energy/#/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </div>
</nav>
<div>
    <div class="container" style="margin-top:20px;">

        <div data-ng-view="" id="ng-view" class="slide-animation"></div>

    </div>
</body>
<toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
<!-- Libs -->
<script src="js/angular.min.js"></script>
<script src="js/angular-route.min.js"></script>
<script src="js/angular-animate.min.js"></script>
<script src="js/toaster.js"></script>
<script src="app/app.js"></script>
<script src="app/data.js"></script>
<script src="app/directives.js"></script>
<script src="app/authCtrl.js"></script>
<script src="app/dashCtrl.js"></script>
</html>

