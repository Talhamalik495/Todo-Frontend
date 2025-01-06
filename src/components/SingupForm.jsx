import React, { useContext, useState } from "react";
import axios from "axios";
import { AppRoutes } from "../constant/constant";
import { authContext } from "../context/Auth";

function SingupForm() {
  let { user, setUser } = useContext(authContext);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  console.log(name, email, password);

  let handleSingup = () => {
    let obj = {
      name,
      email,
      password,
    };
    axios
      .post(AppRoutes.singup, obj)
      .then((data) => {
        console.log("DATA", data);
        setUser(data.data.data);
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  };
  return (
    <section className="flex justify-center">
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col  w-full md:py-32 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center pb-10">
          Singup
        </h2>

        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          onClick={handleSingup}
        >
          Singup
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </section>
  );
}

export default SingupForm;
