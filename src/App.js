import './App.css';
import Main from "./commponents/Main";
import About from "./commponents/About";
import React, {useContext, useState} from "react";
export const ShowInfo = React.createContext(null);

function App() {
    const [name,setName]= useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const creatInfo = {
        name,
        surname,
        email,
        age,
        setName,
        setSurname,
        setEmail,
        setAge,
    }
  return (
    <div className="App">
        <ShowInfo.Provider value={creatInfo}>
            <Main />
            <About/>
        </ShowInfo.Provider>
    </div>
  );
}

export default App;
