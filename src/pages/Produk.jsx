import React from "react";
import produktData from "../data/produk.json";

export default function CekProduk() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produktData.map((produk) => (
          <div
            key={produk.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {produk.gambar ? (
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className="max-h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png";
                  }}
                />
              ) : (
                <span className="text-gray-400">Tidak ada gambar</span>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{produk.nama}</h2>
              <p className="text-gray-500 mb-2">{produk.kategori}</p>
              <p className="text-green-600 font-bold">
                Rp {produk.harga.toLocaleString("id-ID")}
              </p>
              <p className="mt-2 text-gray-700">{produk.deskripsi}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Stok: {produk.stok}
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
