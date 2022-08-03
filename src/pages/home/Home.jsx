import React from "react";

//import component 
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import './home.scss';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="home__wrapper">
                <h1 className="home__title">Home</h1>
            </div>
        </div>
    )

}

export default Home;