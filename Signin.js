const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the input values are valid (in this example, username and password must not be empty)
  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  // Call a server-side API to check the credentials
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      // Login successful
      alert('Login successful');
      window.location.href = 'index.html'; // Redirect to the dashboard page
    } else {
      // Login failed
      alert('Invalid username or password');
    }
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while logging in');
  });
});
