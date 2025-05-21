import React, { useEffect, useState } from 'react';
import produkData from '../data/produk.json'; // Pastikan path ini benar

export default function TopProduk() {
  const [produkUnggulan, setProdukUnggulan] = useState([]);

  useEffect(() => {
    const unggulan = produkData.filter(item => item.is_unggulan);
    setProdukUnggulan(unggulan);
  }, []);

  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Produk Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {produkUnggulan.map(item => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={item.gambar} alt={item.nama} className="w-full h-40 object-cover rounded-md mb-2"/>
            <h3 className="text-lg font-semibold">{item.nama}</h3>
            <p className="text-green-600 font-bold">Rp{item.harga.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}