import React from "react";
import { useLaunchContext } from "../context/LaunchContext";

function LaunchDashboard() {
  const { launch } = useLaunchContext();
  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">
            Dashboard — {launch?.name || "Launch"}
          </h1>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              marginTop: "4px",
            }}
          >
            Scope: {launch?.name || "Launch"}
          </div>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>🔁</span>
            Sync Updates
          </button>
          <button className="btn btn-primary">
            <span>➕</span>
            Upload PRD
          </button>
        </div>
      </div>
      <div className="content">
        <div className="dashboard">
          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span>✅</span>
                <span>Epics Created</span>
              </div>
              <div className="stat-value">24</div>
              <div className="stat-label">from Jira</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>⏱️</span>
                <span>Deadlines This Week</span>
              </div>
              <div className="stat-value">7</div>
              <div className="stat-label">from Google Sheets</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>⚠️</span>
                <span>Risks Flagged</span>
              </div>
              <div className="stat-value">3</div>
              <div className="stat-label">from Jira SLA checks</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>📣</span>
                <span>Pending Approvals</span>
              </div>
              <div className="stat-value">5</div>
              <div className="stat-label">awaiting review</div>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Launch Timeline</h2>
              <button className="btn btn-secondary btn-small">
                View Full Timeline
              </button>
            </div>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-header">Week 1</div>
                  <div className="timeline-bar green">Marketing Assets</div>
                  <div className="timeline-bar green">PRD Review</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-header">Week 2</div>
                  <div className="timeline-bar green">Blog Post Draft</div>
                  <div className="timeline-bar yellow">Pricing Update</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-header">Week 3</div>
                  <div className="timeline-bar yellow">Legal Review</div>
                  <div className="timeline-bar red">Feature Testing</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-header">Week 4</div>
                  <div className="timeline-bar green">Pre-launch QA</div>
                  <div className="timeline-bar green">Docs Update</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-header">Launch</div>
                  <div className="timeline-bar green">🚀 Go Live</div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "16px",
                fontSize: "13px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "2px",
                    background: "rgba(16, 185, 129, 0.5)",
                  }}
                ></div>
                <span style={{ color: "var(--text-secondary)" }}>On Track</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "2px",
                    background: "rgba(245, 158, 11, 0.5)",
                  }}
                ></div>
                <span style={{ color: "var(--text-secondary)" }}>At Risk</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "2px",
                    background: "rgba(239, 68, 68, 0.5)",
                  }}
                ></div>
                <span style={{ color: "var(--text-secondary)" }}>Delayed</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <div className="action-btn">
                <div className="action-icon">➕</div>
                <div className="action-title">Upload PRD</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Auto-trigger parsing
                </div>
              </div>
              <div className="action-btn">
                <div className="action-icon">🔁</div>
                <div className="action-title">Sync Updates</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Fetch latest statuses
                </div>
              </div>
              <div className="action-btn">
                <div className="action-icon">📄</div>
                <div className="action-title">Generate Summary</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Route for approval
                </div>
              </div>
              <div className="action-btn">
                <div className="action-icon">✉️</div>
                <div className="action-title">Draft Announcement</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Create new draft
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Recent Activity</h2>
            </div>
            <div>
              {[
                {
                  icon: "✅",
                  text: 'Epic "Marketing Campaign" created in Jira',
                  time: "2 hours ago",
                  user: "Alex Chen",
                },
                {
                  icon: "⚠️",
                  text: "Risk flagged: Legal review deadline at risk",
                  time: "4 hours ago",
                  user: "System",
                },
                {
                  icon: "📄",
                  text: 'PRD "Product v2.0" uploaded and processed',
                  time: "1 day ago",
                  user: "Priya Kumar",
                },
                {
                  icon: "✉️",
                  text: "Release announcement approved",
                  time: "1 day ago",
                  user: "Dan Sullivan",
                },
                {
                  icon: "🔁",
                  text: "Timeline synced with Google Sheets",
                  time: "2 days ago",
                  user: "System",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  style={{
                    padding: "16px",
                    borderBottom:
                      index < 4 ? "1px solid var(--border-color)" : "none",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{activity.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {activity.text}
                    </div>
                    <div
                      style={{ fontSize: "12px", color: "var(--text-muted)" }}
                    >
                      {activity.user} · {activity.time}
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

export default LaunchDashboard;
