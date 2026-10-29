
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Checking permissions...</p>;
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
