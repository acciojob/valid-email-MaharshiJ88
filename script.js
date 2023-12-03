function validEmail(email) {
  //your JS code here.
	// Regular expression for validating an Email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
