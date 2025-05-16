import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { createFurniture } from "../../models/furnitures";

export default function CreateFurniture() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
    const postForm = async () => {
        const data = await createFurniture(formData);
        if (data.status === 201) return navigate(`/created-furniture/${data.payload._id}`);
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
    <h1>Create your furniture dude</h1>
    <form>
        <input type="text" name="name" placeholder="Enter name" onChange={handleInput}/>
        <input type="text" name="seller" placeholder="Enter seller" onChange={handleInput}/>
        <input type="text" name="color" placeholder="Enter color" onChange={handleInput}/>
        <input type="number" name="width" placeholder="Enter width" onChange={handleInput}/>
        <input type="number" name="height" placeholder="Enter height" onChange={handleInput}/>
        <input type="number" name="depth" placeholder="Enter depth" onChange={handleInput}/>
        <input type="number" name="price" placeholder="Enter price" onChange={handleInput}/>
    </form>
    <button onClick={handleButton}>
        Create Furniture
    </button>
    </>
  )
}
