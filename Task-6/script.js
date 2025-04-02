
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
