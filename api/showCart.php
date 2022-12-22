<?php
    
    include 'connect.php';

   // check connection
    // if ($connection->connect_error) {
    //     die("Connection failed: ". $connection->connect_error);
    //     return;
    // } else {
    //     echo "Connection successful";
    // }

    // Read all row from cart & product table
    // $sql = "SELECT * FROM cart AS cart LEFT JOIN product ON product.id = cart.product_id";
    $sql = "SELECT * FROM product RIGHT JOIN cart ON product.id = cart.product_id";
    $result = $connection->query($sql);

    $arrayResult = array();
    $arrayIndex = 0;
    
    if(is_object($result)) {

        if($result->num_rows>0) {

            while($row = $result->fetch_assoc()) {
                
                $data = array(
                    "cart_id" => $row["id"],
                    "product_id" => $row["product_id"],
                    "product_image" => $row["image"],
                    "product_name" => $row["name"],
                    "product_price" => $row["price"],
                    "product_qty" => $row["product_qty"],
                    "product_size" => $row["product_size"]
                );

                $arrayResult[$arrayIndex] = $data;
                $arrayIndex++;
            }
        }
        else {
            showMessage(0,"Empty", "Empty result.", "");
            return;
        }
    }
    else {
        showMessage(0,"Failed", "Invalid request.", "");
        return;
    }

    // output

    $final = array("result" => $arrayResult);

    $finalJson = json_encode($final);

    echo $finalJson;

    $connection->close();

?>