import React from "react";

function FormComponent({ formData, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Sample form</h1>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="age"
                value={formData.age}
                placeholder="Age"
                onChange={handleChange}
            />
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                />
                Male
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                />
                Female
            </label>
            <br />
            <select name="destination" value={formData.destination} onChange={handleChange}>
                <option value="">-- Please Choose a destination --</option>
                <option value="newyork">New York</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
            </select>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="nutsFree"
                    checked={formData.dietaryRestrictions.nutsFree}
                    onChange={handleChange}
                />
                Nuts free
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="lactoseFree"
                    checked={formData.dietaryRestrictions.lactoseFree}
                    onChange={handleChange}
                />
                Lactose free
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="vegan"
                    checked={formData.dietaryRestrictions.vegan}
                    onChange={handleChange}
                />
                Vegan
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
