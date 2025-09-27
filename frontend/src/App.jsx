import { useState } from "react";
import CampaignForm from "./CampaignForm";
import CampaignList from "./CampaignList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleCampaignCreated = () => setRefresh((r) => !r);

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
        <main className="main">
          <section id="create-campaign">
            <CampaignForm onCampaignCreated={handleCampaignCreated} />
          </section>
          <section id="all-campaigns">
            <CampaignList refresh={refresh} />
          </section>
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
