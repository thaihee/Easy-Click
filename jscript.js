// AUTO SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusSlides(1);
}, 4000);

// BACK TO TOP
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Search company
function searchCompanyFuntion() {
  var input = document.getElementById("SearchCom");
  var filter = input.value.toLowerCase();
  var cards = document.getElementsByClassName('com-card');
  var names = document.getElementsByClassName('com-name');

  for (let i = 0; i < names.length; i++) {
    if (names[i].innerText.toLowerCase().includes(filter)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Search job
function searchJobFuntion() {
  var input = document.getElementById("SearchJob");
  var filter = input.value.toLowerCase();
  var cards = document.getElementsByClassName('job-object');
  var names = document.getElementsByClassName('job-name');

  for (let i = 0; i < names.length; i++) {
    if (names[i].innerText.toLowerCase().includes(filter)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Filter
function filterJobs(e) {
  const jobs = document.querySelectorAll(".job-object"); 
  let filter = e.target.dataset.filter; 
  jobs.forEach(job => {
    job.classList.contains(filter) 
    ? job.classList.remove('hidden')
    : job.classList.add('hidden');
  });
};
