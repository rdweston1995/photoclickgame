import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/container";


function App() {
    return (
    <Router>
        <div>
            <Navbar />
            <Header/>
            <Container/>
        </div>
    </Router>
    );
}

export default App;