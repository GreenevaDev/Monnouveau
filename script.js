function validateForm(event) {
  event.preventDefault();
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  var errorMessage = document.getElementById("error-message");

  if (username == "" || password == "") {
      errorMessage.textContent = "Both username and password are required.";
      return false;
  } else {
      errorMessage.textContent = "";
      // Proceed with form submission
      document.forms["loginForm"].submit();
  }
}