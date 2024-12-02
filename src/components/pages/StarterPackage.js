import React from "react";
import Header from "../Header";

function StarterPackage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex">
        <img
          alt="doing business"
          className="object-cover w-full h-full col-span-6 row-span-3"
          src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="flex mt-10">
          <ul className="dark:text-white space-y-4 list-inside list-disc pl-6">
            <h1 className="dark:text-white p-3 text-center text-xl">
              Included in the package
            </h1>

            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              Custom Design: Tailoerd to reflect your unique brand identity,
              ensuring a professional and cohesive look across all pages.
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              Responsive Design: Your website will be fully optimized for all
              devices, providing a seamless experience for users on desktops,
              tablets, and mobile phones.
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              Up to 5 Pages: We’ll create up to five essential pages, such as
              Home, About, Services, Contact, and a Blog or Portfolio page,
              depending on your needs.
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              SEO Optimization: We ensure your website is SEO-friendly, with
              optimized content and meta tags to help your site rank higher on
              search engines.
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              Contact Forms: Allow your customers to easily get in touch with
              you through simple, secure contact forms.
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out">
              Performance Optimization: We prioritize fast load times and smooth
              performance, ensuring an efficient user experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex dark:text-white justify-center mt-10">
        <h1 className="text-3xl">What we need from you!</h1>
      </div>
      <div className="flex dark:text-white justify-center mt-10 list-disc list-inside">
        <ul className="dark:text-white space-y-4 list-inside list-disc pl-6 pb-6">
          <li className="hover:text-gray-300 transition duration-300 ease-in-out">
            General idea of website layout
          </li>
          <li className="hover:text-gray-300 transition duration-300 ease-in-out">
            Needed website functionality
          </li>
          <li className="hover:text-gray-300 transition duration-300 ease-in-out">
            Desired pages
          </li>
          <li className="hover:text-gray-300 transition duration-300 ease-in-out ">
            Images of your business
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StarterPackage;
