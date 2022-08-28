$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $(".nav-content").addClass("shrink");
    $("nav").addClass("shrink");
  } else {
    $(".nav-content").removeClass("shrink");
    $("nav").removeClass("shrink");
  }
});
var typed = new Typed(".auto-type", {
  strings: ["Appropriate price.", "High quality.", "Safe & natural products."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "",
    Password: "",
    To: "",
    From: document.getElementById("emailInfo").value,
    Subject: "new contact form email",
    Body: "And this is the body",
  }).then((message) => alert(message));
} 
console.log("hey")
