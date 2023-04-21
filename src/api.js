import { useEffect, useState } from "react";
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
