var users = JSON.parse(localStorage.getItem("users"));
var lastUserIndex = users.length - 1;
userSignup.innerHTML = users[lastUserIndex].userName;
