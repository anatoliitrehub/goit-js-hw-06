const inpForm = document.querySelector('.login-form');
const evSubmit = inpForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const {email,password} = event.currentTarget;
    // console.log(email.value, password.value)
    // console.log(event.currentTarget.elements.password.value)
    if(!email.value || !password.value) alert ("All lines must be fill");
else {
    const inpData = {
    password: event.currentTarget.elements.password.value,
    email:event.currentTarget.elements.email.value
    };
    console.log(inpData);
    inpForm.reset();
}


}
