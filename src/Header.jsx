import React from "react";
import Logo from "./logo.svg"

const Header = () => {
    return(
    <>
        <div className="header">
            <img src={Logo} alt="logo" className="logo" />
            <h1>Ronak Keep</h1>
        </div>
    </>
    )
}

export default Header;