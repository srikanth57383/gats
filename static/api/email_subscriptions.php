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
    $subscriberEmail = $link->real_escape_string($_POST['Subscriber_Email']);     
     
    
    $sql = "INSERT INTO `email_subscriptions` (`subscriber_email`) VALUES ('".$subscriberEmail."')";
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