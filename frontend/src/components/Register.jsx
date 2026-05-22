import { useState } from "react";

import API from "../services/api";





function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");





    const handleRegister = async () => {

        try {

            await API.post(

                "/register",

                {

                    name,

                    email,

                    password

                }

            );





            alert("Registration Successful 🚀");

        }

        catch (error) {

            alert("User Already Exists");

        }

    };





    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-800 p-10 rounded-xl w-[400px]">

                <h1 className="text-4xl text-white font-bold mb-8">

                    Register

                </h1>





                <input

                    type="text"

                    placeholder="Enter Name"

                    className="w-full p-3 mb-4 rounded bg-slate-700 text-white"

                    onChange={(e) => setName(e.target.value)}

                />





                <input

                    type="email"

                    placeholder="Enter Email"

                    className="w-full p-3 mb-4 rounded bg-slate-700 text-white"

                    onChange={(e) => setEmail(e.target.value)}

                />





                <input

                    type="password"

                    placeholder="Enter Password"

                    className="w-full p-3 mb-6 rounded bg-slate-700 text-white"

                    onChange={(e) => setPassword(e.target.value)}

                />





                <button

                    onClick={handleRegister}

                    className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded"

                >

                    Register

                </button>

            </div>

        </div>

    );

}





export default Register;