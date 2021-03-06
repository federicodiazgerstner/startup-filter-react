import Card from "../Card";
import data from "../../data/startups.json";

function List(props) {
  /*const startups = [
    {
      name: "courseit",
      description:
        "Aprender programación es un camino, CourseIt te acompaña en cada paso.",
      img_url:
        "data:image/png;base64,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",
    },
    {
      name: "endava",
      description:
        "We are reimagining relationship between people and technology.",
      img_url:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQFQGjXwWDU2UA/company-logo_200_200/0/1519856330168?e=2159024400&v=beta&t=xNLQwiRTS7EjjJ9KoH9g-1KQVl955-Q2X17JfL1Fszo",
    },
  ]; */

  return (
    <div className="card-container">
      {data
        .filter((startup) =>
          startup.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .map((startup, key) => {
          return <Card data={startup} key={key} />;
        })}
    </div>
  );
}

export default List;
