
const list = document.getElementById("draggable-list");

list.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
});

list.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
});

list.addEventListener("dragover", (e) => {  //fires repeatedly
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    const afterElement = [...list.children].find(item => 
        e.clientY < item.getBoundingClientRect().top + item.offsetHeight / 2  
    );
    list.insertBefore(draggingItem, afterElement);
});


// item.getBoundingClientRect().top: The Y-coordinate of the item's top.
// item.offsetHeight / 2: Half of the item's height.
//offsetHeight - The offsetHeight property returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin
//getBoundingClientRect - Return the size of an element and its position relative to the viewport