import { useState } from "react";
export default function OrderForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        customer: "",
        status: "Pending",
        total: "",
        date: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        let formErrors = {};
        if (!formData.id) formErrors.id = "Order ID is required.";
        if (!formData.customer) formErrors.customer = "Customer Name is required.";
        if (!formData.total || formData.total <= 0) formErrors.total = "Total Price must be a positive number.";
        if (!formData.date) formErrors.date = "Order Date is required.";
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return; // Stop form submission if there are errors
        }
        onSubmit(formData);
        setFormData({ id: "", customer: "", status: "Pending", total: "", date: "" });
        setErrors({}); // Clear errors on successful submission
    };
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">Order ID</label>
                <input
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="Order ID"
                    className="input w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                {errors.id && <p className="text-red-500 text-xs mt-1">{errors.id}</p>}
            </div>
            <div>
                <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                    id="customer"
                    name="customer"
                    value={formData.customer}
                    onChange={handleChange}
                    placeholder="Customer Name"
                    className="input w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                {errors.customer && <p className="text-red-500 text-xs mt-1">{errors.customer}</p>}
            </div>
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Order Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="input w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </select>
            </div>
            <div>
                <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total Price</label>
                <input
                    id="total"
                    name="total"
                    type="number"
                    value={formData.total}
                    onChange={handleChange}
                    placeholder="Total Price"
                    className="input w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                {errors.total && <p className="text-red-500 text-xs mt-1">{errors.total}</p>}
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            <div className="flex justify-between items-center">
                <button type="submit" className="btn bg-hijau text-white p-3 rounded-md">Submit</button>
                <button
                    type="button"
                    onClick={() => setFormData({ id: "", customer: "", status: "Pending", total: "", date: "" })}
                    className="btn bg-gray-300 text-black p-3 rounded-md"
                >
                    Reset
                </button>
            </div>
        </form>
    );
}
