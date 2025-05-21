import React, { useState, useEffect } from 'react';
import produkData from '../data/produk.json';
import testimoniData from '../data/testimoni.json';

export default function Testimoni() {
  const [produkUnggulan, setProdukUnggulan] = useState([]);

  useEffect(() => {
    const productRatings = {};
    testimoniData.forEach(testimoni => {
      if (productRatings[testimoni.productId]) {
        productRatings[testimoni.productId].sum += testimoni.rating;
        productRatings[testimoni.productId].count++;
      } else {
        productRatings[testimoni.productId] = { sum: testimoni.rating, count: 1 };
      }
    });

    const featuredProductIds = Object.keys(productRatings)
      .filter(productId => productRatings[productId].sum / productRatings[productId].count >= 4); // Ubah ambang batas sesuai keinginan

    const featuredProducts = produkData.filter(produk =>
      featuredProductIds.includes(produk.id.toString())
    );

    setProdukUnggulan(featuredProducts);
  }, []);

  return (
    <section className="bg-white py-10 px-4 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Produk Unggulan (Berdasarkan Testimoni)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produkUnggulan.map(produk => (
          <div key={produk.id} className="p-4 border rounded-md shadow-sm">
            <img
              src={produk.gambar}
              alt={produk.nama}
              className="mx-auto rounded-full w-20 h-20 mb-2 object-cover" // Tambahkan object-cover
            />
            <h4 className="font-semibold">{produk.nama}</h4>
            <p className="text-gray-600">Harga: Rp {produk.harga.toLocaleString()}</p>
            {/* Anda bisa menambahkan deskripsi singkat atau tombol detail di sini */}
          </div>
        ))}
        {produkUnggulan.length === 0 && (
          <p className="text-gray-500 col-span-full">Belum ada produk unggulan berdasarkan testimoni saat ini.</p>
        )}
      </div>
    </section>
  );
}