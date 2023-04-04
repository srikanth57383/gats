<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

 $_POST = json_decode($_POST['data'], TRUE);
include 'db_config.php'; 

$fullname = $_POST['Firstname']." ".$_POST['Lastname'];
$email = $_POST['Email'];
$jobId = $_POST['Position'];
$phone = $_POST['Phone'];
$message = $_POST['Message'];
$resume = basename($_FILES["resume"]["name"]);
$sourceWebsite = $_POST['Website'];

$target_dir = "../../uploads/";
$target_file = $target_dir . basename($_FILES["resume"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check file size
if ($_FILES["resume"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "pdf" && $imageFileType != "doc" && $imageFileType != "docx"
&& $imageFileType != "txt" ) {
  echo "Sorry, only pdf, doc, docx & txt files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    
  $response = array();
  if (move_uploaded_file($_FILES["resume"]["tmp_name"], $target_file)) { 
    $sql = "INSERT INTO `resumes`(`job`, `full_name`, `email`, `phone_no`, `resume`, `message`,`website`) VALUES ('".$jobId."','".$fullname."','".$email."','".$phone."','".$resume."','".$message."','".$sourceWebsite."')";     
    $link->query($sql);            
    $res = array('success' => true,'message' => 'submitted successfully');        
    array_push($response, $res);
  } else {
    $res = array('success' => false,'message' => 'something went wrong');                
    array_push($response, $res);
}
die(json_encode($response));    
}
?>