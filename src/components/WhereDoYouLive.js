import mockData from "../data/mockData";
import Select from "./Select";
const WhereDoYouLive = (props) => {
  const isDropDown = mockData.questions[1].fields[2].label;
  console.log("isDroDown", isDropDown);
  return (
    <div>
      {mockData.questions[1].fields.map((question) => (
        <>
          <label htmlFor={props.label} key={question.label}>
            {question.label}
          </label>
          {question.label === "Country" ? (
            <Select />
          ) : (
            <input type={props.type} onChange={props.onChange} />
          )}
        </>
      ))}
    </div>
  );
};

export default WhereDoYouLive;
