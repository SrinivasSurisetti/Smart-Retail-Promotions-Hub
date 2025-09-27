import React, { useEffect, useState } from "react";
import { API_BASE_URL, api_key } from "./apiConfig";

export default function CampaignList({ refresh }) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCampaigns = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/campaigns`, {
        headers: { "x-api-key": api_key },
      });
      if (!response.ok) throw new Error("Failed to fetch campaigns");
      const data = await response.json();
      setCampaigns(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [refresh]);

  return (
    <div className="card">
      <div className="card-header" style={{ marginBottom: 16 }}>
        <div>
          <h2 className="card-title">All Campaigns</h2>
          <p className="card-subtle">
            Overview of every promotion you have created.
          </p>
        </div>
        <span className="badge">{new Date().toLocaleDateString()}</span>
      </div>

      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500 font-medium mb-4">{error}</div>}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Discount Type</th>
              <th>Discount Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, idx) => (
              <tr key={c.CampaignID || idx}>
                <td style={{ fontWeight: 700 }}>{c.CampaignID}</td>
                <td>{c.Name}</td>
                <td style={{ color: "#4b5563" }}>{c.Description}</td>
                <td>{c.StartDate}</td>
                <td>{c.EndDate}</td>
                <td style={{ textTransform: "capitalize" }}>
                  {c.DiscountType}
                </td>
                <td>{c.DiscountValue}</td>
                <td
                  className={
                    c.Status?.toLowerCase() === "active"
                      ? "status-active"
                      : c.Status?.toLowerCase() === "draft"
                      ? "status-draft"
                      : "status-default"
                  }
                >
                  {c.Status}
                </td>
              </tr>
            ))}
            {campaigns.length === 0 && !loading && !error && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center text-gray-500 py-8 italic"
                >
                  No campaigns found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
