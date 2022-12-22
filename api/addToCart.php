<?php

include 'connect.php';

// check connection
// if ($connection->connect_error) {
//     die("Connection failed: ". $connection->connect_error);
//     return;
// } else {
//     echo "Connection successful
//     <br>";
// }

if(!empty($_POST)) {

     $product_id = $_POST['product_id'];
     $product_qty = $_POST['product_qty'];
     $product_size = $_POST['product_size'];

     $sql = "INSERT INTO cart (product_id, product_qty, product_size) VALUES ('$product_id','$product_qty', '$product_size')";
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