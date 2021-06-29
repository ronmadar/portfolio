/*== Show menu ==*/
/*const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
toggle.addEventListener('click',()=>{
       nav.classList.toggle('show-menu');
});
*/
const showMenu = (toogleId,navId) =>{
    const toggle = document.getElementById(toogleId),
    nav = document.getElementById(navId)
        if(toggle && nav){
            toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')     
            })
        }
}
showMenu('nav-toggle','nav-menu')

/* remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight
        const sectionTop =current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive )

/*=====CHANGE BACKGROUND HEADER======= */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else  header.classList.remove('scroll-header');
    
}
window.addEventListener('scroll',scrollHeader)

/*=====show scroll top ======= */
function scrollTop(){
    const scrolltop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrolltop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)

/*=====MIXUP FILTER PROTFOLIO ======= */

const mixer = mixitup('.protfolio__container', {
    selectors: {
        target: '.protfolio__content'
    },
    animation: {
        duration: 400
    }
});

/*=====link active protfolio ======= */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activeProtfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(L => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(L => l.addEventListener('click', activeProtfolio))

/*=====SWIPER CAROUSEL ======= */

const mySwiper = new Swiper('.testimonial__container', {   
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        640:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },      
      }
})

/*=====GSAP ANIMATION ======= */


















