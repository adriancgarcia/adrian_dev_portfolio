function myFunction () {
  var x = document.getElementById("section-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function myFunction(x) {
//   x.classList.toggle("change");
// }

// function toggleSlideMenu(x){
//  if(x.classList.contains('change')){
//     document.getElementById('burger-menu').style.width = '20%';
//  }
//  else{
//     document.getElementById('burger-menu').style.width = '0px';
//  }
// }

document.querySelectorAll(".nav-list li a").forEach(function(elem) {
  elem.addEventListener('click', function(ev) {
    document.getElementById("check").checked = false;
  });

})


// When the user scrolls the page, execute myFunction
// window.onscroll = function() {scrollFunction()};

// Get the navbar
// var navbar = document.getElementById("section-links");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function scrollFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




