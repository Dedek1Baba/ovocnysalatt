import { Link } from "react-router-dom";

export default function FurnituresListCell(props) {
  return (
    <>
      <Link to={`/furniture/${props._id}`}>
        <p>{props.name}</p>
      </Link>
    </>
  );
}
