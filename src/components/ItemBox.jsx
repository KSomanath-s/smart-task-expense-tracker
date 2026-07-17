import React from 'react'

const ItemBox = ({taskList,filterItems,searchTerm,editTask,deleteItems}) => {
    return (
        <>
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
        </>
    )
}

export default ItemBox