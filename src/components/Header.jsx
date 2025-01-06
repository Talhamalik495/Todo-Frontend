import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/Auth";
import Cookies from "js-cookie";
function Header() {
  let { user, setUser } = useContext(authContext);
  console.log("user=>", user);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* لوگو */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Todo App Logo"
          className="mr-2"
        />
        <span className="text-xl font-bold">Todo App</span>
      </div>

      {/* نیویگیشن بٹن */}
      <nav>
        <ul className="flex space-x-4">
          {!user.email ? (
            <li>
              <button
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => {
                  setUser("");
                  Cookies.set(null);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <div>
              <li>
                <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
                  <Link to={"/singin"}>Login</Link>
                </button>
              </li>
              <li>
                <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
                  <Link to={"/singup"}>Signup</Link>
                </button>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
