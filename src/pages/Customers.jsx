import customers from '../data/customers.json';
import PageHeader from '../components/PageHeader';

export default function Customers() {
    const handleAddCustomer = () => {
        alert("Form to add customer goes here.");
    };

    return (
        <div>
            <PageHeader title="Customers" breadcrumbs={["Home", "Customers"]} buttonText="Add Customer" onButtonClick={handleAddCustomer} />
            
            <div className="overflow-x-auto mt-6 rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-6 py-3">Customer ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {customers.map((c) => (
                            <tr key={c.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">{c.id}</td>
                                <td className="px-6 py-4">{c.name}</td>
                                <td className="px-6 py-4">{c.email}</td>
                                <td className="px-6 py-4">{c.phone}</td>
                                <td className={`px-6 py-4 font-semibold ${c.loyalty === "Gold" ? "text-yellow-600" : c.loyalty === "Silver" ? "text-gray-500" : "text-amber-800"}`}>
                                    {c.loyalty}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
