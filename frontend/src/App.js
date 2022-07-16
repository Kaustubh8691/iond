// import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "./component/SignIn";
import Signup from "./component/SignUp";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    UserID: localStorage.getItem("UserID"),
    UserName: localStorage.getItem("UserName"),
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Signin setUser={setUser} />} />
        {/* login page */}
        <Route path="/SignUp" element={<Signup />} />
        {/* registration page */}
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
