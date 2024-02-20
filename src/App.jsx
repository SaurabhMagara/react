import React, { createContext, useContext } from "react";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteApp from "./NoteApp";
import AgeCalc from "./AgeCalc";
import Ctime from "./Ctime";
import To from './TodoList/To';
import Calculator from './Calculator/Calculator';
import Meter from './Meter';
import Search from "./Search";
import Qoutes from "./Qoutes";

const App = () => {

    return (
        <>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" Component={NoteApp} />
                <Route exact path="/agecalc" Component={AgeCalc} />
                <Route exact path="/to" Component={To} />
                <Route exact path="/qoutes" Component={Qoutes}/>
                <Route exact path="/calculator" Component={Calculator} />
                <Route exact path="/search" Component={Search}/>
            </Routes>
        </BrowserRouter>

        </>
    )
}

export default App;