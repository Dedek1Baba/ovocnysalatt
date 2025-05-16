import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getBoilerById } from "../../models/boilers"


export default function Boiler() {
    const {id} = useParams();
    const [boiler, setBoiler] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getBoilerById(id);
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setBoiler(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    /*
    if (isLoaded === null){
        return (
            <>
            <p>Boiler not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Boiler is loading...</p>
            </>
        )
    }
    */
  return (
    <h1>Your boiler</h1>
  )
}
