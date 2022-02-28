import React, { useState } from "react";
export default function Form() {
  const [formFields, setFormFields] = useState([
    {
      firstName: "",
      lastName: ""
    }
  ]);
  function handleChange(event, index) {
    let data = [...formFields];
    const { name, value } = event.target;
    data[index][name] = value;
    setFormFields(data);
  }
  function remove(index) {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  }
  function handleAdd() {
    let object = {
      firstName: "",
      lastName: ""
    };
    setFormFields([...formFields, object]);
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formFields);
    setFormFields([{ firstName: "", lastName: "" }]);
  }

  return (
    <div>
      {formFields.map((item, index) => {
        return (
          <form key={index} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={item.firstName}
              onChange={(event) => handleChange(event, index)}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={item.lastName}
              onChange={(event) => handleChange(event, index)}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </form>
        );
      })}
      <button onClick={handleAdd}> Add items</button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
