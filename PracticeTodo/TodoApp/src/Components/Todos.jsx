export function Todos({todos}){
   return <div>
       { todos.map(function(todo){
            return <div>
               <h1>{todo.Title}</h1>
               <h3>{todo.Description}</h3>
               <button>{Todos.complete==true ? "completed" : "Mark as complted"}</button>
            </div>
        })}
    </div>
}