import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProgrammers } from "../../models/programmers";
import ProgrammersListCell from "./ProgrammersListCell";

export default function ProgrammersList() {
    const [programmers, setProgrammers] = useState();
    const [isLoaded, setLoaded] = useState(false);


    const load = async () => {
        const data = await getAllProgrammers();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setProgrammers(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    if (isLoaded === null){
        return (
            <>
            <p>Programmers not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Programmers are loading...</p>
            </>
        )
    }
  return (
    <>
    <div>Programmers for sale</div>
    {
        programmers.map((programmer, index) =>(
            <ProgrammersListCell key={index} {...programmer}/>
        ))
    }
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
