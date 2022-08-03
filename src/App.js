import React from "react";

//import components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from './pages/list/List'
import Single from "./pages/single/Single";
import News from "./pages/new/New";


import { Routes, BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="news" element={<News />} />
            </Route>
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
