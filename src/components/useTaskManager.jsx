import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useTaskManager = () => {

    const [taskInput, setTaskInput] = useState("");
    const [taskPrice, setTaskPrice] = useState("");
    const [taskList, setTaskList] = useState(() => {
        const savedTask = localStorage.getItem("tasklist");
        return savedTask ? JSON.parse(savedTask) : [];
    });
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Adding Task
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

    return {
        taskInput, setTaskInput,
        taskPrice, setTaskPrice,
        taskList, setTaskList,
        editingId, setEditingId,
        searchTerm, setSearchTerm,
        addTask,
        totalSpent,
        deleteItems,
        editTask,
        filterItems
    }
}

export default useTaskManager