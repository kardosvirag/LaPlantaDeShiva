//contact formular
function hide_container(){
      var button = document.getElementById("show_hide");
      var container = document.getElementById("contact_formular");
      
    if (container.style.display === "block"){
        container.style.display = "none";
        button.innerHTML ="treffen";
    }else{
        container.style.display = "block";
        button.innerHTML = "schließen";
    }
}

//scroll
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

//html: link and div names have to be same
//<a href="#welcome"> - <div id="welcome">

$(function() {
    $('nav a[href^="#' + location.pathname.split("#")[1] + '"]').addClass('active');
  });