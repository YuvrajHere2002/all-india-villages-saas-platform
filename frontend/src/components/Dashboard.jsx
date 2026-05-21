import { useEffect, useState } from 'react';

import API from '../services/api';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';



function Dashboard() {

    const [states, setStates] = useState([]);

    const [search, setSearch] = useState('');

    const [villages, setVillages] = useState([]);




    useEffect(() => {

        fetchStates();

    }, []);




    const fetchStates = async () => {

        try {

            const response = await API.get('/states');

            setStates(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    const searchVillages = async () => {

        try {

            const response = await API.get(

                `/search?q=${search}`

            );

            setVillages(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    const chartData = [

        {
            name: 'Gujarat',
            villages: 32000
        },

        {
            name: 'Maharashtra',
            villages: 45000
        },

        {
            name: 'UP',
            villages: 50000
        }

    ];




    return (

        <div className="min-h-screen bg-gray-900 text-white p-8">




            <h1 className="text-4xl font-bold mb-8">

                All India Villages Dashboard 🚀

            </h1>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">




                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold mb-2">

                        Total States

                    </h2>

                    <p className="text-3xl font-bold text-blue-400">

                        {states.length}

                    </p>

                </div>




                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold mb-2">

                        Active APIs

                    </h2>

                    <p className="text-3xl font-bold text-green-400">

                        5

                    </p>

                </div>




                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold mb-2">

                        Database

                    </h2>

                    <p className="text-3xl font-bold text-purple-400">

                        Connected

                    </p>

                </div>

            </div>




            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">

                <h2 className="text-2xl font-bold mb-4">

                    States Data

                </h2>




                <table className="w-full border-collapse">

                    <thead>

                        <tr className="bg-gray-700">

                            <th className="p-3 text-left">

                                ID

                            </th>

                            <th className="p-3 text-left">

                                State Name

                            </th>

                        </tr>

                    </thead>




                    <tbody>

                        {

                            states.map((state) => (

                                <tr
                                    key={state.id}
                                    className="border-b border-gray-700"
                                >

                                    <td className="p-3">

                                        {state.id}

                                    </td>

                                    <td className="p-3">

                                        {state.state_name}

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>




            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">

                <h2 className="text-2xl font-bold mb-4">

                    Search Villages

                </h2>




                <div className="flex gap-4 mb-6">

                    <input
                        type="text"
                        placeholder="Enter village name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 p-3 rounded-lg bg-gray-700 text-white outline-none"
                    />




                    <button
                        onClick={searchVillages}
                        className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
                    >

                        Search

                    </button>

                </div>




                <div className="space-y-4">

                    {

                        villages.map((village) => (

                            <div
                                key={village.id}
                                className="bg-gray-700 p-4 rounded-xl"
                            >

                                <h3 className="text-xl font-semibold">

                                    {village.village_name}

                                </h3>




                                <p className="text-gray-300">

                                    {village.subdistrict_name},
                                    {' '}
                                    {village.district_name},
                                    {' '}
                                    {village.state_name}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>




            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold mb-6">

                    Analytics Dashboard

                </h2>




                <ResponsiveContainer
                    width="100%"
                    height={350}
                >

                    <BarChart data={chartData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="villages"
                            fill="#3B82F6"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}



export default Dashboard;