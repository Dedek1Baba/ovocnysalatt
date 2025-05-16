import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { createBoiler } from "../../models/boilers";

export default function CreateBoiler() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
    const postForm = async () => {
        const data = await createBoiler(formData);
        if (data.status === 201) return navigate(`/created-boiler/${data.payload._id}`);
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleButton = (e) => {
       e.preventDefault();
       postForm();
    }

  return (
    <>
    <h1>Create your boiler dude</h1>
    <form>
        <input type="text" name="name" placeholder="Enter name" onChange={handleInput}/>
        <input type="number" name="power" placeholder="Enter power" onChange={handleInput}/>
        <input type="number" name="heating" placeholder="Enter heating" onChange={handleInput}/>
        <input type="number" name="price" placeholder="Enter price" onChange={handleInput}/>
    </form>
    <button onClick={handleButton}>
        Create Boiler
    </button>
    </>
  )
}
