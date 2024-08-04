import React, { useState } from "react";
import FormComponent from "./FormComponent";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    },
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        dietaryRestrictions: {
          ...prevFormData.dietaryRestrictions,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const queryParameters = new URLSearchParams();

    for (const [key, value] of Object.entries(formData)) {
      if (key === "dietaryRestrictions") {
        for (const [restrictionKey, restrictionValue] of Object.entries(value)) {
          if (restrictionValue) {
            queryParameters.append(restrictionKey, "on");
          }
        }
      } else {
        queryParameters.append(key, value);
      }
    }

    const queryString = queryParameters.toString();
    const url = `http://localhost:3000/?${queryString}`;
    window.location.href = url;
  }

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>Your name: {`${formData.firstName} ${formData.lastName}`}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free: {formData.dietaryRestrictions.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free: {formData.dietaryRestrictions.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal: {formData.dietaryRestrictions.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;
