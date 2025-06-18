import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
