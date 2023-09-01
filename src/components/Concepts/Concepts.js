import "./Concepts.css";
import ConceptsItem from "./ConceptsItem";
import Card from "../UI/Card";

const Concepts = (props) => {
  return (
    <Card className="concepts">
      <ConceptsItem
        title={props.concepts[0].title}
        image={props.concepts[0].image}
        description={props.concepts[0].description}
      />
      <ConceptsItem
        title={props.concepts[1].title}
        image={props.concepts[1].image}
        description={props.concepts[1].description}
      />
      <ConceptsItem
        title={props.concepts[2].title}
        image={props.concepts[2].image}
        description={props.concepts[2].description}
      />
    </Card>
  );
};

export default Concepts;