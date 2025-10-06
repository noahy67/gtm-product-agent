import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import { LaunchContextProvider } from "./context/LaunchContext";
import { launches } from "./data/portfolioMock";
import GlobalDashboard from "./pages/GlobalDashboard";
import LaunchesList from "./pages/LaunchesList";
import LaunchDashboard from "./pages/LaunchDashboard";
import PRDUpload from "./pages/PRDUpload";
import Timeline from "./pages/Timeline";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";
import CreateLaunch from "./pages/CreateLaunch";

function UnifiedSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [launchesExpanded, setLaunchesExpanded] = React.useState(true);
  const [expandedLaunchId, setExpandedLaunchId] = React.useState(null);

  // Determine current launch from URL
  const currentLaunchId = location.pathname.match(/\/launch\/([^/]+)/)?.[1];

  React.useEffect(() => {
    if (currentLaunchId) {
      setExpandedLaunchId(currentLaunchId);
      setLaunchesExpanded(true);
    }
  }, [currentLaunchId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "on_track":
        return "#10b981";
      case "at_risk":
        return "#f59e0b";
      case "delayed":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "on_track":
        return "On Track";
      case "at_risk":
        return "At Risk";
      case "delayed":
        return "Delayed";
      default:
        return "Unknown";
    }
  };

  const filteredLaunches = launches;

  const toggleLaunch = (launchId) => {
    if (expandedLaunchId === launchId) {
      setExpandedLaunchId(null);
    } else {
      setExpandedLaunchId(launchId);
    }
  };

  const launchSubItems = [
    { path: "dashboard", icon: "📊", label: "Dashboard" },
    { path: "prd", icon: "📄", label: "PRD Upload" },
    { path: "timeline", icon: "📅", label: "Timeline" },
    { path: "communications", icon: "💬", label: "Communications" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">🚀</div>
          <span>GTM Agent</span>
        </div>
      </div>

      <nav className="nav notion-nav">
        {/* Portfolio Section */}
        <div className="nav-section">
          <div className="nav-section-label">PORTFOLIO</div>

          <Link
            to="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <span className="nav-icon">🏠</span>
            <span>Home / Dashboard</span>
          </Link>
        </div>

        {/* Launches Section */}
        <div className="nav-section">
          <div
            className="nav-item collapsible"
            onClick={() => setLaunchesExpanded(!launchesExpanded)}
          >
            <span className="nav-icon">{launchesExpanded ? "▼" : "▶"}</span>
            <span style={{ flex: 1 }}>Launches</span>
            <span className="badge">{launches.length}</span>
          </div>

          {launchesExpanded && (
            <div className="nav-submenu">
              {/* Launch List */}
              {filteredLaunches.map((launch) => (
                <div key={launch.id} className="launch-item-container">
                  <div
                    className={`nav-item launch-item ${
                      currentLaunchId === launch.id ? "active" : ""
                    }`}
                    onClick={() => {
                      toggleLaunch(launch.id);
                      navigate(`/launch/${launch.id}/dashboard`);
                    }}
                  >
                    <span className="nav-icon">
                      {expandedLaunchId === launch.id ? "▼" : "▶"}
                    </span>
                    <div className="launch-item-content">
                      <div className="launch-item-title">
                        <span className="launch-name">{launch.name}</span>
                      </div>
                      <span
                        className="status-chip"
                        style={{
                          background: `${getStatusColor(launch.status)}22`,
                          color: getStatusColor(launch.status),
                        }}
                      >
                        {getStatusLabel(launch.status)}
                      </span>
                    </div>
                  </div>

                  {/* Launch Sub-items */}
                  {expandedLaunchId === launch.id && (
                    <div className="launch-subitems">
                      {launchSubItems.map((item) => {
                        const fullPath = `/launch/${launch.id}/${item.path}`;
                        return (
                          <Link
                            key={item.path}
                            to={fullPath}
                            className={`nav-item sub-item ${
                              location.pathname === fullPath ? "active" : ""
                            }`}
                          >
                            <span className="nav-icon">{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* New Launch Button */}
              <button
                className="nav-item new-launch-btn"
                onClick={() => navigate("/create-launch")}
              >
                <span className="nav-icon">➕</span>
                <span>New Launch</span>
              </button>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="nav-section">
          <Link
            to="/settings"
            className={`nav-item ${
              location.pathname === "/settings" ? "active" : ""
            }`}
          >
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      <div className="sidebar-footer">
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

function AppLayout({ children }) {
  return (
    <div className="app">
      <UnifiedSidebar />
      <div className="main-content">{children}</div>
    </div>
  );
}

function LaunchRouteWrapper({ children }) {
  const { launchId } = useParams();

  return (
    <LaunchContextProvider launchId={launchId}>
      {children}
    </LaunchContextProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Global Routes */}
        <Route
          path="/"
          element={
            <AppLayout>
              <GlobalDashboard />
            </AppLayout>
          }
        />
        <Route
          path="/launches"
          element={
            <AppLayout>
              <LaunchesList />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
        <Route path="/create-launch" element={<CreateLaunch />} />

        {/* Launch-Scoped Routes */}
        <Route
          path="/launch/:launchId/dashboard"
          element={
            <AppLayout>
              <LaunchRouteWrapper>
                <LaunchDashboard />
              </LaunchRouteWrapper>
            </AppLayout>
          }
        />
        <Route
          path="/launch/:launchId/prd"
          element={
            <AppLayout>
              <LaunchRouteWrapper>
                <PRDUpload />
              </LaunchRouteWrapper>
            </AppLayout>
          }
        />
        <Route
          path="/launch/:launchId/timeline"
          element={
            <AppLayout>
              <LaunchRouteWrapper>
                <Timeline />
              </LaunchRouteWrapper>
            </AppLayout>
          }
        />
        <Route
          path="/launch/:launchId/communications"
          element={
            <AppLayout>
              <LaunchRouteWrapper>
                <Communications />
              </LaunchRouteWrapper>
            </AppLayout>
          }
        />

        {/* Redirect old routes to launch-scoped */}
        <Route
          path="/prd-upload"
          element={<RedirectToLaunch subRoute="prd" />}
        />
        <Route
          path="/timeline"
          element={<RedirectToLaunch subRoute="timeline" />}
        />
        <Route
          path="/communications"
          element={<RedirectToLaunch subRoute="communications" />}
        />
      </Routes>
    </Router>
  );
}

function RedirectToLaunch({ subRoute }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Redirect to first launch for backwards compatibility
    navigate(`/launch/launch-1/${subRoute}`);
  }, [navigate, subRoute]);
  return null;
}

export default App;
