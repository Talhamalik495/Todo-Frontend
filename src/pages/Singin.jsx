import React, { useContext } from "react";
import SinginFoarm from "../components/SinginForm";
import { authContext } from "../context/Auth";

function Singin() {
  let { user, setUser } = useContext(authContext);
  console.log("user", user);

  return (
    <div>
      <SinginFoarm />
    </div>
  );
}

export default Singin;
