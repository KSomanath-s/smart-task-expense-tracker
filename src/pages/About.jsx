// src/About.jsx
import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
                ℹ️ About This App
            </h1>
            <p className="text-slate-600 max-w-sm">
                This app is built using React, Tailwind CSS, Custom Hooks, and React Router to provide a seamless user experience.
            </p>
        </div>
    );
};

export default About;