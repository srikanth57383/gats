<?php 

include '../layouts/config.php'; 

if(isset($_POST['id']) && isset($_POST['action'])){
    $id  = $_POST["id"];
    $action = $_POST['action'];
   
    if($action === 'open'){
       $action_code = 1;
    }
   
    $action = $_POST['action'];
    if($action === 'close'){
       $action_code = 0;
    }
   
    $sql = "UPDATE careers SET is_active='$action_code' WHERE website='zyclyx' and id='$id' ";
   
    $result = $link->query($sql);
   
    echo json_encode([$id]);
}
?>