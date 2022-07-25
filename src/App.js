import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";
import {useState} from "react";

function App() {

    const [searchItem, setSearchItem] = useState('');
    const [select, setSelect] = useState('')

    return (
        <>
            <Header/>
            <Search setSearchItem={setSearchItem} setSelect={setSelect} />
            <Main searchItem={searchItem} select={select} />
        </>
    );
}

export default App;
