import { useContext, useEffect, useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from "axios";
// import { AppRoutes } from "../constant/constant";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Singup from "./pages/Singup";
import Singin from "./pages/Singin";
import { authContext } from "./context/Auth";
function App() {
  let { user, setUser } = useContext(authContext);
  console.log("User=>", user);

  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let [editTodo, setEditTodo] = useState("");
  let [editText, setEditText] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
