<?php

if($_GET['new'] === "true"){
    echo "<h3>Ny bruger oprettet - log venligst ind</h3>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // brugernavn og password bliver sendt via POST fra formen
    // ordene strippes for mellemrum og ulovlige tegn
    $escapedBrugernavn = mysqli_real_escape_string($conn ,$_POST['brugernavn']);
    $escapedPassword = mysqli_real_escape_string($conn ,$_POST['password']);
    //hent password salt - kode i databasen som skal sættes sammen med passwordet for at validere
    $saltQuery = "select salt from Person where brugernavn = '$escapedBrugernavn'";
    $result = $conn->query($saltQuery);
   
   //hvis der er en kode, så sæt variablen $salt, ellers giv en fejl
   if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $salt = $row["salt"];
        }
   } else {
        die("Ingen password salt kode i databasen på dette brugernavn: " . $escapedBrugernavn);
   }

    //Sæt POST passwordet sammen med salt-koden i variablen $saltedPW
    $saltedPW =  $escapedPassword . $salt;
       
    //og brug så denne til at generere det samlede password resultat
    $hashedPW = hash('sha256', $saltedPW);
       
    //Lav en sql streng som henter brugeren, hvis passwordet matcher koden i password feltet i databasen
    $query = "select * from Person where brugernavn = '$escapedBrugernavn' and password = '$hashedPW'; ";
    $result = $conn->query($query);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            # så registrerer vi i den nuværende session, at brugernavnet findes
            $_SESSION['brugernavn'] = $row['brugernavn'];
            $_SESSION['fornavn'] = $row['fornavn'];

            $rolleQuery = 
                "select rolle from Rolle ".
                    "left join Person_Rolle on Person_Rolle.rolle_id = Rolle.id ".
                    "left join Person on Person.id = Person_Rolle.person_id ".
                    "where Person.id = " . $row['id']. 
                     " GROUP BY Rolle.id";
            $roles = $conn->query($rolleQuery);
            if ($roles->num_rows > 0) {
                while($row = $roles->fetch_assoc()) {
                    $rolle .= $row['rolle'] . " ";
                }
            }else{
                echo "Error: " . $sql . "<br>" . $conn->error;
                die("0 Roller");
            }
            $_SESSION['roller'] = $rolle;
           
            # og rykker videre til velkomst
            header("location: index.php?welcome=true");
        }
    } else {
        echo "Ingen brugere med dette brugernavn/password";
    }      
}

?>

<p>Log ind | <a href="?create_user=true">Opret bruger</a></p>
<form action="" method="post">
    <label>brugernavn  :</label><input type="text" name="brugernavn" class="box" /><br /><br />
    <label>Password  :</label><input type="password" name="password" class="box" /><br/><br />
    <input type="submit" value=" Submit " /><br />
</form>

