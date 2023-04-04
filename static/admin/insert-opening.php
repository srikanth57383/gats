<?php 
 include 'layouts/session.php';
 include 'layouts/config.php'; 

if(isset($_POST['submit']))
{    
    $jobTitle = $link->real_escape_string($_POST['job-title']);
    $location = $link->real_escape_string($_POST['location']);
    $jobType = $link->real_escape_string($_POST['job-type']);
    $openingsCount = $link->real_escape_string($_POST['openings-count']);
    $jobDescription = $link->real_escape_string($_POST['description']);
    $experience = $link->real_escape_string($_POST['experience']);
    $department = $link->real_escape_string($_POST['department']);
    $sourceWebsite = $link->real_escape_string($_POST['source-website']);
    
    

    // $isSubmitSuccess=false;
    // $isSubmitError=false;
    $sql = "INSERT INTO `careers`(`title`,  `type`, `location`, `requirements`, `vacancies`,`experience`,`department`,`website`) VALUES ('".$jobTitle."','".$jobType."','".$location."','".$jobDescription."','".$openingsCount."','".$experience."','".$department."','".$sourceWebsite."')";    
    if(!$result = $link->query($sql)){
        $isSubmitError = true;         
        die('There was an error submitting the form [' . $link->error . ']');
        }
        else
        {
        header('Location: insert-opening-success.php');
        }
}
?>