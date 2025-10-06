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
          {/* Notifications Carousel */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Action Items</h2>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                5 items require your attention
              </span>
            </div>
            <div className="notifications-carousel">
              <div className="notification-card urgent">
                <div className="notification-header">
                  <span className="notification-icon">⚠️</span>
                  <span className="notification-priority">Urgent</span>
                </div>
                <h3 className="notification-title">
                  Legal Review Deadline Approaching
                </h3>
                <p className="notification-description">
                  Terms of service updates need approval by Oct 12 (48h
                  remaining)
                </p>
                <div className="notification-footer">
                  <span className="notification-meta">
                    Sarah Johnson • Legal
                  </span>
                  <button className="notification-action">
                    View Details →
                  </button>
                </div>
              </div>

              <div className="notification-card warning">
                <div className="notification-header">
                  <span className="notification-icon">📋</span>
                  <span className="notification-priority">Needs Approval</span>
                </div>
                <h3 className="notification-title">
                  Marketing Assets Ready for Review
                </h3>
                <p className="notification-description">
                  3 communications drafts are pending your approval before
                  scheduled send
                </p>
                <div className="notification-footer">
                  <span className="notification-meta">Communications Hub</span>
                  <button className="notification-action">Review →</button>
                </div>
              </div>

              <div className="notification-card info">
                <div className="notification-header">
                  <span className="notification-icon">📊</span>
                  <span className="notification-priority">
                    Update Available
                  </span>
                </div>
                <h3 className="notification-title">PRD Updated in Linear</h3>
                <p className="notification-description">
                  2 changes detected in source document. Sync to update
                  execution plan.
                </p>
                <div className="notification-footer">
                  <span className="notification-meta">2 hours ago</span>
                  <button className="notification-action">Sync Now →</button>
                </div>
              </div>

              <div className="notification-card success">
                <div className="notification-header">
                  <span className="notification-icon">✅</span>
                  <span className="notification-priority">Completed</span>
                </div>
                <h3 className="notification-title">
                  QA Testing Sign-off Received
                </h3>
                <p className="notification-description">
                  All functional and performance tests passed. Ready for launch.
                </p>
                <div className="notification-footer">
                  <span className="notification-meta">Yesterday • QA Team</span>
                  <button className="notification-action">View Report →</button>
                </div>
              </div>

              <div className="notification-card info">
                <div className="notification-header">
                  <span className="notification-icon">👥</span>
                  <span className="notification-priority">Action Required</span>
                </div>
                <h3 className="notification-title">
                  Stakeholder Meeting Scheduled
                </h3>
                <p className="notification-description">
                  Final alignment meeting before launch - Oct 14 at 2:00 PM
                </p>
                <div className="notification-footer">
                  <span className="notification-meta">12 attendees</span>
                  <button className="notification-action">
                    Add to Calendar →
                  </button>
                </div>
              </div>
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
