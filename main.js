<!-- HTML Form (example) -->
<input type="email" id="email" placeholder="Enter email">
<input type="password" id="password" placeholder="Enter password">
<button onclick="signUp()">Sign Up</button>
<button onclick="logIn()">Log In</button>

<script>
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signup successful!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
</script>
