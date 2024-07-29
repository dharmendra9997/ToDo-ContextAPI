import { createContext,useContext } from "react"

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }],
    addTodo: (todo) => { },
    updatedTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{}
})


export const TodoProvider =TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}