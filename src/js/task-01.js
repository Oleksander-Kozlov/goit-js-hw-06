const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`);
    
});


