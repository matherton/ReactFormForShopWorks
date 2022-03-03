import mockData from "../data/mockData";

const Input = (props) => {
  return (
    <div>
      {mockData.questions[0].fields.map((question, index) => (
        <>
          <label htmlFor={props.htmlFor} key={question.label}>
            {question.label}
          </label>
          <input type={props.type} onChange={props.onChange} />
        </>
      ))}
    </div>
  );
};

export default Input;
