import React from 'react'

const TotalSpendTask = ({totalSpent,taskList}) => {
    return (
        <>
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
        </>
    )
}

export default TotalSpendTask