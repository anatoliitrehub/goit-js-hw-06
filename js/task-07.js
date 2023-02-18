const inp = document.querySelector('input#font-size-control');
const ev = inp.addEventListener('input', (event) => document.querySelector('span#text').style.fontSize=event.target.value+"px");