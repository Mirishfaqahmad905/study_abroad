import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Api_url from '../constant/constant';

const InternshipDetailModal = ({ open, onClose, internship }) => {
  if (!open || !internship) return null;

  const toList = (val) =>
    Array.isArray(val)
      ? val
      : typeof val === 'string'
      ? val.split(/\n|,|\./).map((v) => v.trim()).filter(Boolean)
      : [];

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 w-full max-w-3xl relative overflow-y-auto max-h-[90vh] border-4 border-blue-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-500 hover:text-blue-800 text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold mb-2 text-blue-800 font-serif tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                {internship.name}
              </h2>
              {internship.custome_message && (
                <p className="text-lg font-semibold text-blue-600">
                  {internship.custome_message}
                </p>
              )}
            </div>
            <img
              src={internship.image}
              alt={internship.name}
              className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all"
              onError={e => { e.target.src = 'https://via.placeholder.com/800x400?text=Internship+Image'; }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-700">Country</h3>
                <p>{internship.hosted_country || 'N/A'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-700">Application Deadline</h3>
                <p>{formatDate(internship.deadline)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-700">Created At</h3>
                <p>{formatDate(internship.created)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-700">Duration</h3>
                <p>{internship.duration || 'N/A'}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Description</h3>
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {internship.description}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Benefits</h3>
              {toList(internship.benifits).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(internship.benifits).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Benefits information not available</p>
              )}
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Eligibility Criteria</h3>
              {toList(internship.eligabality_criteria).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(internship.eligabality_criteria).map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Eligibility criteria not available</p>
              )}
            </div>
            {internship.application_process && (
              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Application Process</h3>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {internship.application_process}
                </div>
              </div>
            )}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Required Documents</h3>
              {toList(internship.document).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(internship.document).map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Document requirements not available</p>
              )}
            </div>
            {internship.officialLink && (
              <div className="text-center mb-6">
                <a
                  href={internship.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  Apply Now on Official Website
                </a>
              </div>
            )}
            <button
              onClick={onClose}
              className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded font-bold shadow hover:from-blue-700 hover:to-blue-900 transition"
            >
              Close
            </button>
          </div>
          {/* Side Ad Space */}
          <div className="w-full md:w-1/4 space-y-4 mt-6 md:mt-0">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 h-32 rounded-lg flex items-center justify-center font-bold text-yellow-900 shadow-lg">
              Featured Internship
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-400 h-32 rounded-lg flex items-center justify-center font-bold text-blue-900 shadow-lg">
              Related Programs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Internship = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      // http://localhost:5000/api/get/internshipdata
      const res = await axios.get(`${Api_url.BACKEND_URI}/api/get/internshipdata`);
      setData(res.data.message);
    } catch (err) {
      // Optionally handle error
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewDetails = (internship) => {
    setSelected(internship);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Left side ads */}
      <aside className="md:w-1/5 bg-white p-4 border-r flex flex-col items-center">
        <h2 className="font-bold text-lg mb-4">Sponsored</h2>
        <div className="w-full h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded mb-4 flex items-center justify-center">Ad 1</div>
        <div className="w-full h-40 bg-gradient-to-br from-green-200 to-green-400 rounded flex items-center justify-center">Ad 2</div>
      </aside>
      {/* Center internship cards */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Internship Opportunities</h1>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : data && data.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item._id || item.internship_id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center border-2 border-blue-100 hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded mb-3 border"
                  onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
                />
                <h2 className="font-semibold text-lg mb-1 text-blue-800 text-center">{item.name}</h2>
                <div className="text-sm text-gray-500 mb-1">Country: {item.hosted_country}</div>
                <div className="text-sm text-gray-500 mb-1">Duration: {item.duration}</div>
                <div className="text-sm text-gray-500 mb-1">Deadline: {item.deadline ? new Date(item.deadline).toLocaleDateString() : 'N/A'}</div>
                <button
                  className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded hover:from-blue-700 hover:to-blue-900 font-semibold shadow"
                  onClick={() => handleViewDetails(item)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No internships found.</div>
        )}
      </main>
      {/* Right side ads */}
      <aside className="md:w-1/5 bg-white p-4 border-l flex flex-col items-center">
        <h2 className="font-bold text-lg mb-4">Sponsored</h2>
        <div className="w-full h-40 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded mb-4 flex items-center justify-center">Ad 3</div>
        <div className="w-full h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded flex items-center justify-center">Ad 4</div>
      </aside>
      {/* Modal */}
      <InternshipDetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        internship={selected}
      />
    </div>
  );
};

export default Internship;