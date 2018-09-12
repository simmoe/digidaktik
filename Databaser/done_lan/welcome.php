<h1>Velkommen, <?php echo $_SESSION['fornavn']." ".$_SESSION['efternavn'];?></h1>
<p>Du er nu logget på. Du har rollerne: <?php echo $_SESSION['roller']?></p>
<a href = "logout.php">Log ud</a>
