const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".header__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

//scroll

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLink);
  });
}
function onMenuLink(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;
   
    if(iconMenu.classList.contains('active')){
      document.body.classList.remove('lock');
     iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
    }
    
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}




