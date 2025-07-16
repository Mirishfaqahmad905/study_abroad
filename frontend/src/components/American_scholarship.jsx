import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Api_url from '../constant/constant';

const ScholarshipDetailModal = ({ open, onClose, scholarship }) => {
  if (!open || !scholarship) return null;

  // Utility to split text by newlines, commas, or periods into a list
  const toList = (val) =>
    Array.isArray(val)
      ? val
      : typeof val === 'string'
      ? val.split(/\n|,|\./).map((v) => v.trim()).filter(Boolean)
      : [];

  // Format date
  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-2xl p-8 w-full max-w-4xl relative overflow-y-auto max-h-[90vh] border-4 border-red-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-800 text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold mb-2 text-red-800 font-serif tracking-wide bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
                {scholarship.name}
              </h2>
              {scholarship.hostUniversity && (
                <p className="text-lg font-semibold text-red-600">
                  Hosted by: {scholarship.hostUniversity}
                </p>
              )}
            </div>
            {/* Image Section */}
            <img
              src={scholarship.image}
              alt={scholarship.name}
              className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-red-100 shadow-lg hover:shadow-xl transition-all"
              onError={e => { e.target.src = 'https://via.placeholder.com/800x400?text=Scholarship+Image'; }}
            />
            {/* Quick Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700">Location</h3>
                <p>{scholarship.country || 'N/A'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700">Application Deadline</h3>
                <p>{formatDate(scholarship.deadline)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700">Created At</h3>
                <p>{formatDate(scholarship.createdAt)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700">Amount</h3>
                <p>{scholarship.amount ? scholarship.amount : 'Varies / Fully Funded'}</p>
              </div>
            </div>
            {/* Categories & Region Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Array.isArray(scholarship.category) && scholarship.category.map((cat, index) => (
                <span key={index} className="px-4 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-semibold shadow-sm">
                  {cat}
                </span>
              ))}
              {Array.isArray(scholarship.region) && scholarship.region.map((reg, idx) => (
                <span key={idx} className="px-4 py-1 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full text-sm font-semibold shadow-sm">
                  {reg}
                </span>
              ))}
            </div>
            {/* Description Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">Description</h3>
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {scholarship.description}
              </div>
            </div>
            {/* Benefits Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">Benefits</h3>
              {toList(scholarship.benefits).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(scholarship.benefits).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Benefits information not available</p>
              )}
            </div>
            {/* Eligibility Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">Eligibility Criteria</h3>
              {toList(scholarship.eligibilityCriteria).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(scholarship.eligibilityCriteria).map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Eligibility criteria not available</p>
              )}
            </div>
            {/* How to Apply Section */}
            {scholarship.howToApply && (
              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">How to Apply</h3>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {scholarship.howToApply}
                </div>
              </div>
            )}
            {/* Required Documents Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">Required Documents</h3>
              {toList(scholarship.document || scholarship.documentsRequired).length > 0 ? (
                <ul className="list-none space-y-2">
                  {toList(scholarship.document || scholarship.documentsRequired).map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Document requirements not available</p>
              )}
            </div>
            {/* Official Link */}
            {scholarship.officialLink && (
              <div className="text-center mb-6">
                <a
                  href={scholarship.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  Apply Now on Official Website
                </a>
              </div>
            )}
            <button
              onClick={onClose}
              className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded font-bold shadow hover:from-red-700 hover:to-red-900 transition"
            >
              Close
            </button>
          </div>
          {/* Side Ad Space */}
          <div className="w-full md:w-1/4 space-y-4 mt-6 md:mt-0">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 h-32 rounded-lg flex items-center justify-center font-bold text-yellow-900 shadow-lg">
              Featured Scholarship
            </div>
            <div className="bg-gradient-to-br from-red-200 to-red-400 h-32 rounded-lg flex items-center justify-center font-bold text-red-900 shadow-lg">
              Related Programs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const American_scholarship = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    // http://localhost:5000/api/get/scholarship_data
    axios
      .get(`${Api_url.BACKEND_URI}/api/get/scholarship_data`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error occurred fetching data');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter for "America" region, case-insensitive, handles string or array
  const scholarshipData = (data || []).filter((item) => {
    if (typeof item.region === 'string') {
      return item.region.trim().toLowerCase() === 'south america' || item.region.trim().toLowerCase() === 'europe';
    }
    if (Array.isArray(item.region)) {
      return item.region.some(
        (r) => typeof r === 'string' && (r.trim().toLowerCase() === 'south america' || r.trim().toLowerCase() === 'europe')
      );
    }
    return false;
  });

  const handleViewDetails = (sch) => {
    setSelected(sch);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-gradient-to-br from-red-50 to-yellow-50 min-h-screen">
      {/* Left container */}
      <div className="md:w-1/4 mb-4">
        <div className="w-full h-40 bg-gradient-to-br from-red-200 to-red-400 rounded mb-4 flex items-center justify-center font-bold text-white shadow">Ad 1</div>
        <div className="w-full h-40 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded flex items-center justify-center font-bold text-white shadow">Ad 2</div>
      </div>
      {/* Right container */}
      <div className="md:w-3/4 flex flex-wrap gap-4">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : scholarshipData && scholarshipData.length > 0 ? (
          scholarshipData.map((sch, index) => (
            <div
              key={sch._id || index}
              className="bg-white rounded-lg shadow-md p-4 w-full md:w-80 flex flex-col items-center border-2 border-red-100 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold mb-2 text-red-800">{sch.name}</h2>
              {sch.image && (
                <img
                  src={sch.image}
                  alt={sch.title}
                  className="h-32 w-full object-cover rounded mb-2 border"
                  onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
                />
              )}
              <div className="text-sm text-gray-500 mb-1 font-medium">
                Category: {Array.isArray(sch.category) ? sch.category.join(', ') : sch.category}
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">
                Country: {sch.country || 'N/A'}
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">
                Deadline: {sch.deadline ? new Date(sch.deadline).toLocaleDateString() : 'N/A'}
              </div>
              <button
                className="mt-3 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded hover:from-red-700 hover:to-red-900 font-semibold shadow"
                onClick={() => handleViewDetails(sch)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No data found.</p>
        )}
      </div>
      {/* Modal */}
      <ScholarshipDetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        scholarship={selected}
      />
    </div>
  );
};

export default American_scholarship;