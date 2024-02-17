import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import Qoutes from "./Qoutes";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Qoutes/>);