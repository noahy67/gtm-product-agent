import React from "react";
import { useNavigate } from "react-router-dom";
import { timelineRows, changes } from "../data/portfolioMock";

function GlobalDashboard() {
  const navigate = useNavigate();

  // Mock notification counts per launch
  const notificationCounts = {
    "launch-1": 5,
    "launch-2": 2,
    "launch-3": 8,
    "launch-4": 3,
  };

  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">Dashboard — Portfolio</h1>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              marginTop: "4px",
            }}
          >
            Scope: Portfolio
          </div>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>🔁</span>
            Sync All
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/create-launch")}
          >
            <span>➕</span>
            Create Launch
          </button>
        </div>
      </div>
      <div className="content">
        <div className="dashboard">
          {/* All Launches */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">All Launches</h2>
              <button
                className="btn btn-secondary btn-small"
                onClick={() => navigate("/launches")}
              >
                View Grid
              </button>
            </div>
            <div className="portfolio-timeline">
              {timelineRows.map((row) => {
                const notificationCount = notificationCounts[row.launchId] || 0;
                return (
                  <div
                    key={row.launchId}
                    className="portfolio-timeline-row"
                    onClick={() =>
                      navigate(`/launch/${row.launchId}/dashboard`)
                    }
                  >
                    {notificationCount > 0 && (
                      <span className="notification-badge-left">
                        {notificationCount}
                      </span>
                    )}
                    <div className="portfolio-timeline-label">
                      <div className="portfolio-timeline-name">
                        {row.launchName}
                      </div>
                      <div className="portfolio-timeline-meta">
                        {row.phases.length} phases
                      </div>
                    </div>
                    <div className="portfolio-timeline-bars">
                      {row.phases.map((phase, idx) => (
                        <div
                          key={idx}
                          className="portfolio-timeline-phase"
                          style={{
                            background:
                              phase.status === "on_track"
                                ? "rgba(16, 185, 129, 0.2)"
                                : phase.status === "at_risk"
                                ? "rgba(245, 158, 11, 0.2)"
                                : "rgba(239, 68, 68, 0.2)",
                            borderLeft: `3px solid ${
                              phase.status === "on_track"
                                ? "#10b981"
                                : phase.status === "at_risk"
                                ? "#f59e0b"
                                : "#ef4444"
                            }`,
                          }}
                        >
                          <span className="portfolio-phase-name">
                            {phase.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What's Changed */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">What's Changed</h2>
              <button className="btn btn-secondary btn-small">View All</button>
            </div>
            <div className="changes-list">
              {changes.map((change) => (
                <div key={change.id} className="change-item">
                  <div className="change-icon">
                    {change.changeType === "date_shift"
                      ? "📅"
                      : change.changeType === "scope"
                      ? "🎯"
                      : change.changeType === "owner"
                      ? "👤"
                      : "⏱️"}
                  </div>
                  <div className="change-content">
                    <div className="change-title">
                      {change.launchName} ·{" "}
                      {change.changeType.replace("_", " ")}
                    </div>
                    <div className="change-diff">
                      {change.before && (
                        <span className="change-before">{change.before}</span>
                      )}
                      {change.before && " → "}
                      <span className="change-after">{change.after}</span>
                    </div>
                    <div className="change-meta">
                      {change.sourceLabel} ·{" "}
                      {new Date(change.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalDashboard;
