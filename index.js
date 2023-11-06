// ****************** Gallery *********************
document.addEventListener("DOMContentLoaded", function() {
   const gallery = document.querySelector('.gallery');
   const prevButton = document.querySelector('.prev-btn');
   const nextButton = document.querySelector('.next-btn');

   const scrollAmount = 400; // Set the amount to scroll in pixels

   prevButton.addEventListener('click', function() {
       gallery.scrollLeft -= scrollAmount; // Scroll left
   });

   nextButton.addEventListener('click', function() {
       gallery.scrollLeft += scrollAmount; // Scroll right
   });
});

// Get all gallery-img elements
const galleryImages = document.querySelectorAll(".gallery-img");

// Function to toggle centered class on click and revert after 3 seconds
function toggleCenteredClass() {
   galleryImages.forEach(function (item) {
      item.addEventListener("click", function () {
         // Toggle the centered class on click
         item.classList.toggle("centered");

         // Remove the centered class after 3 seconds
         setTimeout(function () {
            item.classList.remove("centered");
         }, 2000); // 3000 milliseconds (3 seconds)
      });
   });
}

// Call the function to set up click event listeners
toggleCenteredClass();

// ********************* About *************************


     
      // about img


      document.addEventListener("DOMContentLoaded", function() {
         const images = document.querySelectorAll(".about-img img");
         let currentIndex = 0;
     
         function showNextImage() {
             images[currentIndex].classList.add("hidden"); // Hide the current image
             currentIndex = (currentIndex + 1) % images.length; // Get the next index
             images[currentIndex].classList.remove("hidden"); // Show the next image
         }
     
         setInterval(showNextImage, 2000); // Change image every 2 seconds (2000 milliseconds)
     });

// *************** Email **********************

document.querySelector(".f1").addEventListener("submit", function (event) {
   event.preventDefault();

   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let message = document.getElementById("message").value;

   if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
   }

   emailjs.init("0WQKBY17PEYGgCcm0");

   let params = {
      email: email,
      name: name,
      phone: phone,
      message: message,
   };

   const serviceID = "service_go1q6ii";
   const templateID = "template_pku694x";

   emailjs
      .send(serviceID, templateID, params)
      .then(function (response) {
         console.log("Email sent successfully:", response);
         alert("Your message has been sent successfully!");
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("phone").value = "";
         document.getElementById("message").value = "";
      })
      .catch(function (error) {
         console.error("Email send failed:", error);
         alert("Oops! Something went wrong. Please try again later.");
      });
});

// *********************** header menu btn ******************

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
   nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", toggleNavbar);

// ************* Logo Crouser ****************

$('.owl-carousel').owlCarousel({
   loop:true,
 //   margin: 0,
   nav:true,
   autoplay:true, // Add this option to enable autoplay
   autoplayTimeout:2000, // Set the timeout to 3 seconds
   responsive:{
       0:{
           items:1
       },
       350:{
           items:2
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   },
   animateOut: 'fadeOut', // CSS class for the "out" transition
animateIn: 'fadeIn'    // CSS class for the "in" transition
 })



// ************************** Crouser***********************

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// ********************** header coloar ****************

const header = document.querySelector(".header");
const scrollThreshold = 100; // Adjust this value to set the scroll threshold for changing the header color

window.addEventListener("scroll", () => {
   const currentScrollPosition = window.scrollY;

   if (currentScrollPosition > scrollThreshold) {
      header.classList.add("header-scroll");
   } else {
      header.classList.remove("header-scroll");
   }
});


    