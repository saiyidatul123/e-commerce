# E-commerce (Ongoing)

## Project Description
An e-commerce website focused on selling high-quality shoes for men, women, and children which offers a seamless shopping experience, with easy navigation and a user-friendly website

[View live site](https://gv-sports.000webhostapp.com/)

### Project Dev Objectives

- Learn DOM manipulation
- Learn to build backend with PHP and MySQL
- Learn to develop AJAX based application with jQuery

### Current Features
- Filter products by category
- Shopping cart using Offcanvas
- Alert notification with Toast

## Setup

### Database Prep

1. Create connect.php file in the api folder
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


## Technology
- HTML
- JavaScript
- CSS
- Bootstrap
- PHP
- MySQL