import React, { useState } from 'react';

export default function CekProduk() {
  const [kode, setKode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCek = async () => {
    if (!kode) {
      setError('Kode produk tidak boleh kosong'); // Validasi 1: Tidak boleh kosong
      setResult(null);
      return;
    }
    if (kode.length < 4) {
      setError('Kode produk minimal 4 karakter'); // Validasi 2: Minimal 4 karakter
      setResult(null);
      return;
    }

    const res = await fetch('/produk.json');
    const data = await res.json();
    const produk = data.find(p => p.kode_produk.toUpperCase() === kode.toUpperCase());

    if (!produk) {
      setResult({ status: 'notfound' });
    } else if (produk.stok > 0) {
      setResult({ status: 'available', ...produk });
    } else {
      setResult({ status: 'outofstock', ...produk });
    }

    setError(''); // Reset error jika validasi berhasil atau produk ditemukan/tidak ditemukan
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Cek Ketersediaan Produk</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Masukkan kode produk"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        />
        <button onClick={handleCek} className="w-full bg-green-600 text-white py-2 rounded">Cek Produk</button>
        {error && <p className="text-red-600 mt-2">{error}</p>} {/* Menampilkan pesan error */}

        {result && (
          <div className="mt-4 p-4 rounded border bg-white">
            {result.status === 'available' && (
              <>
                <p className="text-green-700 font-semibold">
                  ✅ Produk <strong>{result.nama_produk}</strong> tersedia dengan harga <strong>Rp{result.harga}</strong>.
                </p>
                <p>Stok tersedia: {result.stok}</p>
                <img src="https://source.unsplash.com/100x100/?cart" alt="Keranjang" className="mt-2 mx-auto" />
              </>
            )}
            {result.status === 'outofstock' && (
              <>
                <p className="text-yellow-700 font-semibold">
                  ⚠️ Produk <strong>{result.nama_produk}</strong> saat ini sedang habis.
                </p>
                <img src="https://source.unsplash.com/100x100/?empty" alt="Out of Stock" className="mt-2 mx-auto" />
              </>
            )}
            {result.status === 'notfound' && (
              <p className="text-red-700 font-semibold">❌ Kode produk tidak ditemukan.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}