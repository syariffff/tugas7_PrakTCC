// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import untuk routing
import LoginPage from "../components/Login"; // Halaman login
import RegisterPage from "../components/Regist";
import Notes from "../components/NoteList";
import ProtectedRoute from "../ProtectedRoute";
import AddNote from "../components/AddNote";
import EditNote from "../components/EditNote";

function RouterApp() {
  return (
    <Router>
      <Routes>
        {/* Pass setIsAuthenticated as prop to LoginPage */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterApp;