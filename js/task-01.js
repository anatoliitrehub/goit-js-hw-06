const items = document.querySelectorAll('li.item');
console.log("Number of categories: ",items.length);
for (let i=0; i<items.length; i++){
    console.log('');
    console.log("Category: ",items[i].firstElementChild.textContent);
    console.log("Elements: ",items[i].lastElementChild.children.length);
}
