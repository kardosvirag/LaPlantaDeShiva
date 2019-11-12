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

//scroll to section

//html: link and div names have to be same
//<a href="#welcome"> - <div id="welcome">
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

//photo gallery

/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
*/

function showSlides(){
    var slides = document.getElementsByClassName("mySlides");
    
    slides[1].style.display = "block";
    /*var i;
    var slides = document.getElementsByClassName("mySlides");
   
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
    
    */
}


