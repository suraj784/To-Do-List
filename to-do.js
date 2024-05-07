let listContainer = document.getElementById('list-container')
let head = document.querySelector('head')
let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        const task = document.createElement('li')
        task.textContent = inputBox.value;
        listContainer.appendChild(task)
        // inputBox.value = ''
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        task.appendChild(span)
        
    }
    inputBox.value = '';
    saveData()
}
listContainer.addEventListener('click', (e)=>{
    
     if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

