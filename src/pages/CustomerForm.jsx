import { useState } from "react";
export default function CustomerForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze"
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ id: "", name: "", email: "", phone: "", loyalty: "Bronze" });
    };
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="id" value={formData.id} onChange={handleChange} placeholder="Customer ID" className="input" required />
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Customer Name" className="input" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" required />
            <select name="loyalty" value={formData.loyalty} onChange={handleChange} className="input">
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
            </select>
            <button type="submit" className="btn bg-hijau text-white">Submit</button>
        </form>
    );
}
