import { useState } from "react";

import API from "../services/api";





function Login({ setIsLoggedIn }) {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");





    const handleLogin = async () => {

        try {

            const response = await API.post(

                "/login",

                {

                    email,

                    password

                }

            );





            localStorage.setItem(

                "token",

                response.data.token

            );





            alert("Login Successful 🚀");





            setIsLoggedIn(true);

        }

        catch (error) {

            alert("Invalid Credentials");

        }

    };





    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-800 p-10 rounded-xl w-[400px]">

                <h1 className="text-4xl text-white font-bold mb-8">

                    Login

                </h1>





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

                    onClick={handleLogin}

                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"

                >

                    Login

                </button>

            </div>

        </div>

    );

}





export default Login;