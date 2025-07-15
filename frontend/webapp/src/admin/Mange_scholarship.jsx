import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Api_url from '../constant/constant';
import { useNavigate } from 'react-router-dom';

const Mange_scholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      const response = await axios.get(`${Api_url.BACKEND_URI}/api/get/scholarship_data`);
      setScholarships(response.data);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
    }
  };

  const confirmDelete = (item) => {
    setSelectedScholarship(item);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${Api_url.BACKEND_URI}/api/delete/scholarship/${selectedScholarship._id}`);
      setShowModal(false);
      setScholarships(prev => prev.filter(s => s._id !== selectedScholarship._id));
      setSelectedScholarship(null);
      alert("Scholarship deleted successfully.");
    } catch (error) {
      console.error("Error deleting scholarship:", error);
      alert("Failed to delete scholarship.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Scholarships</h1>
       <button className='bg bg-red-500 text-white p-4 ' onClick={()=>navigate(-1)}>Back</button>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl bg-white shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Deadline</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            { scholarships &&  scholarships.map((item, idx) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img src={`${item.image}`} alt="scholarship" className="h-14 w-14 rounded-md object-cover" />
                </td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.country}</td>
                <td className="p-3">{item.deadline}</td>
                <td className="p-3">
                  <button
                    onClick={() => confirmDelete(item)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {scholarships.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No scholarships found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedScholarship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete <strong>{selectedScholarship.name}</strong>?</p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mange_scholarship;
