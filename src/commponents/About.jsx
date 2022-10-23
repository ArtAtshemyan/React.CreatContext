import React, {useContext} from 'react';
import './css/about.css'
import UserComponent from "./UserComponeent";
import {ShowInfo} from "../App";

function About ()   {
    const userInfo = useContext(ShowInfo)
    console.log(userInfo.sateInput);
    return (
        (userInfo.sateInput===true?<UserComponent/>:null)
    );
}
export default About;