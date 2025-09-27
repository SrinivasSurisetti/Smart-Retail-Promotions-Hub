import React from "react";

export default function CampaignList({ campaigns }) {
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
            {campaigns.map((c) => (
              <tr key={c.id}>
                <td style={{ fontWeight: 700 }}>{c.id}</td>
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
                      : "status-default"
                  }
                >
                  {c.Status}
                </td>
              </tr>
            ))}
            {campaigns.length === 0 && (
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
