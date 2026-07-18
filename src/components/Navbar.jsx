import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = ({ isActive }) => isActive ? "text-slate-900 border-b-2 border-slate-900 pb-1" : "text-slate-500 hover:text-slate-800 transition";
    return (
        <>
            <nav className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center px-8 border-b border-slate-200">
                {/* 🎯 डाव्या बाजूला ॲपचा लोगो/नाव */}
                <Link to='/' className="text-xl font-black text-slate-800 tracking-wide">
                    📊 TrackerApp
                </Link>
                <div className="flex gap-6 font-bold text-slate-600">
                    <NavLink to='/' className={activeStyle}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/tasks"
                        className={activeStyle}>
                        Tasks
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={activeStyle}
                    >
                        About
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar