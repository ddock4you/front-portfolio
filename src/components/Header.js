import React, { useEffect } from "react";

const Header = ({ menu, setMenu }) => {
    useEffect(() => {
        const navCenterBtn = document.querySelectorAll("nav ul li a");
        navCenterBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                setMenu(false);
            });
        });
    });
// a
    return (
        <header>
            <div className="inner1720">
                <h1 className="logo">
                    <img src="/images/icon_logo.png" alt="로고" />
                    Seung-Hyun.Y
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
                                <a href="#front-works">Front-end works</a>
                            </li>
                            <li>
                                <a href="#publish-works">Publishing works</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-right">
                        <h2 className="hide">navigation-right</h2>
                        <ul>
                            <li>
                                <a
                                    href="https://ddock4you.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/icon_blog.png"
                                        alt="blog"
                                    />
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ddock4you"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/icon_github.png"
                                        alt="github"
                                    />
                                    Github
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