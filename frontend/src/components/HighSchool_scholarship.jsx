import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api_url from '../constant/constant';

const HighSchool_scholarship = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // "http://localhost:5000/api/get/scholarship_data"
      const res = await axios.get(`${Api_url.BACKEND_URI}/api/get/scholarship_data`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter for category "high school" (case-insensitive, supports string or array)
  const highSchoolScholarships = (data || []).filter(sch => {
    if (!sch.category) return false;
    if (Array.isArray(sch.category)) {
      return sch.category.some(c => typeof c === 'string' && c.toLowerCase().includes('high school'));
    }
    return typeof sch.category === 'string' && sch.category.toLowerCase().includes('high school');
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left ads */}
      <aside className="md:w-1/5 bg-white p-4 border-r flex flex-col items-center">
        <h2 className="font-bold text-lg mb-4">Sponsored</h2>
        <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">Ad 1</div>
        <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">Ad 2</div>
      </aside>

      {/* Center: High School Scholarships */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">High School Scholarships</h1>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : highSchoolScholarships.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {highSchoolScholarships.map((sch, index) => (
              <div key={sch._id || sch.id || index} className="bg-white rounded shadow p-4 flex flex-col">
                <img
                  src={sch.image}
                  alt={sch.name}
                  className="w-full h-40 object-cover rounded mb-3"
                  onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
                />
                <h2 className="font-semibold text-lg mb-1">{sch.name}</h2>
                <div className="text-sm text-gray-500 mb-1">Category: {Array.isArray(sch.category) ? sch.category.join(', ') : sch.category}</div>
                <div className="text-sm text-gray-500 mb-1">
                  Deadline: {sch.deadline ? new Date(sch.deadline).toLocaleDateString() : 'N/A'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No High School scholarships found.</div>
        )}
      </main>

      {/* Right ads */}
      <aside className="md:w-1/5 bg-white p-4 border-l flex flex-col items-center">
        <h2 className="font-bold text-lg mb-4">Sponsored</h2>
        <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">Ad 3</div>
        <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">Ad 4</div>
      </aside>
    </div>
  );
};

export default HighSchool_scholarship;