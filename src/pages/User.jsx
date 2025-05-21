import { useEffect, useState } from "react";
import axios from "axios";
export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users); // Ambil array `users` dari response
      })
      .catch((err) => {
        setError("Gagal memuat data pengguna.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Daftar Pengguna</h2>
      {loading && (
        <p className="text-gray-600 text-sm">Memuat data pengguna...</p>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-700">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nama</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Telepon</th>
                <th className="py-2 px-4 border-b">Kota</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-sm hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b">{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
