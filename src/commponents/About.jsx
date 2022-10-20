import React, {useContext} from 'react';
import './css/about.css'
import UserComponent from "./UserComponeent";
import {ShowInfo} from "../App";

function About ()   {
    const userInfo = useContext(ShowInfo)
    return (
        (userInfo.name?<UserComponent/>:null)
    );
}

export default About;