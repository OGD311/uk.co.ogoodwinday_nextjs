import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function DarkModeToggle(){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) { html.classList.add("dark"); }
        else { html.classList.remove("dark"); }
    }, [darkMode]);

    return (
        <button onClick={() => { setDarkMode(!darkMode); }} className="cursor-pointer z-50 fixed top-3 right-8 max-md:bg-hover dark:max-md:bg-hover-dark p-2 rounded-lg">
            {darkMode ? <IoSunny className="w-8 h-8" /> : <IoMoon className="w-8 h-8" />}
        </button>
    )
}