$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  let typedOne = new Typed(".typing", {
    strings: ["React.js", "Node.js", "Express.js", "MongoDB"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  let typedTwo = new Typed(".typing-2", {
    strings: ["React.js", "Node.js", "Express.js", "MongoDB"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let form = document.getElementById("my-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  let status = document.getElementById("my-form-status");
  let data = new FormData(event.target);
  const mailId = data.get("replyTo");
  const message = data.get("message");
  const username = data.get("username");
  const subject = data.get("subject");
  const jsonTemp = {
    name: username,
    mailId: mailId,
    subject: subject,
    message: message,
  };
  let post = JSON.stringify(jsonTemp);

  const url = event.target.action;
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(post);

  xhr.onload = function () {
    console.log("resr", xhr.status);
    if (xhr.status === 200) {
      status.innerHTML = "Thanks for your Message I reply to you soon!!";
      form.reset();
    } else {
      status.innerHTML = "Oops! There was a problem submitting your message";
    }
  };
};
form.addEventListener("submit", handleSubmit);
