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



// Read data of product table
$sql = "SELECT * FROM product";
$result = $connection->query($sql);


$arrayResult = array();
$arrayIndex = 0;

if(is_object($result))
{
    if($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            $data = array(
                        "id" => $row["id"],
                        "name" => $row["name"],
                        "price" => $row["price"],
                        "image" => $row["image"],
                        "new_arrival" => $row["new_arrival"],
                        "bestseller" => $row["bestseller"]
                    );
                
                $arrayResult[$arrayIndex] = $data;
                $arrayIndex++;
        }
    }
    else
    {
        showMessage(0, "Empty", "Empty result.", "");
            return;
    }
}
else
    {
        showMessage(0, "Failed", "Invalid request.", "");
	    return;
    }

// output

$final = array("result" => $arrayResult);

    $finalJson = json_encode($final);

    echo $finalJson;

$connection->close();

?>