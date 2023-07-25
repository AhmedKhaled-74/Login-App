var signInUser = document.getElementById("signInUser");
var btnOut = document.querySelector(".btn-out");
var IIn = localStorage.getItem("signedUserNum");
var users = JSON.parse(localStorage.getItem("users"));
signInUser.innerHTML = users[IIn].userName;

/////mouse shape

var shape = document.getElementById("mouseTracker");
var container = document.getElementById("warrper");

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
    mouseY - containerCenterY + containerRect.height / 2 - shapeRect.height / 2;

  shape.style.top = shapeY + "px";
  shape.style.left = shapeX + "px";
});
btnOut.addEventListener("mouseenter", () => {
  shape.classList.add("zigzag");
});
btnOut.addEventListener("mouseleave", () => {
  shape.classList.remove("zigzag");
});
