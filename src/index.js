import { useEffect, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

import axios from "axios";

export default function TestRequest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TestRequest />
    </React.StrictMode>
);

