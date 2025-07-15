import React from "react";

const Ads = () => {
  return (
    <aside className="bg-gray-200 rounded shadow p-4 mb-6">
      <h2 className="text-lg font-bold mb-4 text-center">Sponsored Ads</h2>
      <div className="space-y-4">
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-700">Ad Space 1</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-700">Ad Space 2</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-sm text-gray-700">Ad Space 3</p>
        </div>
      </div>
    </aside>
  );
};

export default Ads;