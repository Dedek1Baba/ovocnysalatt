import { Link } from "react-router-dom";

export default function BoilersListCell(props) {
  return (
    <>
      <Link to={`/boiler/${props._id}`}>
        <p>{props.name}</p>
      </Link>
    </>
  );
}
