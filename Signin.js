function login() {
  // Get form inputs
  alert("Login Called ");
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate inputs
  if (username === "") {
    alert("Please enter a username.");
    return false;
  }
  if (password === "") {
    alert("Please enter a password.");
    return false;
  }

  // Perform AJAX request to server-side script for handling login
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle server response
      var response = xhr.responseText;
      if (response === "success") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to dashboard page
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  };
  xhr.send("username=" + username + "&password=" + password);
}

