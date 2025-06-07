import { useState } from "react"

const AddTodo = ({ setNewTodo , todos}) => {
    const [input , setInput] = useState('')

    const addTodo =()=>{
        if(input === "") return alert("Add Todo First")
        setNewTodo([{ title: input} , ...todos])
    setInput("")
    }

  return (
    <div className="w-full text-center py-10 px-5 flex flex-coloum md:w-[500px] md:m-auto">
            <input 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className="outline-none border-gray-200 bg-gray-800 p-2 rounded-l-lg rounde  w-[85%]"
            type="text" placeholder="Add Todo Here"/>

            <button
            onClick={addTodo}
            className="p-2 border-gray-200 bg-yellow-500 rounded-r-lg w-[15%]"
            >Add</button>

    </div>
  )
}

export default AddTodo