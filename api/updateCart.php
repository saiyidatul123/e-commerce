<?php

include 'connect.php';

if(!empty($_POST)) {

    $product_id = $_POST['product_id'];
    $product_qty = $_POST['product_qty'];
    $product_price = $_POST['product_price'];

    $sql = "UPDATE cart SET product_qty=$product_qty, product_price='$product_price*$product_qty' WHERE product_id=$product_id";
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