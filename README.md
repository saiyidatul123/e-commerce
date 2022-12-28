# e-commerce

To start,
1. Add connect.php file in the api folder
2. Add the following code in the connect.php file

```
<?php
  $servername = "[YOUR_SERVERNAME]";
  $username = "[YOUR_USERNAME]";
  $password = "[YOUR_PASSWORD]";
  $database = "[YOUR_DATABASE]";
  
  // CREATE CONNECTION
  $connection = new mysqli($servername, $username, $password, $database);
?>
```
3. Import the sql file from ``` sql\ecommerce.sql ``` to your database for it to work