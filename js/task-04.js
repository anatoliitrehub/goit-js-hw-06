const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInk = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
btnDec.addEventListener("click", () => {
    counterValue--;
    document.querySelector('span#value').textContent = counterValue;
}
    )
btnInk.addEventListener("click", () => {
    counterValue++;
    document.querySelector('span#value').textContent = counterValue;
})