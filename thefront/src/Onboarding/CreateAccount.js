import React, { useState } from "react";
import PasswordErrorText from "../Components/Onboarding/PasswordErrorText";
import * as FormValidation from "../utils/formChecks";
import PasswordField from "../Components/Onboarding/PasswordField";
import ErrorDisplay from "../Components/misc/ErrorDisplay";
import { auth,db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.target.checkValidity();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    async function createStudentUser(uid, userData) {
      try {
        const userRef = doc(db, "student-users", uid); // Use the UID as the document ID
        await setDoc(userRef, userData);
        console.log("User created successfully!");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }

    e.preventDefault();
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log(user);

      try {
        setError(null);
        const userData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          uid: user.uid,
        };
        await createStudentUser(user.uid, userData);
        console.log("Profile updated successfully!");
        nav("/webapp/home");
      } catch (error) {
        console.error("Error updating profile:", error);
        setError("Error updating profile. Please try again.");
      }
    } catch (error) {
      console.error("There was an error creating the user!", error);
      setError("There was an error creating the user!");
    }
  };

  const [error, setError] = useState(null);

  function isFormFilled() {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    return (
      allFieldsFilled &&
      FormValidation.validatePasswords(
        formData.password,
        formData.confirmPassword
      ) &&
      FormValidation.isEmailValid(formData.email)
    );
  }

  const callback = () => {
    setError(null);
  };

  return (
    <div className="flex bg-med-red fixed w-full h-full justify-center items-center p-1">
      <div className="onboarding-container">
        <div
          className={
            error ? "absolute w-full h-full top-0 left-0 z-50" : "hidden"
          }
        >
          <ErrorDisplay callback={callback} error={error} />
        </div>
        <header className={`flex justify-center ${error ? "blur-out" : ""}`}>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">
            Create Account
          </h1>
        </header>
        <form
          className={`onboarding-form form-inputs ${error ? "blur-out" : ""}`}
        >
          <h1>First Name</h1>
          <input
            name="first_name"
            type="text"
            value={formData.first_name}
            placeholder="First Name"
            onChange={handleChange}
          />
          <h1>Last Name</h1>
          <input
            name="last_name"
            type="text"
            value={formData.last_name}
            placeholder="Last Name"
            onChange={handleChange}
          />
          <h1>Email</h1>
          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <div className="flex flex-col space-y-2 w-full">
            <h1>Password</h1>
            <PasswordField
              name="password"
              value={formData.password}
              handleChange={handleChange}
            />
          </div>
          <div
            className={
              FormValidation.isValidPassword(formData.password)
                ? "flex flex-col space-y-2 w-full"
                : "hidden"
            }
          >
            <h1>Confirm Password</h1>
            <PasswordField
              name="confirmPassword"
              value={formData.confirmPassword}
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col space-y-2 w-full items-center">
            {PasswordErrorText(formData.password, formData.confirmPassword)}
          </div>
          <button
            className={`${
              isFormFilled() ? "bg-med-blue" : "bg-gray-300"
            } text-white rounded-lg w-full min-h-10`}
            onClick={handleSubmit}
            type="button"
            disabled={!isFormFilled()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
