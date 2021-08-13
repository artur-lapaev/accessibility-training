(function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

document.querySelectorAll("#nav li").forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
  navEl.onfocus = function (e) {
      toggleTab(e.currentTarget.id, e.currentTarget.dataset.target);
      navEl.onkeydown = function (e) {
        // end button
        if (e.which === 35) {
          var navEls = document.querySelectorAll("#nav li");
          navEls[navEls.length - 1].focus();
          e.preventDefault();
        }
        // home button
        if (e.which === 36) {
          var navEl = document.querySelector("#nav li");
          navEl.focus();
          e.preventDefault();
        }
        // left arrow button
        if (e.which === 37) {
          e.currentTarget.previousElementSibling.focus();
        }
        // right arrow button
        if (e.which === 39) {
          e.currentTarget.nextElementSibling.focus();
        }
      }
  }
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
      navEl.setAttribute('aria-selected', "true");
   //   navEl.setAttribute('tabindex', '0');
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
        navEl.setAttribute('aria-selected', "false");
    //    navEl.setAttribute('tabindex', '-1');
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}
