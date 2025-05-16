import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getFurnitureById } from "../../models/furnitures"


export default function Furniture() {
    const {id} = useParams();
    const [furniture, setFurniture] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getFurnitureById(id);
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setFurniture(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    /*
    if (isLoaded === null){
        return (
            <>
            <p>Furniture not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Furniture is loading...</p>
            </>
        )
    }
    */
  return (
    <h1>Your furniture</h1>
  )
}
