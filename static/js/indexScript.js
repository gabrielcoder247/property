//Navbar Code
jQuery(document).ready(function($) {
  $(window).scroll(function() { // check if scroll event happened
            if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                $(".navbar").css("background-color", "white"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                $("#logo").attr('src','assets/images/logo-white-2.jpeg');
            } else {
                $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
                $("#logo").attr('src','assets/images/transparent-logo.png');
                $(".navBtn2").css("border","1px solid");
            }
          });
});