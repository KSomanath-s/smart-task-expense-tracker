import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputBox from './InputBox';
import SearchTask from './SearchTask';
import TotalSpendTask from './TotalSpendTask';
import ItemBox from './ItemBox';
import useTaskManager from './useTaskManager';

const SmartTask = () => {

    const {
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
    } = useTaskManager();


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