<?php
/* Database credentials. Assuming you are running MySQL*/
 
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'iveondco_backend');
define('DB_PASSWORD', 'b6PvtVd7eybq');
define('DB_NAME', 'iveondco_backend');


/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
} 
?>