//=======GALLERY
function slidesPlugin(activeSlide = 2){
    const slides = document.querySelectorAll('.gallery__slide')
  
    slides[activeSlide].classList.add('active')
  
    for(const slide of slides){
      slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.toggle('active')
        
      })
    }
  
    function clearActiveClasses(){
      slides.forEach((slide) => {
        slide.classList.remove('active')
      })
    }
  
  }
  slidesPlugin()
  
  //====SWITCHbtn
  
  const switchBtn = document.querySelector('.switch-btn')
  const bg = document.querySelector('.switch-wrapper')
  const header = document.querySelector('.header')
  const links = document.querySelectorAll('.menu__link')
  const title = document.querySelector('.gallery__heading')
  
  switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('switch-on')
    bg.classList.toggle('switch-wrapper-dark')
    if(switchBtn.classList.contains('switch-on')){
      header.style.background = 'rgb(11, 11, 11)'
      links.forEach((link) => {
        link.style.color = '#fff'
        title.style.color = '#FF6464'
        header.style.borderBottom = '1px solid rgb(99, 99, 99)'
        
      })
    } else {
      header.style.background = '#fff'
      links.forEach((link) => {
        link.style.color = '#000'
        title.style.color = '#000'
        header.style.borderBottom = ''
      })
    }
  })