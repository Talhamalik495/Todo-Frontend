import { useEffect, useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import axios from "axios";
import { AppRoutes } from "../constant/constant";
import Cookies from "js-cookie";
import Header from "../components/Header";
function Todo() {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let [editTodo, setEditTodo] = useState("");
  let [editText, setEditText] = useState("");

  let getTodo = () => {
    axios
      .get(AppRoutes.getTodo, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((data) => {
        console.log("get todo=>", data);
        setInput("");
        setTodo([...data.data.todo]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodo();
  }, []);
  let update = (id, update) => {
    console.log("id", id);
    console.log("update", update);

    axios
      .patch(
        `${AppRoutes.editesTodo}/${id}`,
        { todo: update },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((data) => {
        return getTodo();
      })
      .catch((err) => {
        console.log("err=>", err);
      });
  };
  let saveTodo = (id) => {
    if (editText.trim() === "") return;
    console.log("editText", editText);

    update(id, editText);
    setEditTodo(null);
    setEditText("");
  };
  let AddCourse = () => {
    let obj = {
      todo: input,
      completed: true,
    };
    axios
      .post(AppRoutes.addTodo, obj, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((data) => {
        return getTodo();
      })
      .catch((err) => {
        console.log("err=>", err);
      }).finally;
  };

  let deleteTodo = (id) => {
    console.log("id=>", `${AppRoutes.deleteTodo}/${id}`);
    axios
      .delete(`${AppRoutes?.deleteTodo}/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((data) => {
        return getTodo();
      })
      .catch((err) => {
        console.log("err=>", err);
      });
  };

  return (
    <div>
      <div>
        {/* <Header /> */}
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center p-6">
          <div className="bg-white shadow-2xl rounded-lg w-full max-w-lg">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-6 rounded-t-lg">
              <h1 className="text-4xl font-bold tracking-wide">
                My To-Do List
              </h1>
            </header>
            <div className="p-8">
              {/* Add Task Form */}
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Add a new task"
                  className="flex-grow px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => AddCourse()}
                >
                  Add
                </button>
              </div>

              {/* Task List */}
              <ul className="mt-8 space-y-4">
                {todo.map((data) => {
                  return (
                    <li
                      key={data._id}
                      className="flex items-center justify-between bg-gray-50 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        {editTodo === data._id ? (
                          <input
                            type="text"
                            placeholder="Edit your task"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                          />
                        ) : (
                          <span className="text-gray-700 text-lg">
                            {data.todo}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        {editTodo === data._id ? (
                          <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={() => saveTodo(data._id)}
                          >
                            <FaCheck />
                          </button>
                        ) : (
                          <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            onClick={() => {
                              setEditTodo(data._id);
                              setEditText(data.todo);
                            }}
                          >
                            <FaEdit />
                          </button>
                        )}
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                          onClick={() => deleteTodo(data._id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
