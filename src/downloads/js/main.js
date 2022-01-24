//----------------------------------Pre-loader----------------------------------//


window.onload = function () {
  var preloader = document.getElementsByClassName('preloader')[0];
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 2000);
};


//---------------------------Dark Mode Toggle---------------------------//


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);




//----------------------------Smooth Scrolling------------------------------//

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//--------------------------------Skills Bar--------------------------------//

$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});



//------------------------------Testimonial slider---------------------------// 

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", ""],
    slideSpeed: 1000,
    singleItem: true,
    transitionStyle: "fade",
    autoPlay: true
  });
});


//---------------------------------Projects slider---------------------------//


$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [1000, 2],
    itemsMobile: [650, 1],
    pagination: true,
    navigationText: true,
    autoPlay: true
  });
});



function cv() {
  alert("Sorry... C.V is Not Uploaded Yet");
}