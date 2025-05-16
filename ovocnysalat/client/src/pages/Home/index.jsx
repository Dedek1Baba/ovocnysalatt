import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <h1>Ovocný Saláty</h1>
      <Link to={"/create-human"}>
        <button>Create hooman</button>
      </Link>
      <Link to={"/people"}>
        <button>People for sale</button>
      </Link>
    </>
  )
}
