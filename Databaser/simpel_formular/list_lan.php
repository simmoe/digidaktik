<?php
$sql = "SELECT id, titel, dato, pladser FROM Begivenhed ORDER BY dato DESC";
$result = $conn->query($sql);   
?>

<table class="u-full-width">
  <thead>
    <tr>
      <th>Titel</th>
      <th>Dato</th>
      <th>Antal pladser</th>
      <th>Beskrivelse</th>
    </tr>
  </thead>

<?php
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tbody><tr><td>".$row["titel"]."</td><td>".$row["dato"]."</td><td>".$row["pladser"]."</td></tr></tbody>";
    }
} else {
    echo "0 results " . $conn->error;
}
?>
</table>


