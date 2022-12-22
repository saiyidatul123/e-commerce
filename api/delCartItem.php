<?php
    
    include 'connect.php';

    // check connection
    // if ($connection->connect_error) {
    //     die("Connection failed: ". $connection->connect_error);
    //     return;
    // } else {
    //     echo "Connection successful";
    // }

    if(!empty($_POST)){
        
    $cart_id = $_POST['cart_id'];
    
    $sql = "DELETE FROM cart WHERE id='$cart_id'";
    $result = $connection->query($sql);

    if($result) {
        echo 200;
    }
    else {
        die ("Invalid query: ". $connection->error);
        return;
    }

    }

    $connection->close();

?>