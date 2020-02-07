/* validation checks
---------------------------------- */
let subForm = document.getElementById('subForm');

// err message
const STRING_EMP_NAME = 'Please enter your name!!';
const STRING_EMP_EMAIL = 'Please enter your e-mail address!!';
const STRING__INVALID_EMAIL = 'Please enter valid e-mail address!!';

//click submit button
// subForm.addEventListener('click', function() {
//     // get element
//     var company = document.getElementById("company").value;
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     if (company == "" || name == "") {

//     }
// }, false);


//focus out

let errmsg = document.getElementById("name_msg");

subForm.addEventListener('click', function() {
    let name_box = document.getElementById('name');
    let email_box = document.getElementById('email');
    let name_msg = document.getElementById('name_msg');
    let email_msg = document.getElementById('email_msg');

    if (name_box.value == "") {
        name_msg.classList.remove('msg');
        name_msg.classList.add('err_msg');
        name_msg.innerHTML = STRING_EMP_NAME;
    }
    if (email_box.value == "") {
        email_msg.classList.remove('msg');
        email_msg.classList.add('err_msg');
        email_msg.innerHTML = STRING_EMP_EMAIL;
    } else if (!email_box.value.includes('@')) {
        email_msg.classList.remove('msg');
        email_msg.classList.add('err_msg');
        email_msg.innerHTML = STRING__INVALID_EMAIL;
    }

}, false);