import { Link, useParams } from "react-router-dom";
export default function CreatedProgrammer() {
  const {id} = useParams();
  return (
    <>
    <h1>Created Programmer</h1>
    <p>Your programmer was created: <Link to={`/programmer/${id}`}>{id}</Link></p>
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
