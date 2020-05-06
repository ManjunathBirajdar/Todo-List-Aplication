window.onload = function () {
    
    const btn = document.getElementById('add-button');
    const listHead = document.getElementById('list');
    
    const finishTask = (event) =>{
        console.log(event.target.checked);
        if (event.target.checked){
            event.target.setAttribute('class','cross-note');
        } else {
            event.target.removeAttribute('class');
        }
        
    }
    btn.addEventListener("click",()=>{
        const content_element = document.getElementById("add-input");
        const content = content_element.value; 
        if(!content){
            return;
        }
        const template = document.getElementById('template');
        const clone=document.importNode(template.content,true);
        clone.querySelector('span').textContent=content;
        clone.querySelector('input').addEventListener('click',finishTask);
        listHead.appendChild(clone);
        content_element.value="";    
    });
};