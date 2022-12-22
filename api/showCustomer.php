<?php
    
    include 'connect.php';

    // check connection
// if ($connection->connect_error) {
//     die("Connection failed: ". $connection->connect_error);
// } else {
//     echo "Connection successful";
// }

    // Read all row from customer table
    $sql = "SELECT * FROM customer";
    $result = $connection->query($sql);

    if (!$result) {
        die ("Invalid query: ". $connection->error);
        return;
    }

    while($row = $result->fetch_assoc()) {
        $customer_id = $row["id"];
        $customer_name = $row["name"];
        $email = $row["email"];

        echo "
        
        id:$row[id],
        name:$row[name],
        email:$row[email];
        <br>
        
        ";
    }

    $connection->close();

?>