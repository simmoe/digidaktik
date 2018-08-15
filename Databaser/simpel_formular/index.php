<?php include 'connect.php';?>

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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <?php echo $status?>
    <h1>LAN Parties 2018</h1>
    <div class="flow">
        <div id="list"><a href="?list=true">Liste</a></div>
        <div id="add"><a href="?add=true">Tilføj</a></div>
        <div id="submit"><a href="?submit=true">Tilmeld</a></div>
    </div>

    <?php

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
     
     if($_GET['submit']==="true"){
        include 'submit.php';
     }
     
     ?>

</body>

</html>

<!--
OPGAVER



-->
