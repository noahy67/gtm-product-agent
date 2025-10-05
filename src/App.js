import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PRDUpload from "./pages/PRDUpload";
import Timeline from "./pages/Timeline";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";
import CreateLaunch from "./pages/CreateLaunch";

function Sidebar() {
  const location = useLocation();
  const [selectedLaunch, setSelectedLaunch] = React.useState(
    "Product v2.0 Launch"
  );
  const [showDropdown, setShowDropdown] = React.useState(false);

  const launches = [
    "Product v2.0 Launch",
    "Q4 Marketing Campaign",
    "Mobile App Release",
    "Enterprise Feature Rollout",
  ];

  const navItems = [
    { path: "/", icon: "📊", label: "Dashboard" },
    { path: "/prd-upload", icon: "📄", label: "PRD Upload" },
    { path: "/timeline", icon: "📅", label: "Launch Timeline" },
    { path: "/communications", icon: "💬", label: "Communications" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">🚀</div>
          <span>GTM Agent</span>
        </div>

        <div style={{ marginTop: "16px", position: "relative" }}>
          <div
            className="launch-selector"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {selectedLaunch}
            </div>
            <span style={{ fontSize: "12px" }}>▼</span>
          </div>

          {showDropdown && (
            <div className="launch-dropdown">
              {launches.map((launch) => (
                <div
                  key={launch}
                  className="launch-dropdown-item"
                  onClick={() => {
                    setSelectedLaunch(launch);
                    setShowDropdown(false);
                  }}
                >
                  {launch}
                  {launch === selectedLaunch && (
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "var(--accent-blue)",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>
              ))}
              <div className="launch-dropdown-divider"></div>
              <Link
                to="/create-launch"
                className="launch-dropdown-item"
                style={{
                  color: "var(--accent-blue)",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onClick={() => setShowDropdown(false)}
              >
                <span>➕</span>
                <span>Create New Launch</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link
          to="/settings"
          className={`nav-item ${
            location.pathname === "/settings" ? "active" : ""
          }`}
          style={{ marginBottom: "8px" }}
        >
          <span className="nav-icon">⚙️</span>
          <span>Settings</span>
        </Link>

        <div className="profile-section">
          <div className="profile-avatar">PM</div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div className="profile-name">Product Manager</div>
            <div className="profile-email">pm@company.com</div>
          </div>
          <button className="profile-menu-btn">⋯</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-launch" element={<CreateLaunch />} />
            <Route path="/prd-upload" element={<PRDUpload />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
