import React, { useState } from "react";

function ControlComponent() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [inputValue, setInputValue] = useState(initialValue);

  function habdleData(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function habdleSubmit(e) {
    e.preventDefault();
    if (!inputValue.firstName || !inputValue.lastName || !inputValue.email) {
      return console.log("all fields are mandetory");
    }
    console.log(inputValue);
  }
  return (
    <form onSubmit={habdleSubmit}>
      <input type="text" name="firstName" onChange={habdleData} />
      <input type="text" name="lastName" onChange={habdleData} />
      <input type="email" name="email" onChange={habdleData} />
      <button>Submit</button>
    </form>
  );
}

export default ControlComponent;
