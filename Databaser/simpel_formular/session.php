<?php
# Denne side sørger for at der altid skal logges på - hvis ikke der findes en session variabel ved navn 'brugernavn', vises login skærmen

# Inkluder forbindelse til databasen og start sessionen
include('connect.php');
session_start();

# Hvis ikke der er et session objekt - så vis login skærmen 

?>
