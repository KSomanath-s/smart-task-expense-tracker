import React from 'react'

const SearchTask = ({taskList,searchTerm,setSearchTerm}) => {
  return (
    <>
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
    </>
  )
}

export default SearchTask