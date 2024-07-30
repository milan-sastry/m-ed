import React, { useState } from "react";
import PasswordErrorText from "../oldComponents/Onboarding/PasswordErrorText";
import * as FormValidation from "../utils/formChecks";
import PasswordField from "../oldComponents/Onboarding/PasswordField";
import ErrorDisplay from "../oldComponents/misc/ErrorDisplay";
import { auth, db,storage } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"



function CreateMentor() {
  const [selectedFile, setSelectedFile] = useState(null);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    location: "",
    industry: "",
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

const handleImageChange = (e) =>{
    const file = e.target.files ? e.target.files[0] : undefined;
    setSelectedFile(file);
}

  const uploadImage = async (uid) => {
    if(selectedFile == null) return;
    const imageRef = ref(storage, `mentor-profile-pictures/${uid}`);
    await uploadBytes(imageRef,selectedFile).then(() => alert("cool"));
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL
  }
    

  const handleSubmit = async (e) => {
    async function createMentor(uid, userData) {
      try {
        const userRef = doc(db, "mentor-users", uid); // Use the UID as the document ID
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
      const profilePicURL = await uploadImage(user.uid);
      const name = formData.first_name + " " + formData.last_name;
      await updateProfile(user, {photoURL:profilePicURL,
        displayName: name
      });

      console.log(user);

      try {
        setError(null);
        const userData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          location: formData.location,
          industry: formData.industry,
          email: formData.email,
          uid: user.uid,
          profile_pic: profilePicURL
        };
        await createMentor(user.uid, userData);

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
          <h1>Location</h1>
          <input
            name="location"
            type="text"
            value={formData.location}
            placeholder="Location"
            onChange={handleChange}
          />
          <h1>Industry</h1>
          <input
            name="industry"
            type="text"
            value={formData.industry}
            placeholder="Industry"
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
          <input className="flex items-center justify-center" type="file" onChange={handleImageChange} />
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


export default CreateMentor;
