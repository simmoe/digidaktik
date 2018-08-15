<?php

if (!empty($_POST)){
    
    $titel = $conn->real_escape_string($_POST['titel']);
    $dato = $conn->real_escape_string($_POST['dato']);
    $pladser = $conn->real_escape_string($_POST['pladser']);
    
    if($titel == "" || $dato == "" || $pladser ==""){
        echo "<p>Udfyld venligst alle felterne</p>";
    }else{
    
        $sql = "INSERT INTO LAN (titel, dato, pladser) 
        VALUES (
        '".$titel."',
        '".$dato."',
        ".$pladser."
        )";

        if ($conn->query($sql) === TRUE) {
    	   echo "New record created successfully";
	   } else {
    	   echo "Error: " . $sql . "<br>" . $conn->error;
	   }
    }
}
?>

    <form action="" method="post">
        <div class="row">
            <div class="four columns">
                <label for="titel">Titel</label>
                <input type="text" name="titel" /><br>
            </div>
            <div class="four columns">
                <label for="dato">Dato</label>
                <input type="date" name="dato" /><br>
            </div>
            <div class="four columns">
                <label for="pladser">Pladser</label>
                <input type="number" name="pladser" /><br>
            </div>
            <label for="beskrivelse">Beskrivelse</label>
            <textarea class="u-full-width" placeholder="Beskrivelse …" id="exampleMessage"></textarea>
        </div>
        <input class="button-primary" type="submit" name="save" />
    </form>
