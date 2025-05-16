import { Link, useParams } from "react-router-dom";
export default function CreatedFurniture() {
  const {id} = useParams();
  return (
    <>
    <h1>Created Furniture</h1>
    <p>Your furniture was created: <Link to={`/furniture/${id}`}>{id}</Link></p>
    <Link to={"/"}>
    <button>Go home</button>
    </Link>
    </>
  )
}
