import React from "react";
import ProtectedRoute from "../../Components/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <div className="Home">Home</div>
    </ProtectedRoute>
  );
};

export default Home;
