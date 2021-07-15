

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides_");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
 
  setTimeout(showSlides, 3000); 
}


function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
  }
 

  function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-2-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
  }

  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

  
  var slideIndex = 1;
  showDivs1(slideIndex);
  
  function plusDivs1(n) {
    showDivs1(slideIndex += n);
  }
  
  function showDivs1(n) {
    var u;
    var y = document.getElementsByClassName("mySlides1");
    if (n > y.length) {slideIndex = 1}
    if (n < 1) {slideIndex = y.length}
    for (u = 0; u < y.length; u++) {
      y[u].style.display = "none";  
    }
    y[slideIndex-1].style.display = "block";  
  }



  var slideIndex = 1;
  showDivs3(slideIndex);
  
  function plusDivs3(n) {
    showDivs3(slideIndex += n);
  }
  
  function showDivs3(n) {
    var o;
    var z = document.getElementsByClassName("myslides3");
    if (n > z.length) {slideIndex = 1}
    if (n < 1) {slideIndex = z.length}
    for (o = 0; o < z.length; o++) {
      z[o].style.display = "none";  
    }
    z[slideIndex-1].style.display = "block";  
  }


  var slideIndex = 1;
  showDivs4(slideIndex);
  
  function plusDivs4(n) {
    showDivs4(slideIndex += n);
  }
  
  function showDivs4(n) {
    var a;
    var b = document.getElementsByClassName("myslide");
    if (n > b.length) {slideIndex = 1}
    if (n < 1) {slideIndex = b.length}
    for (a = 0; a < b.length; a++) {
      b[a].style.display = "none";  
    }
    b[slideIndex-1].style.display = "block";  
  }






  
  

  
  