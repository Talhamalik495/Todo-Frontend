import axios from "axios";
import React, { useContext, useState } from "react";
import { AppRoutes } from "../constant/constant";
import Cookies from "js-cookie";
import { authContext } from "../context/Auth";
function SinginForm() {
  let { user, setUser } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleSingin = () => {
    console.log("Singin");

    let obj = {
      email,
      password,
    };
    axios
      .post(AppRoutes.login, obj)
      .then((data) => {
        setEmail("");
        setPassword("");
        console.log("data", data);
        Cookies.set("token", data.data.token);
        setUser(data.data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="flex justify-center">
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col  w-full md:py-32 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center pb-10">
          Singin
        </h2>

        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="email"
            value={password}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          onClick={handleSingin}
        >
          Singin
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </section>
  );
}

export default SinginForm;
