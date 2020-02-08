/* menu bar for sp
---------------------------------- */

let body = document.body;
let open = document.getElementById('btn-open');
let close = document.getElementById('btn-close');
let menu = document.getElementById('menu-wrap');

//click open button
open.addEventListener('click', function() {
    action_open();
}, false);

//click close button
close.addEventListener('click', function() {
    action_close();
}, false);

let action_open = function() {
    //visible menu
    menu.classList.add('is-active');

    // create body-wrap
    let element = document.createElement('div');
    element.setAttribute('id', 'body-wrap');
    body.appendChild(element);

    // click body-wrap
    let wrap = document.getElementById('body-wrap');
    wrap.addEventListener('click', function() {
        // hidden menu
        open.classList.remove('is-active');
        menu.classList.remove('is-active');
        body.classList.remove('is-fixed');
        if (wrap.parentNode) {
            wrap.parentNode.removeChild(wrap);
        }
    }, false);

    // click links
    let link = document.getElementsByClassName("menu_link");
    for (let i = 0; i < 4; i++) {
        link[i].addEventListener('click', () => {
            // hidden menu
            open.classList.remove('is-active');
            menu.classList.remove('is-active');
            body.classList.remove('is-fixed');
        }, false);
    }
}

let action_close = function() {
    //visible menu
    menu.classList.remove('is-active');

    //hidden body-wrap
    let wrap = document.getElementById('body-wrap');
    if (wrap.parentNode) {
        wrap.parentNode.removeChild(wrap);
    }
}

/* page top button
---------------------------------- */
let pagetop = document.getElementById('pagetop');

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        pagetop.classList.add('fixed');
    } else {
        pagetop.classList.remove('fixed');
    }
});


/* validation checks for contact form
---------------------------------- */
// err message
const STRING_EMP_NAME = 'Please enter your name!!';
const STRING_EMP_EMAIL = 'Please enter your e-mail address!!';
const STRING__INVALID_EMAIL = 'Please enter valid e-mail address!!';

//focus out
let subForm = document.getElementById('subForm');
//subForm.addEventListener('click', function() {
function check() {
    let name_box = document.getElementById('name');
    let email_box = document.getElementById('email');
    let name_msg = document.getElementById('name_msg');
    let email_msg = document.getElementById('email_msg');
    let flg = true;

    if (name_box.value == "") {
        name_msg.classList.remove('msg');
        name_msg.classList.add('err_msg');
        name_msg.innerHTML = STRING_EMP_NAME;
        flg = false;

    }
    if (email_box.value == "") {
        email_msg.classList.remove('msg');
        email_msg.classList.add('err_msg');
        email_msg.innerHTML = STRING_EMP_EMAIL;
        flg = false;

    } else if (!email_box.value.includes('@')) {
        email_msg.classList.remove('msg');
        email_msg.classList.add('err_msg');
        email_msg.innerHTML = STRING__INVALID_EMAIL;
        flg = false;
    }
    if (!flg) {
        return false;
    }

}

/* get current position
---------------------------------- */
function changeColor() {

    var scrollY = window.pageYOffset;
    let menu_about = document.getElementById('menu_about');
    let menu_works = document.getElementById('menu_works');
    let menu_skills = document.getElementById('menu_skills');
    let menu_contact = document.getElementById('menu_contact');

    var idAbout = document.getElementById('about');
    var idWork = document.getElementById('work');
    var idSkills = document.getElementById('skills');
    var idContact = document.getElementById('contact');

    var triggerAbout = idAbout.getBoundingClientRect().top;
    var triggerWork = idWork.getBoundingClientRect().top - 300;
    var triggerSkills = idSkills.getBoundingClientRect().top + 400;
    var triggerContact = idContact.getBoundingClientRect().top + 1000;

    if (scrollY <= triggerWork) {
        menu_about.classList.add('trigger');
        menu_works.classList.remove('trigger');
        menu_skills.classList.remove('trigger');
        menu_contact.classList.remove('trigger');
    } else if (scrollY > triggerAbout && scrollY <= triggerSkills) {
        menu_works.classList.add('trigger');
        menu_about.classList.remove('trigger');
        menu_skills.classList.remove('trigger');
        menu_contact.classList.remove('trigger');
    } else if (scrollY > triggerSkills && scrollY <= triggerContact) {
        menu_skills.classList.add('trigger');
        menu_about.classList.remove('trigger');
        menu_works.classList.remove('trigger');
        menu_contact.classList.remove('trigger');
    } else if (scrollY > triggerContact) {
        menu_about.classList.remove('trigger');
        menu_works.classList.remove('trigger');
        menu_skills.classList.remove('trigger');
        menu_contact.classList.add('trigger');
    }
}
window.addEventListener('scroll', changeColor);