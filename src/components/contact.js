import React from "react";
import MyForm from "./form";
import Header from "./Header";

function Contact() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex justify-center items-center h-full overflow-hidden">
        <div className="w-full max-w-full px-6">
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
