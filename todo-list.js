const array = [{name: 'Cook food',
dueDate: '2024-05-05'},{
name: 'Chop food',
dueDate: '2023 - 06-06'}]

displayList()

function displayList(){

let todoListHTML = ''
for (let i = 0; i < array.length; i++){
    const todo = array[i]
    const {name, dueDate} = todo
    const html = `
        <div> ${name}</div>
        <div>${dueDate}</div>
        <button onclick = "
          array.splice(${i}, 1)
          displayList()
         " class="btn1">Delete</button>
    `
    todoListHTML+= html

}
console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML =todoListHTML
}


function addList(){
const input =  document.querySelector('.todoList')
const name = input.value

const dateInputElement=  document.querySelector('.todoDate')
const dueDate= dateInputElement.value


array.push({name, dueDate})
console.log(array);

input.value = ''
displayList()

}