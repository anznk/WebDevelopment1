/* validation checks
---------------------------------- */
let subForm = document.getElementById('subForm');

// err message
const STRING_EMPTY = 'This field is required';

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


    let mandatory = document.getElementsByClassName('mandatory')[0].value;

    if (mandatory == "") {
        alert(mandatory);
        errmsg.innerHTML = STRING_EMPTY;
    }



}, false);