const inp = document.querySelector('input#validation-input');
const ev = inp.addEventListener('blur', handler);

function handler (event){
if (event.target.dataset.length == event.target.value.length) {
    inp.classList.add("valid");
    inp.classList.remove("invalid");
}  
else{
    inp.classList.add("invalid");
    inp.classList.remove("valid");

}
}