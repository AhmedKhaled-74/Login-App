///////////SignUp
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPass = document.getElementById("signupPass");
var signupRePass = document.getElementById("signupRePass");
var signupBtn = document.getElementById("signupBtn");
var userSignup = document.getElementById("userSignup");
var signupFeedbackName = document.getElementById("signupFeedbackName");
var footer = document.querySelector("footer");
var signupFeedbackEmail = document.getElementById("signupFeedbackEmail");
var signupFeedbackPass = document.getElementById("signupFeedbackPass");
var usersList = JSON.parse(localStorage.getItem("users")) || [];

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addUser();
});
function addUser() {
  if (
    signupNameRegex() &&
    signupEmailRegex() &&
    signupPassRegex() &&
    Boolean(signupRePass.value == signupPass.value) &&
    signupEmailExist() != true
  ) {
    var user = {
      userName: signupName.value,
      userEmail: signupEmail.value,
      userPass: signupPass.value,
      userRePass: signupRePass.value,
    };
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    window.location.href = "ssignup.html";
  } else {
    notValid();
    footer.classList.remove("fixed-bottom");
  }
}

///////Sign Up Validation
function signupNameRegex() {
  var regex = /^[A-Za-z][a-z_0-9]+$/;
  return regex.test(signupName.value);
}
function signupEmailRegex() {
  var regex = /^[a-z][a-z\._0-9]+(@)(gmail|yahoo|hotmail)\.(com)$/;
  return regex.test(signupEmail.value);
}
var emailExists = false;

function signupEmailExist() {
  for (i = 0; i < usersList.length; i++) {
    if (signupEmail.value == usersList[i].userEmail) {
      return true;
    }
  }
}
function signupPassRegex() {
  var regex = /^\S{9,}$/;
  return regex.test(signupPass.value);
}

function notValid() {
  if (!signupNameRegex()) {
    if (signupName.value == "") {
      signupFeedbackName.innerHTML = "enter your name";
    } else {
      signupFeedbackName.innerHTML =
        "enter name start with A-Z or a-z and 1 or more a-z or _ or nummbers";
    }
  }
  if (!signupEmailRegex()) {
    if (signupEmail.value == "") {
      signupFeedbackEmail.innerHTML = "enter your email";
    } else {
      signupFeedbackEmail.innerHTML = "enter a valid mail";
    }
  }
  if (!signupPassRegex()) {
    if (signupPass.value == "") {
      signupFeedbackPass.innerHTML = "enter your password";
    } else {
      signupFeedbackPass.innerHTML =
        "enter a valid password min 9 dig use anything except (space)";
    }
  }
  if (signupRePass.value != signupPass.value) {
    signupFeedbackPass.innerHTML = "set same password twice";
    signupPass.value = "";
    signupRePass.value = "";
  }
  if (signupEmailExist()) {
    signupFeedbackEmail.innerHTML = "this email already signed up";
    signupPass.value = "";
    signupRePass.value = "";
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
signupBtn.addEventListener("mouseenter", () => {
  shape.classList.add("zigzag");
});
signupBtn.addEventListener("mouseleave", () => {
  shape.classList.remove("zigzag");
});
