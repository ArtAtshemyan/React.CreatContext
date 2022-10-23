import React, {useContext, useEffect, useState} from "react";
import {ShowInfo} from "../App";
import './css/element.css';
import background from './css/img/formBacgundImg.jpg'
function Element () {
    const createInfoBase = useContext(ShowInfo);
    const [inputName,setName]= useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const [inputs,setInputs] = useState(false);
    useEffect(()=>{
        createInfoBase.setSateInput(inputs);
    },[inputs])
    return(
        <div className='formBlock' style={{ backgroundImage: `url(${background})` }}>
            <form>
                <label>Name</label>
                <input placeholder='Franc' onFocus={()=>{setInputs(false)}} className='inputName' value={inputName} onChange={(e)=>{setName(e.target.value)}}/>
                <label>Sure Name</label>
                <input placeholder='Backembouer' className='inputName' value={surname} onChange={(e)=>{setSurname(e.target.value)}}/>
                <label>Email</label>
                <input placeholder='franc@gmail.com' className='inputName' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Date</label>
                <input className='inputData' type='date' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    if (inputName && surname && email && age){
                        setInputs(true);
                        createInfoBase.setName(inputName);
                        createInfoBase.setSurname(surname);
                        createInfoBase.setEmail(email);
                        createInfoBase.setAge(age);
                        setName('');
                        setSurname('');
                        setEmail('');
                        setAge('');
                    }
                }}>+</button>
            </form>
        </div>

    )
}
export default Element;