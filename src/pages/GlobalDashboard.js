import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  portfolioKPIs,
  timelineRows,
  heatmap,
  inbox,
  changes,
} from "../data/portfolioMock";

function GlobalDashboard() {
  const navigate = useNavigate();
  const [activeInboxTab, setActiveInboxTab] = useState("approval");

  const getInboxItems = () => {
    if (activeInboxTab === "all") return inbox;
    return inbox.filter((item) => item.type === activeInboxTab);
  };

  const getHeatmapColor = (metPct) => {
    if (metPct >= 0.9) return "#10b981";
    if (metPct >= 0.75) return "#fef3c7";
    if (metPct >= 0.6) return "#fed7aa";
    return "#fecaca";
  };

  const formatTimeRemaining = (hours) => {
    if (!hours) return null;
    if (hours < 24) return `${hours}h`;
    return `${Math.floor(hours / 24)}d`;
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
          {/* KPI Row */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span>📈</span>
                <span>On-Time Launch Rate</span>
              </div>
              <div className="stat-value">
                {Math.round(portfolioKPIs.onTimeRate * 100)}%
              </div>
              <div className="stat-label">across all launches</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>⚠️</span>
                <span>SLA Risks (24-72h)</span>
              </div>
              <div className="stat-value">{portfolioKPIs.slaRisksNext72h}</div>
              <div className="stat-label">items at risk</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>📣</span>
                <span>Pending Approvals</span>
              </div>
              <div className="stat-value">{portfolioKPIs.pendingApprovals}</div>
              <div className="stat-label">awaiting your review</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>🚧</span>
                <span>Blockers</span>
              </div>
              <div className="stat-value">{portfolioKPIs.blockers}</div>
              <div className="stat-label">critical blockers</div>
            </div>
          </div>

          {/* Multi-Launch Timeline */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Multi-Launch Timeline</h2>
              <button
                className="btn btn-secondary btn-small"
                onClick={() => navigate("/launches")}
              >
                View All Launches
              </button>
            </div>
            <div className="portfolio-timeline">
              {timelineRows.map((row) => (
                <div
                  key={row.launchId}
                  className="portfolio-timeline-row"
                  onClick={() => navigate(`/launch/${row.launchId}/timeline`)}
                >
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
              ))}
            </div>
          </div>

          {/* SLA Health Heatmap */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">SLA Health Heatmap</h2>
              <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Team performance over recent weeks
              </div>
            </div>
            <div className="heatmap-container">
              <div className="heatmap-grid">
                <div className="heatmap-header">
                  <div className="heatmap-cell">Team</div>
                  <div className="heatmap-cell">Week 1</div>
                  <div className="heatmap-cell">Week 2</div>
                  <div className="heatmap-cell">Week 3</div>
                </div>
                {["Engineering", "Design", "Marketing", "QA", "Legal"].map(
                  (team) => {
                    const teamData = heatmap.filter(
                      (cell) => cell.team === team
                    );
                    return (
                      <div key={team} className="heatmap-row">
                        <div className="heatmap-label">{team}</div>
                        {teamData.map((cell, idx) => (
                          <div
                            key={idx}
                            className="heatmap-data-cell"
                            style={{ background: getHeatmapColor(cell.metPct) }}
                            title={`${Math.round(cell.metPct * 100)}% SLA met`}
                          >
                            {Math.round(cell.metPct * 100)}%
                          </div>
                        ))}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* My Work Inbox */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">My Work</h2>
            </div>
            <div className="tabs">
              {["approval", "review", "mention", "blocked"].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeInboxTab === tab ? "active" : ""}`}
                  onClick={() => setActiveInboxTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}s
                </button>
              ))}
            </div>
            <div className="inbox-list">
              {getInboxItems().map((item) => (
                <div
                  key={item.id}
                  className="inbox-item"
                  onClick={() => navigate(item.link)}
                >
                  <div className="inbox-icon">
                    {item.type === "approval"
                      ? "✓"
                      : item.type === "review"
                      ? "👁"
                      : item.type === "blocked"
                      ? "🚧"
                      : "💬"}
                  </div>
                  <div className="inbox-content">
                    <div className="inbox-title">{item.title}</div>
                    <div className="inbox-meta">
                      {item.launchName}
                      {item.slaTimeRemainingH && (
                        <span
                          className="inbox-sla"
                          style={{
                            color:
                              item.slaTimeRemainingH < 12
                                ? "var(--accent-red)"
                                : item.slaTimeRemainingH < 24
                                ? "var(--accent-yellow)"
                                : "var(--text-muted)",
                          }}
                        >
                          {" "}
                          · {formatTimeRemaining(item.slaTimeRemainingH)} left
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inbox-arrow">→</span>
                </div>
              ))}
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
