import React from "react";
import Todo from "./todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./login";
import Signup from "./Signup";
import UserProfile from "./UserProfile";




function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </Router>

    </>
    // now to to now bar and link the pages using link Tag
  );
}

export default App;
