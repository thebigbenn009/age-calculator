import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// Create a context for the application
const AppContext = createContext();

// Define the application provider component
const AppProvider = ({ children }) => {
  // State for input fields and error
  const [inputFields, setInputFields] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [userAge, setUserAge] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const [error, setError] = useState({
    day: false,
    month: false,
    year: false,
  });

  // Function to handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Function to handle the button click
  const handleButtonClick = () => {
    const { day, month, year } = inputFields;

    // Check if any input fields are empty
    if (Object.values(inputFields).some((value) => value === "")) {
      toast.error("kindly fill all inputs");
      return;
    }

    // Validate day, month, and year
    if (day < 1 || day > 31) {
      toast.error("Enter a valid day of birth!");
      setError((prevError) => ({ ...prevError, day: true }));
      return;
    }
    if (month < 1 || month > 12) {
      setError((prevError) => ({
        ...prevError,
        month: true,
      }));
      toast.error("Month should be between 1 and 12");
      return;
    }
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // Handle the case where the input is not a number
      setError((prevError) => ({
        ...prevError,
        day: isNaN(day) ? true : false,
        month: isNaN(month) ? true : false,
        year: isNaN(year) ? true : false,
      }));
      toast.error("Invalid input. Please enter valid numbers.");
      return;
    }
    // Create a Date object for the user's birth date and the current date
    const userBirthDay = new Date(year, month - 1, day);
    const currentDate = new Date();

    // Calculate the difference between the two dates
    let yearsDifference =
      currentDate.getFullYear() - userBirthDay.getFullYear();
    let monthDifference = currentDate.getMonth() - userBirthDay.getMonth();
    let daysDifference = currentDate.getDate() - userBirthDay.getDate();
    if (yearsDifference < 0) {
      setError((prevError) => ({ ...prevError, year: true }));
      toast.error("your birthday cannot be in the future🙄");
      return;
    }

    // Adjust for negative values
    if (daysDifference < 0) {
      monthDifference--;
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      daysDifference += lastDayOfMonth;
    }
    if (monthDifference < 0) {
      yearsDifference--;
      monthDifference += 12;
    }

    // Log the calculated difference
    setUserAge((age) => ({
      day: daysDifference,
      month: monthDifference,
      year: yearsDifference,
    }));
    setError((prevError) => ({ day: false, month: false, year: false }));
    console.log(
      `${yearsDifference} years, ${monthDifference} months, ${daysDifference} days`
    );
  };

  return (
    // Provide the application state and functions to components via context
    <AppContext.Provider
      value={{
        error,
        setError,
        inputFields,
        setInputFields,
        handleInputChange,
        handleButtonClick,
        userAge,
        setUserAge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context values
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
