<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With"); 
include './db_config.php'; 

$jobDescription = array();
$sql = "SELECT * FROM careers WHERE website='zyclyx'";
$result = $link->query($sql);

if ($result->num_rows > 0) {
// output data of each row
    while($row = $result->fetch_assoc()) {         
        $p  = array(
            "id" => $row['id'],
            "title" => $row['title'],
            "department" => $row['department'],
            "type" => $row['type'],
            "location" => $row['location'],
            "experience" => $row['experience'],
            "vacancies" => $row['vacancies']             
      );

      array_push($careers, $p);
    }
}
     
    die(json_encode($careers));
    

?>