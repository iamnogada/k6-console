import React, { useState } from "react";
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 1.5rem;
`;
// Define a styled component for input fields
const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  border-radius: 0.25rem;
`;

// Define a styled component for error messages
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

// Define a styled component for the submit button
const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
function ColorSetUI() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
    }
  };
  return (
    <section className="m-2 p-2">
      <h2 className="text-2xl">Color Set UI</h2>
      <div className="flex flex-row">
        <div className="w-full max-w-sm mx-auto">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-primary-500 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.username ? "border-warning-200" : "border-primary-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic">{errors.username}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-primary-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.password ? "border-warning-200" : "border-primary-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-primary-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <FormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            hasError={!!errors.username}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            hasError={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
        <div>
          <SubmitButton type="submit">Register</SubmitButton>
        </div>
      </form>
    </FormContainer>
      </div>
    </section>
  );
}

export default ColorSetUI;
