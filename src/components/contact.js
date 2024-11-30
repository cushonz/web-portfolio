import React from "react";
import MyForm from "./form";
import Header from "./Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="w-full m-20">
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
