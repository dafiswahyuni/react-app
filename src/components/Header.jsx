import React, { useState } from 'react';
import { FaSearch, FaCheckCircle, FaTimesCircle, FaShoppingCart } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchResult(null);
    setSearchError('');
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      setSearchError('Kata kunci pencarian tidak boleh kosong.');
      setSearchResult(null);
      return;
    }

    if (searchTerm.trim().length < 4) {
      setSearchError('Kata kunci pencarian minimal 4 karakter.');
      setSearchResult(null);
      return;
    }

    try {
      const response = await fetch('/produk.json');
      const data = await response.json();
      const foundProduct = data.find(
        (produk) => produk.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (foundProduct) {
        setSearchResult({ ...foundProduct, found: true });
      } else {
        setSearchResult({ found: false });
      }
      setSearchError('');
    } catch (error) {
      console.error('Error fetching produk:', error);
      setSearchError('Terjadi kesalahan saat mencari produk.');
      setSearchResult(null);
    }
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-semibold mb-2 md:mb-0">Pencarian Produk</div>
      <form onSubmit={handleSearchSubmit} className="flex items-center w-full md:w-auto">
        <input
          type="text"
          placeholder="Cari nama produk..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md mr-2 w-full md:w-64"
        /><button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          <FaSearch />Cari
        </button>
      </form>

      {searchError && <p className="text-red-500 mt-2">{searchError}</p>}

      {searchResult && (
        <div className="mt-4 p-4 rounded border bg-gray-100">
          {searchResult.found ? (
            <>
              {searchResult.stok > 0 ? (
                <>
                  <div className="flex items-center text-green-700">
                    <FaCheckCircle className="mr-2" />
                    Produk <strong>{searchResult.nama}</strong> tersedia dengan harga <strong>Rp{searchResult.harga.toLocaleString()}</strong>.
                  </div>
                  <p className="ml-6">Stok tersedia: {searchResult.stok}</p>
                  <FaShoppingCart className="text-green-500 text-2xl mt-2" />
                </>
              ) : (
                <div className="flex items-center text-yellow-700">
                  <BiErrorCircle className="mr-2" />
                  ⚠️ Produk <strong>{searchResult.nama}</strong> saat ini sedang habis.
                </div>
              )}
            </>
          ) : (
            <p className="text-red-700 flex items-center">
              <FaTimesCircle className="mr-2" />
              ❌ Produk dengan nama "{searchTerm}" tidak ditemukan.
            </p>
          )}
        </div>
      )}
    </header>
  );
}