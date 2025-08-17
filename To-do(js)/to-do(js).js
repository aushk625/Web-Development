let todo = [];

let req = prompt("Heyyy!!! What do you want to do?");

while(true){
    if(req === "quit"){
        console.log("quitting the app...");
        break;
    }

    if(req == "list"){
        console.log("Here is your todo list:");
        for(let i =0; i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("----------------------")
    }

    else if(req == "add"){
        let newTask = prompt("What do you want to add to your todo list?");
        todo.push(newTask);
        console.log(`Task added to your todo list ${todo}`);
    }else if(req == "delete"){
        let idx = prompt("Which task do you want to delete?");
        todo.splice(idx,1);
        console.log(`Task deleted from your todo list ${todo}`);
    }else{
        console.log("Invalid input");
    }

    req = prompt("Heyyy!!! What do you want to do next?");
    
}