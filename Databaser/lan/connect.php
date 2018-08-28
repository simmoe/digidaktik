<?php
$servername = "moestudent.it.slotshaven.dk";
$brugernavn = "moestudent.it.sl";
$password = "123456";
$dbname ="moestudent_it_slotshaven_dk";

// Create connection
$conn = new mysqli($servername, $brugernavn, $password, $dbname);
$conn->set_charset("utf8");

// Check connection
if ($conn->connect_error) {
    $status = "<h4>Connection failed: " . $conn->connect_error . "</h4>";
} else{
	$status="<hr><h4>Forbindelse til database oprettet...</h4><hr>";
}

?>
