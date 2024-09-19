let taskFormE1=document.querySelector('#task-form');
let taskInput=document.querySelector('#task-el');
let tasklist=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
taskFormE1.addEventListener('submit',function(e)
{
 e.preventDefault();
 let task=taskInputE1.value.trim();
 tasklist.unshift(task);
 localStorage.setItem('tasks',JSON.stringify(tasklist));
 taskInputE1.value='';
 displayTasks();  
});

function displayTasks()
{
    let eachTacks='';
    tasklist.forEach((task)=>
    {
       eachTacks+=<li class="list-group-item list-group-item-secondary mb-2">
        <span>$(task)</span>
        <button class="float-end icon">
            <i class ="bi bi-trash"></i>
        </button>

        <button class="float-end icon">
            <i class ="bi bi-pen"></i>
        </button>
       </li>;     
});
document.getElementById('task-list').innerHTML=eachTacks;
}
displayTasks();