import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Mengganti NavBar dengan Header
import Footer from '../components/Footer';

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian Header (sebagai pengganti NavBar) */}
      <Header />

      {/* Konten utama halaman guest akan ditampilkan di sini */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Bagian Footer */}
      <Footer />
    </div>
  );
}