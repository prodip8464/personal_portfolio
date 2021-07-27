// ============= menu Show Y hidden=================
const navMenu=document.getElementById('nav__menu'),
       navToggle=document.getElementById('nav_toggles'),
        navClose=document.getElementById('nav_close');


// ===============Show menu ==============

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}


// ===============hide  menu ==============
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}


/// ====================== Remove menu mobile =====================

const navLink= document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu=document.getElementById('nav__menu');
    navMenu.classList.remove('show_menu');


}
navLink.forEach(n => n.addEventListener('click',linkAction))



// ============================ Accordion skills ======================
const skills_content =document.getElementsByClassName('skills_content'),
    skills_header = document.querySelectorAll('.skills_header');

function toggleSkills(){


    let itemClass = this.parentNode.className;
    for(var i=0;i<skills_content.length;i++){
        skills_content[i].className='skills_content skills_close'
    }
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className='skills_content skills_open'

    }



}

skills_header.forEach((el) => {
    el.addEventListener('click',toggleSkills)

})



// ========================= Qualification tabs ==================
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');


        tabs.forEach(tab =>{
            tab.addEventListener('click',() =>{
                const target = document.querySelector(tab.dataset.target)
                console.log(target)
                tabContents.forEach(tabContent =>{
                    tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')
                tabs.forEach(tab =>{
                    tab.classList.remove('qualification_active')
                })
                tab.classList.add('qualification_active')

            })
        })



// ======================== SERVICE MODEL ========================

const modalViews =document.querySelectorAll('.service_model'),
    modalBtns= document.querySelectorAll('.service_button'),
    modalClose= document.querySelectorAll('.service_model_close')
let modal =function (modalClick){
    modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn , i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })

})
modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active_modal')
        })
    })
})


// ===================  Portfolio Swiper================
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// ====================== testimonial swiper ==========

let swiperTestimonial = new Swiper('.testimonial_container', {

    loop:true,
    grabCursor: true,
    spaceBetween:48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,

    },
    breakpoints:{
        568:{
            slidesPerView: 2,

        }
    }



});

// ==================== SHOW scroll up ======================
function scrollUp(){
    const scrollUp= document.getElementById('scroll_up');

    //  if display getter then 560 px in y exis show scroll button
    if(this.scrollY >= 560 ){
        scrollUp.classList.add('show_scroll');
    }
    else{
        scrollUp.classList.remove('show_scroll');


    }

}
window.addEventListener('scroll',scrollUp);



/*==================== DARK LIGHT THEME ====================*/
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'
//
// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')
//
// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
//
// // We validate if the user previously chose a topic
// if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }
//
// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


    let icon= document.getElementById("theme-button");
    icon.addEventListener('click', function (){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        icon.src="image/sun.png";
}else {
    icon.src="image/moon.png";

}



})


















