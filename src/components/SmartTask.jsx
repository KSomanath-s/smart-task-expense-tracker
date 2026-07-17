import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SmartTask = () => {
    const [taskInput, setTaskInput] = useState("");
    const [taskPrice, setTaskPrice] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const addTask = (e) => {
        e.preventDefault();

        // Error Handling
        if (!taskInput.trim() || taskPrice === '') {
            return;
        }
        // Checking Duplicate Item
        const isduplicate = taskList.some((item) =>
            item.name.toLowerCase() === taskInput.trim().toLowerCase() && item.id !== editingId
        );
        if (isduplicate) {
            toast.error("⚠️ Allready task is there in List!!");
            setTaskInput("");
            setTaskPrice("");
            setEditingId(null);
            return
        }
        if (editingId !== null) {
            setTaskList(taskList.map((item) =>
                item.id === editingId ? { ...item, name: taskInput, price: Number(taskPrice) } : item
            ));
            setEditingId(null);
            toast.success("📝 Task Update Successfully!!");
        } else {
            // Adding task Logic
            const newTask = {
                id: Date.now(),
                name: taskInput,
                price: Number(taskPrice)
            };
            setTaskList([...taskList, newTask]);
            toast.success("📝 Task Added Successfully!!");
        }
        setTaskInput("");
        setTaskPrice("")

    }

    // Total Spends
    const totalSpent = taskList.reduce((sum, item) => sum + item.price, 0);
    
    // Delete Items
    const deleteItems = (index) => {
        const deletedItem = taskList.filter((item) => item.id !== index);
        setTaskList(deletedItem);
        toast.info("🗑️ Task deleted successfully!");
        if (editingId !== null) {
            setTaskInput("");
            setTaskPrice("");
            setEditingId(null);
        }
    }

    // Edit Task Logic
    const editTask = (item) => {
        setTaskInput(item.name);
        setTaskPrice(item.price);
        setEditingId(item.id)

    }

    // Filttering Logic
    const filterItems = taskList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center">
                <div className="bg-white p-7 rounded-2xl shadow-xl w-full max-w-xl space-y-6">
                    <h2 className="text-2xl font-black text-center text-slate-800 tracking-wide">
                        📝 Smart Task & Expense Tracker
                    </h2>
                    <div className="flex flex-col py-3 sm:flex-row gap-3">
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
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">💰 Total Spend</p>
                            <p className="text-xl font-black text-blue-900 mt-1">₹{totalSpent}</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
                            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">✅ Total Tasks</p>
                            <p className="text-xl font-black text-emerald-900 mt-1">{taskList.length}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div></div>
                        {
                            taskList.length !== 0 && (
                                <div>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="🔍 Search tasks here..."
                                        className="w-full border-2 border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            )
                        }

                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">📋 Your Tasks List</h3>
                        <ul className="space-y-2 ">
                            {taskList.length === 0 ?
                                <p className='text-center text-gray-400'>No Task Yet,Please Add Task!!</p>
                                :
                                <>
                                    {filterItems.length === 0 ?
                                        <p className="text-center text-red-500 font-medium">Not matching item: {searchTerm}</p>
                                        :
                                        filterItems.map((item) => (
                                            <li
                                                key={item.id}
                                                className="flex justify-between items-center p-4 border-2 border-dotted border-slate-500 rounded-xl bg-slate-50 hover:bg-slate-100/50 transition"
                                            >
                                                <div>
                                                    <p className="font-semibold text-slate-800">{item.name}</p>
                                                    <p className="text-sm font-bold text-emerald-600 mt-0.5">Price: ₹{item.price}</p>
                                                </div>

                                                <div className="flex gap-2">
                                                    {/* <button
                                                    className="bg-white hover:bg-slate-200 border text-slate-700 text-xs font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition"
                                                >
                                                    ➕ ₹100
                                                </button> */}
                                                    <button
                                                        onClick={() => editTask(item)}
                                                        className="bg-white hover:bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition"
                                                    >
                                                        📝 Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteItems(item.id)}
                                                        className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition"
                                                    >
                                                        ❌ Delete
                                                    </button>
                                                </div>
                                            </li>
                                        )
                                        )}
                                </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default SmartTask