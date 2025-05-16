import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllBoilers } from "../../models/boilers";
import BoilersListCell from "./BoilersListCell";

export default function BoilersList() {
    const [boilers, setBoilers] = useState();
    const [isLoaded, setLoaded] = useState(false);


    const load = async () => {
        const data = await getAllBoilers();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setBoilers(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    if (isLoaded === null){
        return (
            <>
            <p>Boilers not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Boilers are loading...</p>
            </>
        )
    }
  return (
    <>
    <div>Boilers for sale</div>
    {
        boilers.map((boiler, index) =>(
            <BoilersListCell key={index} {...boiler}/>
        ))
    }
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
