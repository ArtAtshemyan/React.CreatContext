import React,{useContext} from "react";
import {ShowInfo} from "../App";
import './css/userComponents.css'

function UserComponent (){
    let value = useContext(ShowInfo);
    return (
        <div className='userBlock'>
            <div className='userList'>
                <h1>User Information</h1>
                <span className='spanS'>Your Name/ {value.name.toUpperCase()}</span>
                <span className='spanS'>Your Surname/  {value.surname.toUpperCase()}</span>
                <span className='spanS'>Your Email/ {value.email.toLowerCase()}</span>
                <span className='spanS'>Your date of birth/ {(new Date(value.age).getFullYear())}</span>
            </div>
        </div>
    );
}
export default UserComponent;