"use client";

import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [language, setLanguage] = useState("uz");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        // Bu yerda tilni o'zgartirish bo'yicha qo'shimcha funksiyalarni qo'shishingiz mumkin
    };

    return (
        <header className="fixed top-0 left-0 right-0 py-4 shadow-md  z-30 bg-primary">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-accent"><Link to="/">Abduhamid Botirov</Link></h1>
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="font-bold text-accent appearance-none bg-transparent border border-accent rounded-md px-2 py-1"
                >
                    <option className="bg-primary text-accent" value="uz">Uzb</option>
                    <option className="bg-primary text-accent" value="ru">Рус</option>
                    <option className="bg-primary text-accent" value="eng">Eng</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
