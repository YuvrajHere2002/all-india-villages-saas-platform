import { useState } from "react";



import Dashboard from "./components/Dashboard";

import Login from "./components/Login";

import Register from "./components/Register";





function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(

        !!localStorage.getItem("token")

    );





    const [showRegister, setShowRegister] = useState(false);





    if (!isLoggedIn) {

        return (

            <div>

                {

                    showRegister

                    ?

                    <>

                        <Register />



                        <p className="text-center text-white bg-slate-950 pb-10">

                            Already have an account?

                            <button

                                className="ml-2 text-blue-400"

                                onClick={() => setShowRegister(false)}

                            >

                                Login

                            </button>

                        </p>

                    </>

                    :

                    <>

                        <Login setIsLoggedIn={setIsLoggedIn} />



                        <p className="text-center text-white bg-slate-950 pb-10">

                            Don’t have an account?

                            <button

                                className="ml-2 text-green-400"

                                onClick={() => setShowRegister(true)}

                            >

                                Register

                            </button>

                        </p>

                    </>

                }

            </div>

        );

    }





    return <Dashboard />;

}





export default App;