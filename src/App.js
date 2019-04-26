import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Cockpit from "./containers/Cockpit/Cockpit";
//import { MasterLocalStorage } from "./Storage/LocalStorage/LocalStorage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Cockpit />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
