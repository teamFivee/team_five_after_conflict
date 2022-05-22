import React, { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [userSession,setUsersession]=useState({})
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        getSessiom();
    }, []);


    const getSessiom=()=>{
    
        if(localStorage.getItem("session"))
        {
            let user = JSON.parse(localStorage.getItem("session"))[0]
            setUsersession(()=>user)
        }
        else{
            setUsersession(()=>false)
        }
    }

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">

                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        Team Five
                        <i class="fab fa-typo3" />
                    </Link>
                    <li className="navbar-logo">
                            <Link
                                to="/addGame"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                               AddNewGame
                            </Link>
                        </li>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/pannel"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                               bascket
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        {userSession?<div className="userAvatar"><img src={userSession.img}/> <p>{userSession.userName}</p> <p>{userSession.balance} DT</p> </div>:<><li className="nav-item">
                            <Link
                                to="/login"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                LOGIN
                            </Link>
                        </li></>}

                    </ul>
                    {button && (
                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
