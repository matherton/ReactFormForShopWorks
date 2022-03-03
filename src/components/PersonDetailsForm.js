import { useState } from "react";
import mockData from "../data/mockData";

import Input from "./Input";
import WhereDoYouLive from "./WhereDoYouLive";
import React from "react";

const title1 = mockData.questions[0].title;
const title2 = mockData.questions[1].title;

const PersonDetailsForm = () => {
  const [feildData, setFieldData] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  /* Alternate way to use state in 1 object 
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    PhoneNumber: ""
  });*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`
    firstName: ${event.target[0].value},
    lastName: ${event.target[1].value},
    country: ${event.target[6].value},
    email: ${event.target[2].value},
    phoneNumber: ${event.target[3].value},
    postCode: ${event.target[5].value},
    streetAddress: ${event.target[4].value}
    `);
  };

  return (
    <div className="form-frame">
      <form className="person-details" onSubmit={handleSubmit}>
        <h3>{title1}</h3>
        <Input
          type="text"
          value={feildData}
          onChange={(e) => setFieldData(e.target.value)}
          name="firstName"
        />
        <h3>{title2}</h3>
        <WhereDoYouLive
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonDetailsForm;
