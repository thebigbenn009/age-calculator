import React from "react";
import FormContainer from "./components/FormContainer";
import "./index.css";
import BtnContainer from "./components/BtnContainer";

import AgeContainer from "./components/AgeContainer";
import AppProvider from "./Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <FormContainer />
        <BtnContainer />
        <AgeContainer />
      </div>
      <ToastContainer position="top-center" />
    </AppProvider>
  );
};

export default App;
