import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CotnentArea from "./components/CotnentArea";
import Footer from "./components/Footer";

import "./scss/reset.scss";
import "./scss/common.scss";
import "./scss/index.scss";

const App = () => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        menu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset");
    }, [menu]);

    return (
        <div className={`wrap ${menu ? "active" : ""}`}>
            <Header menu={menu} setMenu={setMenu} />
            <CotnentArea />
            <Footer />
        </div>
    );
};

export default App;
