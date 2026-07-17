import React from 'react'

const InputBox = ({addTask,taskInput,setTaskInput,taskPrice,setTaskPrice,editingId}) => {
    
    return (
        <>
            <form onSubmit={addTask} className="flex flex-col py-3 sm:flex-row gap-3 w-full">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter Task Name..."
                    className="flex-1 border-2 border-slate-200 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition"
                />
                <input
                    type="number"
                    placeholder="Price (₹)..."
                    value={taskPrice}
                    onChange={(e) => setTaskPrice(e.target.value)}
                    className="w-full sm:w-28 border-2 border-slate-200 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition"
                />
                <button
                    type='submit'
                    className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-5 py-3 rounded-xl shadow-md transition"
                >
                    {editingId === null ? "Add Task" : "Update Task"}
                    {/* Add Task */}
                </button>
            </form>
        </>
    )
}

export default InputBox