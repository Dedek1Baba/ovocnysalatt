import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { createProgrammer } from "../../models/programmers";

export default function CreateProgrammer() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
    const postForm = async () => {
        const data = await createProgrammer(formData);
        if (data.status === 201) return navigate(`/created-programmer/${data.payload._id}`);
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
    <h1>Create your programmer dude</h1>
    <form>
        <input type="text" name="name" placeholder="Enter name" onChange={handleInput}/>
        <input type="text" name="surname" placeholder="Enter surname" onChange={handleInput}/>
        <input type="text" name="programming language" placeholder="Enter programming language" onChange={handleInput}/>
        <input type="number" name="pay" placeholder="Enter pay" onChange={handleInput}/>
    </form>
    <button onClick={handleButton}>
        Create Programmer
    </button>
    </>
  )
}
