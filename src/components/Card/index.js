import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;
  const link = data.name;
  return (
    <Link to={`/startup/${link}`} className="card-link">
      <div className="card" key="props.key">
        <div className="img-container">
          <img src={data.img_url} alt={data.name} />
        </div>
        <div className="data-container">
          <h1>{data.name.toUpperCase()}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
