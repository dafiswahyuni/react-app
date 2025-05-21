import { Link } from "react-router-dom";

export default function ErrorPage({ errorCode, errorDescription, errorImage }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      {/* Gambar Error */}
      <img src={errorImage} alt={`Error ${errorCode}`} className="w-72 md:w-96 mb-8" />

      {/* Kode Error */}
      <h1 className="text-6xl font-extrabold text-hijau mb-4">{errorCode}</h1>

      {/* Deskripsi */}
      <p className="text-lg text-gray-700 mb-6">{errorDescription}</p>

      {/* Tombol Kembali */}
      <Link 
        to="/" 
        className="bg-hijau hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
