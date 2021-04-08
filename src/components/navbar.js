import { useState } from "react";

export const Navbar = () => {

    const lightIcon = <i className="far fa-sun"></i>;
    const darkIcon = <i className="fas fa-moon"></i>;

    const [lightMode, setLightMode] = useState(true);
    const [toggler, setToggler] = useState(lightIcon);

    const toggleDarkMode = () => {
        if(lightMode) {
            document.documentElement.classList.add('dark');
            setToggler(darkIcon);
            setLightMode(false);
        }
        if(!lightMode) {
            document.documentElement.classList.remove('dark');
            setToggler(lightIcon);
            setLightMode(true);
        }
    };


    return (
        <div className="font-medium ml-auto">
            <button onClick={ toggleDarkMode }>{ toggler }</button>
        </div>
    );

};
