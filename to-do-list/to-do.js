function init(){
    const todos = [];

    const todocon = document.querySelector(".todo");

    const addinput = document.createElement("input");
    addinput.placeholder = "Add a task";

    const addbtn = document.createElement("button");
    addbtn.textContent = "Add";

    const todolist = document.createElement("div");
    todolist.style.border="2px solid black";

    const searchinput = document.createElement("input");
    searchinput.placeholder = "Search the Task";
    const searchbtn = document.createElement("button");
    searchbtn.textContent="Search";

    const a = document.createElement("br");
    const b = document.createElement("br");

    todocon.append(searchinput,searchbtn,a,b,addinput, addbtn,todolist,);

    function rendertask(task){

        const todoitems= document.createElement("div");
        todoitems.style.border="2px solid black";

        const p = document.createElement("p");

        const deletebtn = document.createElement("button");
        deletebtn.textContent="Delete";
        deletebtn.style.margin = "5px" ;
        deletebtn.addEventListener("click",function(){
            const index = todos.indexOf(task);
            todos.splice(index,1);
            todoitems.remove();
        });

        p.textContent = task;            
        

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.style.margin = "5px" ;
        editbtn.addEventListener("click",function(){
            // M-1
            /*
            const index = todos.indexOf(task);
            const newtask = prompt("edit task:",todos[index]);
            todos[index]= newtask;
            p.textContent = newtask;
            */
           // M-2
           
           const editinput = document.createElement("input");
           
           const editsavebtn = document.createElement("button");
           editsavebtn.textContent = "Save";
           editinput.type = "text";
           //const ;
           editinput.value=task;
           todoitems.prepend(editinput,editsavebtn);
           editinput.focus();
           editsavebtn.addEventListener("click",function(){
            const index = todos.indexOf(task);
            const updatedvalue = editinput.value;
            todos[index] = updatedvalue;
            p.textContent = updatedvalue;
            editinput.remove();
            editsavebtn.remove();
           });

        });


        const colorbtn = document.createElement("button");
        colorbtn.textContent = "complete";
        colorbtn.style.margin = "5px" ;
        colorbtn.addEventListener("click",function(){
            todoitems.style.backgroundColor="green";
            colorbtn.remove();

            const colorrem = document.createElement("button");
            colorrem.textContent = "remove color";
            colorrem.style.margin = "5px" ;
            colorrem.addEventListener("click",function(){
                todoitems.style.backgroundColor="White";
                colorrem.remove();
                todoitems.append(colorbtn);
            });
            todoitems.append(colorrem);
        })

        todoitems.append(p,deletebtn,editbtn,colorbtn);
        todolist.prepend(todoitems);
        
    }



    function addtodo(){
        const task = addinput.value;

        if(!task){
            return;
        }

        todos.unshift(task);
        console.log(todos);
        rendertask(task);
        addinput.value="";
        addinput.focus();
    }

  

    addbtn.addEventListener("click",addtodo);
    
    addinput.addEventListener("");

    
}
init();
