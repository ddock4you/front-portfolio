import React from "react";
import Header from "./components/Header";
import CotnentArea from "./components/CotnentArea";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="wrap">
            <Header />
            <CotnentArea />
            <Footer />
        </div>
    );
};

export default App;
