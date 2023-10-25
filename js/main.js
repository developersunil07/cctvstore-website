// function sayHello() {
//     var boyElement = document.getElementById("boy");
//     boyElement.style.border = "3px solid red";
// }



var header = document.querySelector("header");
window.addEventListener("scroll", function () {

  header.classList.toggle("sticky", window.scrollY > 0)
})

if (window.scrollY > 0) {
  header.classList.add("sticky")
}

jQuery(document).ready(function($){
    "use strict";
    // TESTIMONIALS CAROUSEL HOOK

    $('#customers-testimonials').owlCarousel({

        loop: true,
        center:true,
        margin: 0,
        item:3,
        nav: true,
        navText:['<i class="fa-solid fa-arrow-left"></i>' ,'<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: true,
        smartSpeed:450,
        autoplayTimeout: 3000,
        
        responsive: {
            0: {
                items: 1
            },

            800: {
                items: 3
            },

            1000: {
                items: 3
            }
        }
    })
});

AOS.init({
    once:true,
});

$(".nav").on("click", function () {
    $(".menu-links ul").slideToggle(1000, "swing", function () {
        
    });
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  var boxes = document.querySelectorAll(".box");
var numSelected = 0;
var maxSelected = 3;
for(var i = 0;i<boxes.length;i++){
    boxes[i].addEventListener("click", function(){        
        if(this.classList.contains("selected")){
            this.classList.remove("selected");
            numSelected;
        }
        else if(numSelected<maxSelected){
            this.classList.add("selected");
            numSelected;
        }
    });
}

  