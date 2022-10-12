import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const Stat = () => {
    const [quize, setQuize] = useState([]);


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data =>
                setQuize(data.data))
    }, [])
    return (
        <div>
            <p>this is stat</p>
            <LineChart
                width={450}
                height={400}
                data={quize}
                margin={{

                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" type="category" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};
export default Stat;