function login() {
  // Get form inputs
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

  if (username === "tester" && password === "pass") {
      alert("Login successful!");
      window.location ="index.html"; // Redirect to dashboard page
      return false;
  } else {
        alert("Invalid username or password. Please try again.");
        return false;
  }
    
  
}

