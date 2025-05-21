import React from "react";
import "./assets/tailwind.css";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Produk from "./pages/Produk";

const Loading = React.lazy(() => import("./components/Loading"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Guest = React.lazy(() => import("./pages/Guest"));
const CekProduk = React.lazy(() => import("./pages/Produk")); // Anda mengimpor Produk dan CekProduk dari file yang sama
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const User = React.lazy(() => import("./pages/User"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Rute untuk Guest Layout */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Guest />} />
          <Route path="/produk" element={<Produk />} />{" "}
          {/* Menggunakan Produk sesuai import */}
          <Route path="cekproduk" element={<CekProduk />} />
        </Route>

        {/* Rute untuk Admin Layout (diawali dengan /admin) */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* Path menjadi /admin */}
          <Route path="orders" element={<Orders />} />{" "}
          {/* Path menjadi /admin/orders */}
          <Route path="customers" element={<Customers />} />{" "}
          {/* Path menjadi /admin/customers */}
          <Route path="user" element={<User />} />{" "}
          {/* Path menjadi /admin/user */}
        </Route>

        {/* Rute untuk Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Rute Error dan Not Found (di luar layout spesifik) */}
        <Route path="/403" element={<Error403 />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="/400" element={<Error400 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
