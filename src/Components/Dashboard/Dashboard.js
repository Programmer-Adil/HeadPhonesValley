import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { LineChart, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 pt-5">
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </LineChart>
                </div>
                <div className="col-md-6 pt-5">
                    <BarChart width={400} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;