import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import CarDetail from "./pages/CarDetail";
import Conversations from "./pages/Conversations";
import Cars from "./pages/Cars";
import Buscador from "./pages/Buscador";
import CreateAd from "./pages/CreateAd";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chat" element={<Conversations />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </Layout>
  );
};

export default App;
