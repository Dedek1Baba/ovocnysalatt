import { Link, useParams } from "react-router-dom";
export default function CreatedBoiler() {
  const {id} = useParams();
  return (
    <>
    <h1>Created Boiler</h1>
    <p>Your boiler was created: <Link to={`/boiler/${id}`}>{id}</Link></p>
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
