// src/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-black text-slate-800 mb-4">
                🚀 Welcome to Smart Tracker
            </h1>
            <p className="text-slate-600 mb-6 max-w-md">
                Manage your daily tasks and track your expenses efficiently in one place.
            </p>
            <Link to='/tasks'
                className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                Get Started
            </Link>
        </div>
    );
};

export default Home;