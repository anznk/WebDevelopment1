/* menu bar for sp
---------------------------------- */

var body = document.body;
var open = document.getElementById('btn-open');
var close = document.getElementById('btn-close');
var menu = document.getElementById('menu-wrap');

//click open button
open.addEventListener('click', function() {
    action_open();
}, false);

//click close button
close.addEventListener('click', function() {
    action_close();
}, false);

var action_open = function() {
    //visible menu
    menu.classList.add('is-active');

    // create body-wrap
    var element = document.createElement('div');
    element.setAttribute('id', 'body-wrap');
    body.appendChild(element);

    // click body-wrap
    var wrap = document.getElementById('body-wrap');
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
    var link = document.getElementsByClassName("menu_link");
    for (let i = 0; i < 4; i++) {
        link[i].addEventListener('click', () => {
            // hidden menu
            open.classList.remove('is-active');
            menu.classList.remove('is-active');
            body.classList.remove('is-fixed');
        }, false);
    }
}

var action_close = function() {
    //visible menu
    menu.classList.remove('is-active');

    //hidden body-wrap
    var wrap = document.getElementById('body-wrap');
    if (wrap.parentNode) {
        wrap.parentNode.removeChild(wrap);
    }
}

/* page top button
---------------------------------- */
var pagetop = document.getElementById('pagetop');

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        pagetop.classList.add('fixed');
    } else {
        pagetop.classList.remove('fixed');
    }
});