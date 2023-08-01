//////sign in
var signinEmail = document.getElementById("signinEmail");
var signinPass = document.getElementById("signinPass");
var loginBtn = document.getElementById("loginBtn");
var signinFeedbackEmail = document.getElementById("signinFeedbackEmail");
var signinFeedbackPass = document.getElementById("signinFeedbackPass");
var signedIndex;
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (signInEmailFun() && signInPassFun()) {
    localStorage.setItem("signedUserNum", signedIndex);
    console.log(signedIndex);
    signinFeedbackEmail.value = "";
    signinFeedbackPass.value = "";
    window.location.href = "welcome.html";
  } else {
    notValid();
  }
});

var users = JSON.parse(localStorage.getItem("users")) || [];

//////sign in validation

function signInEmailFun() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].userEmail === signinEmail.value) {
      signedIndex = i;
      return true;
    }
  }
}
function signInPassFun() {
  if (users[signedIndex].userPass === signinPass.value) return true;
}
function notValid() {
  if (signinEmail.value == "") {
    signinFeedbackEmail.innerHTML = "Please enter your email";
    signinFeedbackPass.innerHTML = "";
  } else if (!signinEmail.value.includes("@", ".")) {
    signinFeedbackEmail.innerHTML = "Invalid mail";
    signinFeedbackPass.innerHTML = "";
    signinPass.value = "";
  } else if (signinPass.value == "") {
    signinFeedbackPass.innerHTML = "Please enter your password";
    signinFeedbackEmail.innerHTML = "";
  } else if (!signInEmailFun() && signinEmail.value.includes("@", ".")) {
    signinFeedbackEmail.innerHTML =
      "This email doesn't have an account try another one or sign up";
    signinFeedbackPass.innerHTML = "";
    signinPass.value = "";
  } else if (!signInPassFun()) {
    signinFeedbackPass.innerHTML = "Password is incorrect";
  }
}
/////mouse shape

var shape = document.getElementById("mouseTracker");
var container = document.getElementById("warrper");

// Detect if the device is a mobile device
var isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

// Add the event listener if the device is not a mobile device
if (!isMobile) {
  container.addEventListener("mousemove", function (event) {
    var containerRect = container.getBoundingClientRect();
    var shapeRect = shape.getBoundingClientRect();

    var containerCenterX = containerRect.left + containerRect.width / 2;
    var containerCenterY = containerRect.top + containerRect.height / 2;

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var shapeX =
      mouseX - containerCenterX + containerRect.width / 2 - shapeRect.width / 2;
    var shapeY =
      mouseY -
      containerCenterY +
      containerRect.height / 2 -
      shapeRect.height / 2;

    shape.style.top = shapeY + "px";
    shape.style.left = shapeX + "px";
  });
} else {
  shape.classList.add("d-none");
}
loginBtn.addEventListener("mouseenter", () => {
  shape.classList.add("zigzag");
});
loginBtn.addEventListener("mouseleave", () => {
  shape.classList.remove("zigzag");
});
