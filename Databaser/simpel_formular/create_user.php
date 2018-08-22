<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
      // values sent from form       
    $escapedFornavn = mysqli_real_escape_string($conn, $_POST['fornavn']); 
    $escapedBrugernavn = mysqli_real_escape_string($conn, $_POST['brugernavn']);
    $escapedPassword = mysqli_real_escape_string($conn, $_POST['password']);
    $rolle = $_POST['Rolle'];
    
    if($escapedFornavn == "" || $escapedBrugernavn == "" || $escapedPassword == ""){
        $msg = "Udfyld venligst alle felterne";
    }else{          
        
        # Generer en tilfældig salt til denne brugerkonto
        $salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
        
        # Sæt den sammen med det strippede kodeord i variablen $saltedPW
        $saltedPW =  $escapedPassword . $salt;

        # Dan så et nyt krypteret kodeord med de to 
        $hashedPW = hash('sha256', $saltedPW);

        # Og indsæt den nye bruger 
        $query = "insert into Person (fornavn, username, password, salt) values ('$escapedFornavn', '$escapedBrugernavn', '$hashedPW', '$salt'); ";
                
        if ($conn->query($query) === TRUE) {
           $last_id = $conn->insert_id;
           $rolleQuery = "insert into Person_Rolle (person_id, rolle_id) values ('$last_id', '$rolle')";
           $conn->query($rolleQuery);    
           
            header("location: index.php?welcome=true");
            
	    # Eller hvis noget går galt, giv en fejl
        } else {
    	   $msg = "Error: " . $query . "<br>" . $conn->error;
	   }         
   }
}

?>

    <?php 

    $query = "select * from Rolle";
    $result = $conn->query($query);   

?>

    <p><a href="?welcome=true">Log ind</a> | Opret bruger</p>
    <p>Vælg venligst et brugernavn og en adgangskode</p>
    <p class="error">
        <?php echo $msg;?>
    </p>
    <form action="?create_user=true" method="post">
        <label>Fornavn:</label><input type="text" name="fornavn" /><br/><br />
        <label>Brugernavn:</label><input type="text" name="brugernavn" /><br /><br />
        <label>Password:</label><input type="password" name="password" /><br/><br />
        <label>Rolle: </label>
        <select name ="Rolle">
<?php 
        while($row = $result->fetch_assoc()) {            
            $rolle_id = $row['rolle_id'];
            $rolle = $row['rolle'];
            $dis="";
            if($rolle == "Administrator" && !strpos($_SESSION['roles'],'Admin')){
                $dis = "disabled";
            } 
            echo "<option value='$rolle_id' $dis>$rolle</option>";
        }    
?>        
        </select><br>
        <input type="submit" value=" Submit " /><br />
    </form>
