import React from 'react';
import './Hero.css';
export default function Hero() {
  return (
    <section>
      <div >
        <h1 >
          Nikmati Rasa Otentik Masakan Nusantara
        </h1>
        <p >
          Temukan bumbu dan bahan masakan khas Indonesia dengan kualitas terbaik, hanya di Sedap.
        </p>
        <a
          href="/cekproduk"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
        >
          Cek Ketersediaan Produk
        </a>
      </div>
      <div className="mt-10">
        <img
          src="https://source.unsplash.com/800x400/?indonesian-food"
          alt="Masakan Nusantara"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
