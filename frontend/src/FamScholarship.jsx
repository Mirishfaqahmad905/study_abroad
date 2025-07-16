import React, { useEffect, useState } from 'react';
import Ads from './ads/Ads';
import axios from 'axios';

const ScholarshipDetailModal = ({ open, onClose, scholarship }) => {
  if (!open || !scholarship) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Scholarship info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">{scholarship.title || scholarship.name}</h2>
            <img
              src={scholarship.image}
              alt={scholarship.title || scholarship.name}
              className="w-full h-56 object-cover rounded mb-4"
              onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
            />
            <div className="mb-2">
              <strong>Category:</strong>{" "}
              {(scholarship.category || []).length > 0
                ? (scholarship.category || []).join(', ')
                : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Deadline:</strong>{" "}
              <span className="text-gray-700">
                {scholarship.deadline
                  ? new Date(scholarship.deadline).toLocaleDateString()
                  : 'N/A'}
              </span>
            </div>
            <div className="mb-2">
              <strong>Country:</strong> <span className="text-gray-700">{scholarship.country || 'N/A'}</span>
            </div>
            <div className="mb-2">
              <strong>Benefits:</strong> <span className="text-gray-700">{scholarship.benefits || 'N/A'}</span>
            </div>
            <div className="mb-2">
              <strong>Eligibility:</strong> <span className="text-gray-700">{scholarship.eligibilityCriteria || scholarship.eligibility || 'N/A'}</span>
            </div>
            <div className="mb-2">
              <strong>Required Documents:</strong>{" "}
              <span className="text-gray-700">
                {scholarship.documentsRequired ||
                  scholarship.requiredDocuments ||
                  scholarship.documents ||
                  'N/A'}
              </span>
            </div>
            <div className="mb-2">
              <strong>Description:</strong> <span className="text-gray-700">{scholarship.description || 'N/A'}</span>
            </div>
            <div className="mb-2">
              <strong>Official Link:</strong>{" "}
              {scholarship.officialLink || scholarship.link ? (
                <a
                  href={scholarship.officialLink || scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {scholarship.officialLink || scholarship.link}
                </a>
              ) : (
                <span className="text-gray-500">N/A</span>
              )}
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition"
            >
              Close
            </button>
          </div>
          {/* Modal Ad space */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
            <div className="bg-gray-200 h-24 rounded flex items-center justify-center">Ad A</div>
            <div className="bg-gray-200 h-24 rounded flex items-center justify-center">Ad B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FamScholarship = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchDatafrom = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/get/scholarship_data');
      setData(res.data);
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDatafrom();
  }, []);

  // Filter for famouse_scholarship category
  const famScholarships = data.filter(
    (scholarship) =>
      Array.isArray(scholarship.category) &&
      scholarship.category.includes('famouse_scholarship')
  );

  const handleViewDetails = (scholarship) => {
    setSelectedScholarship(scholarship);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      {/* Ads on the left for desktop, on top for mobile */}
      <div className="md:w-1/4 mb-6 md:mb-0">
        <Ads />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 text-center">Famous Scholarships</h1>
        {loading && <div className="text-center text-lg">Loading...</div>}
        {error && <div className="text-red-600 text-center">{error}</div>}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {famScholarships.length === 0 && !loading && !error && (
            <div className="col-span-full text-center text-gray-500">No famous scholarships found.</div>
          )}
          {famScholarships.map((scholarship) => (
            <div key={scholarship.id || scholarship._id} className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <img
                src={scholarship.image}
                alt={scholarship.title || scholarship.name}
                className="h-32 w-full object-contain mb-4 rounded"
                onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
              />
              <h2 className="font-semibold text-lg mb-2 text-center">{scholarship.title || scholarship.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {(scholarship.category || []).map((cat, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <button
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => handleViewDetails(scholarship)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Scholarship Detail Modal */}
      <ScholarshipDetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        scholarship={selectedScholarship}
      />
    </div>
  );
};

export default FamScholarship;