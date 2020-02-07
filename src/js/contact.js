/* validation checks
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