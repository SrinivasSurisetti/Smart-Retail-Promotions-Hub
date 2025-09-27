import { useState } from "react";
import CampaignForm from "./CampaignForm";
import CampaignList from "./CampaignList";

function App() {
  const [campaigns, setCampaigns] = useState([]);

  const handleCampaignCreated = (newCampaign) => {
    setCampaigns((prevCampaigns) => [
      ...prevCampaigns,
      { ...newCampaign, id: prevCampaigns.length + 1 },
    ]);
  };

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="brand-badge" />
            <span className="brand-title">Smart Retail Promotions Hub</span>
          </div>
          <div className="actions">
            <a href="#create-campaign" className="btn btn-primary">
              New Campaign
            </a>
            <button className="btn btn-secondary" style={{ display: "none" }}>
              Export
            </button>
          </div>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <h3>Navigation</h3>
          <nav>
            <a href="#create-campaign">Create Campaign</a>
            <a href="#all-campaigns">All Campaigns</a>
          </nav>
        </aside>
        <main className="main-content">
          <div className="main-inner">
            <CampaignForm onCampaignCreated={handleCampaignCreated} />
            <CampaignList campaigns={campaigns} />
          </div>
        </main>
      </div>

      <footer
        className="container mt-8"
        style={{ textAlign: "center", color: "#6b7280", fontSize: 14 }}
      >
        Crafted UI with plain CSS for maximum compatibility.
      </footer>
    </div>
  );
}

export default App;
