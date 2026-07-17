import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputBox from './InputBox';
import SearchTask from './SearchTask';
import TotalSpendTask from './TotalSpendTask';
import ItemBox from './ItemBox';

const SmartTask = () => {
    const [taskInput, setTaskInput] = useState("");
    const [taskPrice, setTaskPrice] = useState("");
    const [taskList, setTaskList] = useState(() => {
        const savedTask = localStorage.getItem("tasklist");
        return savedTask ? JSON.parse(savedTask) : [];
    });
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

    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(taskList))
    }, [taskList])

    return (
        <>
            <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center">
                <div className="bg-white p-7 rounded-2xl shadow-xl w-full max-w-xl space-y-6">
                    <h2 className="text-2xl font-black text-center text-slate-800 tracking-wide">
                        📝 Smart Task & Expense Tracker
                    </h2>
                    <div className="flex flex-col py-3 sm:flex-row gap-3">
                        <InputBox
                            addTask={addTask}
                            taskInput={taskInput}
                            setTaskInput={setTaskInput}
                            taskPrice={taskPrice}
                            setTaskPrice={setTaskPrice}
                            editingId={editingId}
                        />
                    </div>
                    <TotalSpendTask
                        totalSpent={totalSpent}
                        taskList={taskList}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <div></div>
                        <SearchTask
                            taskList={taskList}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">📋 Your Tasks List</h3>
                        <ItemBox
                            taskList={taskList}
                            filterItems={filterItems}
                            searchTerm={searchTerm}
                            editTask={editTask}
                            deleteItems={deleteItems}
                        />
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