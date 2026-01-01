import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
const Tours = React.lazy(() => import("./pages/Tours"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Countries = React.lazy(() => import("./pages/Countries"));
const Cities = React.lazy(() => import("./pages/Cities"));
const Hotels = React.lazy(() => import("./pages/Hotels"));
const Destination = React.lazy(() => import("./pages/Destination"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/countries" element={<Countries />} />{" "}
            <Route path="/cities" element={<Cities />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/hotels" element={<Hotels />} />{" "}
            <Route path="/destinations" element={<Destination />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
