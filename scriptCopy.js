document.querySelector('#enter-btn').addEventListener('click',addTask);

function addTask(e){
    let taskInput = document.querySelector('#text-input');
   // console.log(taskInput.value);
    if(taskInput.value === ""){window.alert('Empty input!')}
    else{

        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = "close";
        li.innerHTML = taskInput.value;
        li.appendChild(link);

        document.querySelector('ol').appendChild(li);
        console.log(li);
    }

    taskInput.value = "";
    e.preventDefault();
}

document.querySelector('ol').addEventListener('click', removeTask);
function removeTask(e){
   
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure?")){
         
              let task = e.target.parentElement;
              console.log(task);
             task.remove();
       }
      }
}