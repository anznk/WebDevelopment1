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