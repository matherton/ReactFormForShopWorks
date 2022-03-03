import mockData from "../data/mockData";

const Select = (props) => {
  const option1 = mockData.questions[1].fields[2].options[0];
  const option2 = mockData.questions[1].fields[2].options[1];
  return (
    <>
      <select id="country-select">
        <option value="">--Please choose a Country--</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
    </>
  );
};
export default Select;
