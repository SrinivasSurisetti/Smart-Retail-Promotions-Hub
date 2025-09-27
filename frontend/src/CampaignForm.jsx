import React, { useState, useEffect } from "react";
import { API_BASE_URL, api_key } from "./apiConfig";

const initialForm = {
  Name: "",
  Description: "",
  StartDate: "",
  EndDate: "",
  DiscountType: "",
  DiscountValue: "",
  Status: "",
};

export default function CampaignForm({ onCampaignCreated }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch(`${API_BASE_URL}/campaigns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": api_key,
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed to create campaign");
      setForm(initialForm);
      setSuccess(true);
      if (onCampaignCreated) onCampaignCreated();
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <div>
          <h2 className="card-title">Create Campaign</h2>
          <p className="card-subtle">
            Fill in the details to launch your next promotion.
          </p>
        </div>
        <span className="badge">New</span>
      </div>
      <div className="form-field">
        <div className="label">Name</div>
        <input
          name="Name"
          value={form.Name}
          onChange={handleChange}
          required
          placeholder="e.g. Winter Sale 2025"
          className="input"
        />
      </div>
      <div className="form-field">
        <div className="label">Description</div>
        <textarea
          name="Description"
          value={form.Description}
          onChange={handleChange}
          required
          placeholder="What makes this campaign special?"
          className="textarea"
        />
      </div>
      <div className="form-grid form-grid-2">
        <div className="form-field">
          <div className="label">Start Date</div>
          <input
            type="date"
            name="StartDate"
            value={form.StartDate}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-field">
          <div className="label">End Date</div>
          <input
            type="date"
            name="EndDate"
            value={form.EndDate}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
      </div>
      <div className="form-grid form-grid-2">
        <div className="form-field">
          <div className="label">Discount Type</div>
          <select
            name="DiscountType"
            value={form.DiscountType}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="">Select</option>
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>
        <div className="form-field">
          <div className="label">Discount Value</div>
          <input
            name="DiscountValue"
            value={form.DiscountValue}
            onChange={handleChange}
            required
            placeholder="e.g. 20"
            className="input"
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label">Status</div>
        <select
          name="Status"
          value={form.Status}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      {error && <div className="alert error">{error}</div>}
      {success && (
        <div className="alert success">Campaign created successfully!</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary"
        style={{ marginTop: 8 }}
      >
        {loading ? "Saving..." : "Create Campaign"}
      </button>
    </form>
  );
}
