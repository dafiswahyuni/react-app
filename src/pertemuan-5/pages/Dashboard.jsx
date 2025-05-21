import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="flex flex-col flex-1"> {/* Pastikan container utama bisa expand */}
            <PageHeader/>
            <div id="dashboard-grid" className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div id="dashboard-orders" className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm"> 
                    <div id="orders-icon" className="bg-green-500 text-white rounded-full p-3 flex items-center justify-center"> 
                        <FaShoppingCart size={24}/> 
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold text-gray-800">75</span> 
                        <span id="orders-text" className="text-gray-500">Total Orders</span> 
                    </div>
                </div>

                <div id="dashboard-delivered" className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                    <div id="delivered-icon" className="bg-blue-500 text-white rounded-full p-3 flex items-center justify-center">
                        <FaTruck size={24}/>
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold text-gray-800">175</span>
                        <span id="delivered-text" className="text-gray-500">Total Delivered</span>
                    </div>
                </div>

                <div id="dashboard-canceled" className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                    <div id="canceled-icon" className="bg-red-500 text-white rounded-full p-3 flex items-center justify-center"> 
                        <FaBan size={24}/>
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold text-gray-800">40</span>
                        <span id="canceled-text" className="text-gray-500">Total Canceled</span>
                    </div>
                </div>

                <div id="dashboard-revenue" className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                    <div id="revenue-icon" className="bg-yellow-500 text-white rounded-full p-3 flex items-center justify-center"> 
                        <FaDollarSign size={24}/>
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold text-gray-800">Rp.128.000.000</span>
                        <span id="revenue-text" className="text-gray-500">Total Revenue</span>
                    </div>
                </div>

            </div>
        </div>
    );
}