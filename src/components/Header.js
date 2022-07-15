import React from "react";
function Header({onDarkModeClick,isDarkMode}){
    console.log(onDarkModeClick)
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick} >{isDarkMode?"Dark Mode":"Light Mode"}</button>
    </header>
    )
}
export default Header;