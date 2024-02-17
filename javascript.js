let pass = document.querySelector('#pass');
let cpass = document.querySelector('#cpass');
let msg = document.querySelector('#msg');

function checkField() {
    if (!pass.value && !cpass.value) {
        msg.textContent = '* Passwords do not match';
        pass.classList.add('error');
        cpass.classList.add('error');
    } else if (pass.value !== cpass.value) {
        msg.textContent = '* Passwords do not match';
        pass.classList.add('error');
        cpass.classList.add('error');
    } else {
        msg.textContent = '';
        pass.classList.remove('error');
        cpass.classList.remove('error');
    }
}
checkField();
pass.addEventListener('change', checkField);
cpass.addEventListener('change', checkField);