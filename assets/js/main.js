var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
};

function toggleHandler(toggle) {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.sub-menu').removeClass('open');
    } else {
      this.classList.add("is-active");
      $(".sub-menu").addClass('open');
    }
  });
}

$(".sub-menu li a").click(function(event) {
  $(".sub-menu").removeClass('open');
  $(".c-hamburger").removeClass('is-active');
});

var toggles = document.querySelectorAll(".c-hamburger-2");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler2(toggle);
};

function toggleHandler2(toggle) {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.sub-search').removeClass('open');
    } else {
      this.classList.add("is-active");
      $(".sub-search").addClass('open');
    }
  });
}

$(".sub-search li a").click(function(event) {
  $(".sub-search").removeClass('open');
  $(".c-hamburger-2").removeClass('is-active');
});
