import React from "react";
function Header({onDarkModeClick,appTheme}){
    console.log(onDarkModeClick)
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick} >{appTheme?"Dark Mode":"Light Mode"}</button>
    </header>
    )
}
export default Header;