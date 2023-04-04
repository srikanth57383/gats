<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include './db_config.php'; 
$response = array();
if(isset($_POST['Submit']))
{         
    $websiteUserFullname = $link->real_escape_string($_POST['Full_Name']);
    $websiteUserPhone = $link->real_escape_string($_POST['Phone']);
    $websiteUserMessage = $link->real_escape_string($_POST['Message']);
    $sourceWebsite = $link->real_escape_string($_POST['Website']);
    $websiteUserCompany = $link->real_escape_string($_POST['Company']);
    $websiteUserCountry = $link->real_escape_string($_POST['Country']);
    $websiteUserInterestedIn = $link->real_escape_string($_POST['Interested']);
    $websiteUserEmail = $link->real_escape_string($_POST['Email']);
    
    $sql = "INSERT INTO `enquiry` (`full_name`, `email`, `phone_no`,  `message`,`country`,`website`) VALUES ('".$websiteUserFullname."','".$websiteUserEmail."','".$websiteUserPhone."','".$websiteUserMessage."','".$websiteUserCountry."','".$sourceWebsite."')";
    $response;
    if($result = $link->query($sql)){ 
        $res = array('success' => true,'message' => 'submitted successfully');        
        array_push($response, $res);
    }
    else{                 
        $res = array('success' => false,'message' => 'something went wrong');                
        array_push($response, $res);
    }
    die(json_encode($response));    
}
?>