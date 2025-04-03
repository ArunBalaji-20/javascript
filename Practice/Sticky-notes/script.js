let color=document.getElementById('color');
let createBtn=document.getElementById('createBtn');
let list=document.getElementById('list')

createBtn.onclick=()=>{
    let newNote=document.createElement('div');
    newNote.classList.add('note');
    newNote.innerHTML=`
        <span class="close">X</span>
        <textarea name="area" id="input-area" rows="10" cols="30"></textarea>
        `
    newNote.style.borderColor=color.value;
    list.appendChild(newNote)
}

//To delete note
document.addEventListener('click',(event)=>{
    // console.log('outside',event.target)
    if(event.target.classList.contains('close')){
        // console.log(event.target)
        event.target.parentNode.remove();
    }
})

let cursor={
    x:null,
    y:null
 }

let note={
    dom: null,
    x: null,
    y:null
}

document.addEventListener('mousedown',(event)=>{ //when mouse is clicked
    if(event.target.classList.contains('note')){
        cursor={
            x:event.clientX,
            y:event.clientY
        }
        // console.table(cursor)
        note={
            dom:event.target,
            x: event.target.getBoundingClientRect().left,  //storing the initial values
            y: event.target.getBoundingClientRect().top
        }
        // console.log(event.target)
        //console.log(note.x,note.y)
    }
})

document.addEventListener('mousemove',(event)=>{  //when mouse is moved
    if(note.dom==null) return;
    let currentCursor={
        x:event.clientX,
        y:event.clientY
    }
    let distance={
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }
    note.dom.style.left= (note.x + distance.x) + 'px';
    note.dom.style.top=(note.x+distance.y) + 'px';
    note.dom.style.cursor='grab';
})

document.addEventListener('mouseup',(event)=>{ //when mouse is released
    if(note.dom==null) return;
    note.dom.style.cursor='auto';
    note.dom=null;
})

