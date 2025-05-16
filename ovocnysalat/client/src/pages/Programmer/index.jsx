import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProgrammerById } from "../../models/programmers"


export default function Programmer() {
    const {id} = useParams();
    const [programmer, setProgrammer] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getProgrammerById(id);
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200){
            setLoaded(true);
            setProgrammer(data.payload);
        }
    }
    useEffect(() => {
        load();
    }, []);
    /*
    if (isLoaded === null){
        return (
            <>
            <p>Programmer not found</p>
            </>
        )
    }
    if (!isLoaded){
        return (
            <>
            <p>Programmer is loading...</p>
            </>
        )
    }
    */
  return (
    <h1>Your programmer</h1>
  )
}
