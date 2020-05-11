import React from "react";

const Header = () => {
    return (
        <header>
            <div className="inner1720">
                <h1>
                    <img src="/images/icon_logo.png" alt="로고" />
                    Seung-Hyun Y
                </h1>
                <nav className="nav-center">
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
                    <ul>
                        <li>
                            <a href="#;">
                                <img src="/images/icon_blog.png" alt="blog" />
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
        </header>
    );
};

export default Header;
