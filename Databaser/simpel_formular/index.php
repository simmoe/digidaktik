<?php include 'connect.php';?>

<html>
 <head>
  <title>Database skabelon</title>
    <meta charset="UTF-8">  
    <meta name="description" content="Javascript intro">
    <meta name="keywords" content="HTML,CSS,JavaScript">
    <meta name="author" content="Simon Moe">
    <link rel="stylesheet" type="text/css" href="normalize.css">
    <link rel="stylesheet" type="text/css" href="skeleton.css">
    <script type="text/javascript" src="javascript.js"></script>
 </head>

 <body>
     <?php echo $status?>
    <h1>LAN Parties 2018</h1>
     <div class="flow">
         <div><a href="?list=true">Liste</a></div>
         <div><a href="?add=true">Tilføj</a></div>
         <div><a href="?submit=true">Tilmeld</a></div>
     </div>

    <?php

     if($_GET['list']==="true"){ 
        include 'list_lan.php';
     }
    
     if($_GET['add']==="true"){
        include 'add_lan.php';
     }

     ?>

 </body>
</html>

<!--
OPGAVER



-->
