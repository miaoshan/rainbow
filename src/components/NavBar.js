import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const navStyle = {
        color: "white"
    };

    return (
        <nav className="NavBar">
            <Link style={navStyle} to="/">
                <h3>
                    <img
                        className="homeImage"
                        src="https://png.pngtree.com/element_our/20190524/ourlarge/pngtree-rainbow-gay-color-material-after-rainbow-sun-rain-image_1104603.jpg"
                        alt="Home Image"
                
                    />
                </h3>
            </Link>

            <ul className="nav-links">
                <Link style={navStyle} to="/books">
                    <li className="navButtons">Books</li>
                </Link>
                <Link style={navStyle} to="/orders">
                    <li className="navButtons">Orders</li>
                </Link>
                <Link style={navStyle} to="/wishlists">
                    <li className="navButtons">&hearts; Wish List</li>



                </Link>
                <Link style={navStyle} to="/cart">
                    <li>
                        <img
                            className="navImage"
                            src="https://i.imgur.com/gphuW4V.png"
                            alt="Shopping Cart"
                        />
                    </li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>
                        <img
                            className="navImage"
                            src="https://i.imgur.com/gkemPmm.png"
                            alt="Login Key"
                        />
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
