import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "../whats-happening";
import "./index.css";
function HomeScreen() {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList />
        </>
    );
};
export default HomeScreen;