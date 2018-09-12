<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
      // values sent from form       
    $escapedFornavn = mysqli_real_escape_string($conn, $_POST['fornavn']); 
    $escapedEfternavn = mysqli_real_escape_string($conn, $_POST['efternavn']); 
    $escapedAlder = mysqli_real_escape_string($conn, $_POST['alder']); 
    $escapedEmail = mysqli_real_escape_string($conn, $_POST['email']); 
    $escapedAdresse = mysqli_real_escape_string($conn, $_POST['adresse']); 
    $escapedTelefon = mysqli_real_escape_string($conn, $_POST['telefon']); 
    $escapedKoen = mysqli_real_escape_string($conn, $_POST['koen']); 
    $escapedBrugernavn = mysqli_real_escape_string($conn, $_POST['brugernavn']);
    $escapedPassword = mysqli_real_escape_string($conn, $_POST['password']);
    $rolle = $_POST['Rolle'];
    
    if($escapedFornavn == "" || $escapedEfternavn == "" || $escapedEmail == "" || $escapedAdresse == "" || $escapedTelefon == "" || $escapedKoen == "" || $escapedBrugernavn == "" || $escapedPassword == ""){
        $msg = "Udfyld venligst alle felterne";
    }else{          
        # Generer en tilfældig salt til denne brugerkonto
        $salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
        
        # Sæt den sammen med det strippede kodeord i variablen $saltedPW
        $saltedPW =  $escapedPassword . $salt;

        # Dan så et nyt krypteret kodeord med de to 
        $hashedPW = hash('sha256', $saltedPW);

        # Og indsæt den nye bruger 
        $query = "insert into Person (fornavn, efternavn, alder, email, adresse, telefon, køn, brugernavn, password, salt) values ('$escapedFornavn', '$escapedEfternavn', '$escapedAlder', '$escapedEmail', '$escapedAdresse', '$escapedTelefon', '$escapedKoen', '$escapedBrugernavn', '$hashedPW', '$salt'); ";
                
        if ($conn->query($query) === TRUE) {
           $last_id = $conn->insert_id;
           $rolleQuery = "insert into Person_Rolle (person_id, rolle_id) values ('$last_id', '$rolle')";
           $conn->query($rolleQuery);    
           
           header("location: index.php?welcome=true&new=true");
            
	    # Eller hvis noget går galt, giv en fejl
        } else {
    	   $msg = "Fejl: " . $query . "<br>" . $conn->error;
	   }         
   }
}

?>

    <?php 

    $query = "select * from Rolle";
    $result = $conn->query($query);
    if(!$result){
        echo "Fejl: " . $conn->error;
    }


?>

    <p><a href="?welcome=true">Log ind</a> | Opret bruger</p>
    <p>Udfyld venligst alle felter</p>
    <p class="error">
        <?php echo $msg;?>
    </p>
    <form action="?create_user=true" method="post">
        <label>Fornavn:</label><input type="text" name="fornavn" required/><br/><br />
        <label>Efternavn:</label><input type="text" name="efternavn" required/><br/><br />
        <label>Alder:</label><input type="number" name="alder" required/><br/><br />
        <label>Email:</label><input type="email" name="email" required/><br/><br />
        <label>Adresse:</label><textarea name="adresse" required></textarea><br/><br />
        <label>Telefon:</label><input type="number" name="telefon" /><br /><br />
        <label>Køn:</label><input type="text" name="koen" placeholder="M/K" maxlength="1" size="2" /><br /><br />
        <label>brugernavn  :</label><input type="text" name="brugernavn" class="box" /><br /><br />
        <label>Password:</label><input type="password" name="password" placeholder="8 characters minimum" size="12" /><br/><br />
        <label>Rolle: </label>
        <select name="Rolle">
<?php 
        while($row = $result->fetch_assoc()) {            
            $rolle_id = $row['id'];
            $rolle = $row['rolle'];
            $dis="";
            if($rolle == "Administrator" && !strpos($_SESSION['roller'],'Administrator')){
                $dis = "disabled";
            } 
            echo "<option value='$rolle_id' $dis>$rolle</option>";
        }    
?>        
        </select><br>
        <input type="submit" value=" Submit " /><br />
    </form>
