const subscribeWrapper = document.querySelector('subscribe-wrapper');
const newsletterForm = document.querySelector('.subs-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

submitBtn.onclick = e => {
    e.preventDefault();
}

function checkName(){
    const name = nameInput.value.trim();
    return name.value !== "";
}

function checkEmail(){
    const emailAddr = emailInput.value.trim();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(String(emailAddr).toLowerCase());
    return isValidEmail;
}

newsletterForm.addEventListener('input', function (e) {
    if (checkName() && checkEmail()) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled',"");
    }
});
