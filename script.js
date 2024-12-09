let slideIndex = 1;
let slideTimer;

// Initialize the slider
startSlideshow();

// Next/previous controls
function plusSlides(n) {
  resetTimer();
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  resetTimer();
  showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  // Wrap around the slide index if it goes out of bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides and remove fade class
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade-in");
  }

  // Deactivate all thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide with fade effect
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade-in");
  dots[slideIndex - 1].className += " active";

  // Update caption text
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Function to start the slideshow
function startSlideshow() {
  slideTimer = setInterval(() => plusSlides(1), 7000); // Automatically advance every 7 seconds
}

// Function to reset the timer
function resetTimer() {
  clearInterval(slideTimer); // Clear the current timer
  startSlideshow(); // Restart the timer
}

// Start by showing the first slide
showSlides(slideIndex);