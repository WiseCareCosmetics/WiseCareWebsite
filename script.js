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
/*function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "abdelrahman.ahmed.mail@gmail.com",
    Password: "body#55647#body",
    To: "abdo.gaming666@gmail.com",
    From: document.getElementById("emailInfo").value,
    Subject: "new contact form email",
    Body:
      "Name: " +
      document.getElementById("firstName").value +
      "<br> Email: " +
      document.getElementById("emailInfo").value +
      "<br> Message: " +
      document.getElementById("comments").value,
  }).then((message) => alert(message));
}*/
