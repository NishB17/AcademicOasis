<?php

// start session
session_start();

// check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // get username and password from form
  $username = $_POST["username"];
  $password = $_POST["password"];

  // check username and password against database
  // example code only - replace with your own database code
  if ($username == "myusername" && $password == "mypassword") {

    // set session variables
    $_SESSION["loggedin"] = true;
    $_SESSION["username"] = $username;

    // redirect to dashboard
    header("Location: /dashboard.php");
    exit;

  } else {
    // if username and password do not match
    $error = "Invalid username or password";
  }
}

?>
