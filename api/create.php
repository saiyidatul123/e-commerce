<?php 

    include 'connect.php';

    // customer
    $name = "";
    $email = "";

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST["name"];
        $email = $_POST["email"];

        do {
            if (empty($name) || empty($email)) {
                $errorMessage = "All the fields are required";
                break;
            }

            // add new customer to database
            $sql = "INSERT INTO customer (name, email)" . "VALUES ('$name', '$email')";

            $result = $connection->query($sql);

            if (!$result) {

                $errorMessage = "Invalid query: ". $connection->error;
                break;
            }

            $successMessage = "Customer added successfully";

            header("location: /phptutorial/tutorial1.index.html");
            exit;

        } while (false);
    }
?>