var input = prompt("What would you like to do??");
var todos = [];
while(input !== "quit"){
    if(input === "list"){
        printList();
    } else if(input === "new"){
        addTodo();
    }else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do??");
}
console.log("Ok, you quite the app");



function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i+ ":" + todo);
    });
    console.log("**********");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
}

function printList(){
    console.log("**********");
    todos.forEach(function(todo, index){
        console.log(index + ":" + todo);
    });
}