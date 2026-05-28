import React from "react";
import logo from "../assets/logo.png";


function Header(){
    return(
        <>
              {/* LOGO */}
      <div className="absolute top-6 left-6">
        <img
          src={logo}
          alt="logo"
          className="w-[120px]"
        />
      </div>
        </>
    );
}

export default Header;
