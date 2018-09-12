<?php 
    include 'connect.php';
    session_start();
    if(strpos($_SESSION['roller'], 'Administrator') > 1) {
        $admin = true;    
    }
?>

<html>

<head>
    <title>Database skabelon</title>
    <meta charset="UTF-8">
    <meta name="description" content="Javascript intro">
    <meta name="keywords" content="HTML,CSS,JavaScript">
    <meta name="author" content="Simon Moe">
    <link rel="stylesheet" type="text/css" href="mystyles.css">
    <link rel="stylesheet" type="text/css" href="normalize.css">
    <link rel="stylesheet" type="text/css" href="skeleton.css">
</head>

<body>
    <?php echo $status?>
    <h1>LAN Parties 2018</h1>
    <div class="flow">
        <div id="welcome"><a href="?welcome=true">Velkommen</a></div>
        <div id="list"><a href="?list=true">Begivenheder</a></div>
        <?php if($admin){ ?>
        <div id="add"><a href="?add=true">Ny begivenhed</a></div>
        <?php } ?>
    </div>



<?php    
#Hvis der ikke er sat et brugernavn i session arrayet, skal brugeren logge på..   
if(!isset($_SESSION['brugernavn'])){
    if($_GET['create_user'] === "true"){
        include('create_user.php');
    }else{
        include('login.php');
    }
}else{
    
    
    if($_GET['welcome']==="true"){ 
        include 'welcome.php';
    ?>
        <script>
            document.getElementById("welcome").classList.add("active");
        </script>
    <?php
    }
    if($_GET['list']==="true"){ 
        include 'list_lan.php';
    ?>
        <script>
            document.getElementById("list").classList.add("active");
        </script>
    <?php
    }
    if($_GET['add']==="true"){
        include 'add_lan.php';
    ?>
        <script>
            document.getElementById("add").classList.add("active");
        </script>
    <?php
    }
    if($_GET['add_user']==="true"){
        include 'create_user.php';
    ?>
        <script>
            document.getElementById("add_user").classList.add("active");
        </script>
    <?php
    } 
}?>

</body>

</html>

<!--
OPGAVER



-->
