<?php 
include '../layouts/config.php'; 

if(isset($_POST['id'])){
    $id  = $_POST["id"];  
    $sql = "DELETE FROM enquiry WHERE website='zyclyx' AND id='$id' ";
    $result = $link->query($sql);
    echo json_encode([$id]);
}
?>