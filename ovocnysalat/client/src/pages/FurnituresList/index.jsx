import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllFurnitures } from "../../models/furnitures";
import FurnituresListCell from "./FurnituresListCell";

export default function FurnituresList() {
    const [furnitures, setFurnitures] = useState();
    const [isLoaded, setLoaded] = useState(false);


    const load = async () => {
        const data = await getAllFurnitures();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setFurnitures(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    if (isLoaded === null){
        return (
            <>
            <p>Furnitures not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Furnitures are loading...</p>
            </>
        )
    }
  return (
    <>
    <div>Furnitures for sale</div>
    {
        furnitures.map((furniture, index) =>(
            <FurnituresListCell key={index} {...furniture}/>
        ))
    }
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
