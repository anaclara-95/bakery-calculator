//**************** Show Menu ****************/

//selection Dom Element
const menu= document.getElementById('nav-menu');
const toggle= document.getElementById('nav-toggle');
const nav_close= document.getElementById('nav-close');

//function view menu
if(toggle){
    toggle.addEventListener('click', ()=>{
        menu.classList.add('show-menu');
    });
};

//Menu hidden

if(nav_close){
 nav_close.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
 });
};

//**************** REMOVE MENU MOBILE ****************/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const menu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class

    menu.classList.remove('show-menu');
} 

navLink.forEach(n => n.addEventListener('click', linkAction));


/* Add blur header */

const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >=50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/****************** Show Scroll Up ****************************/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag withthe scrollup class 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)


/*********************************************Scroll sections active link**************************************************/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if (sectionsClass) { // ✅ chequeo para que no sea null
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* Scroll Reveal Animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1, 
    duration: 2500,
    delay: 300,
    //reset: true, //animation repeat
})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)

sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {rotate: {z: -15} })
sr.reveal(`.home__bread, .about__bread`, {rotate: {z:15} })
sr.reveal(` home__footer`, {scale: 1, origin: 'bottom'})

sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z:-30}, distance: 0})
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600})
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z:-30}, distance: 0, delay: 900})

sr.reveal(`.favorite__card img`, {interval: 100, rotate: {z: 15}, distance: 0})

sr.reveal(`.footer__container`, {scale: 1})

