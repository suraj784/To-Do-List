let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        // add task
        const task = document.createElement('li')
        task.textContent = inputBox.value;
        listContainer.appendChild(task)

        // span used for removed content
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        task.appendChild(span)
        
    } 
    // clear input field after adding task
    inputBox.value = '';
    saveData()
}
listContainer.addEventListener('click', (input)=>{
    
     if(input.target.tagName === 'SPAN'){
        input.target.parentElement.remove()
        saveData()
    }
})


