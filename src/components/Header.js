import React, { useState } from "react";

const Header = ({ menu, setMenu }) => {
    return (
        <header>
            <div className="inner1720">
                <h1 className="logo">
                    <img src="/images/icon_logo.png" alt="로고" />
                    Seung-Hyun Y
                </h1>
                <button
                    className={`nav-button ${menu ? "active" : ""}`}
                    onClick={() => {
                        setMenu(!menu);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav ${menu ? "active" : ""}`}>
                    <nav className="nav-center">
                        <h2 className="hide">navigation-center</h2>
                        <ul>
                            <li>
                                <a href="#;">Front-end works</a>
                            </li>
                            <li>
                                <a href="#;">Publishing works</a>
                            </li>
                            <li>
                                <a href="#;">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-right">
                        <h2 className="hide">navigation-right</h2>
                        <ul>
                            <li>
                                <a href="#;">
                                    <img
                                        src="/images/icon_blog.png"
                                        alt="blog"
                                    />
                                    blog
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <img
                                        src="/images/icon_github.png"
                                        alt="github"
                                    />
                                    github
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
