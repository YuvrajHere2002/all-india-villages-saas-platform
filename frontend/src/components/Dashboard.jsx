import { useEffect, useState } from "react";

import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer

} from "recharts";



import API from "../services/api";





function Dashboard() {

    const [analytics, setAnalytics] = useState({

        total_states: 0,

        total_districts: 0,

        total_subdistricts: 0,

        total_villages: 0

    });





    const [search, setSearch] = useState("");



    const [villages, setVillages] = useState([]);





    useEffect(() => {

        fetchAnalytics();

    }, []);





    const fetchAnalytics = async () => {

        try {

            const response = await API.get("/analytics");





            setAnalytics(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };





    const searchVillages = async (value) => {

        try {

            setSearch(value);





            if (value.trim() === "") {

                setVillages([]);

                return;

            }





            const response = await API.get(

                `/search?q=${value}&page=1`

            );





            setVillages(response.data.results);

        }

        catch (error) {

            console.log(error);

        }

    };





    const chartData = [

        {

            name: "States",

            count: Number(analytics.total_states)

        },

        {

            name: "Districts",

            count: Number(analytics.total_districts)

        },

        {

            name: "Subdistricts",

            count: Number(analytics.total_subdistricts)

        },

        {

            name: "Villages",

            count: Number(analytics.total_villages)

        }

    ];





    return (

        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-5xl font-bold mb-10">

                All India Villages Dashboard 🚀

            </h1>





            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                <div className="bg-slate-800 p-6 rounded-2xl">

                    <h2 className="text-2xl font-bold">

                        States

                    </h2>



                    <p className="text-4xl mt-4 text-blue-400">

                        {analytics.total_states}

                    </p>

                </div>





                <div className="bg-slate-800 p-6 rounded-2xl">

                    <h2 className="text-2xl font-bold">

                        Districts

                    </h2>



                    <p className="text-4xl mt-4 text-green-400">

                        {analytics.total_districts}

                    </p>

                </div>





                <div className="bg-slate-800 p-6 rounded-2xl">

                    <h2 className="text-2xl font-bold">

                        Subdistricts

                    </h2>



                    <p className="text-4xl mt-4 text-yellow-400">

                        {analytics.total_subdistricts}

                    </p>

                </div>





                <div className="bg-slate-800 p-6 rounded-2xl">

                    <h2 className="text-2xl font-bold">

                        Villages

                    </h2>



                    <p className="text-4xl mt-4 text-pink-400">

                        {analytics.total_villages}

                    </p>

                </div>

            </div>





            <div className="bg-slate-800 p-6 rounded-2xl mb-10">

                <h2 className="text-4xl font-bold mb-6">

                    Search Villages

                </h2>





                <input

                    type="text"

                    placeholder="Search village..."

                    value={search}

                    onChange={(e) =>

                        searchVillages(e.target.value)

                    }

                    className="w-full p-4 rounded-xl bg-slate-700 text-white"

                />





                <div className="mt-6 space-y-4">

                    {

                        villages.map((village) => (

                            <div

                                key={village.id}

                                className="bg-slate-700 p-4 rounded-xl"

                            >

                                <h3 className="text-xl font-bold">

                                    {village.village_name}

                                </h3>



                                <p>

                                    {

                                        village.subdistrict_name

                                    }

                                    ,

                                    {" "}

                                    {

                                        village.district_name

                                    }

                                    ,

                                    {" "}

                                    {

                                        village.state_name

                                    }

                                    ,

                                    India

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>





            <div className="bg-slate-800 p-6 rounded-2xl">

                <h2 className="text-4xl font-bold mb-6">

                    Analytics Dashboard

                </h2>





                <ResponsiveContainer

                    width="100%"

                    height={400}

                >

                    <BarChart data={chartData}>

                        <XAxis dataKey="name" />



                        <YAxis />



                        <Tooltip />



                        <Bar

                            dataKey="count"

                            fill="#3B82F6"

                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}





export default Dashboard;