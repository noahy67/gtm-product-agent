import React from "react";

function SLARules() {
  const slaRules = [
    {
      id: 1,
      team: "Engineering",
      rule: "Code Review",
      sla: "24 hours",
      priority: "High",
      status: "Active",
    },
    {
      id: 2,
      team: "Design",
      rule: "Design Handoff",
      sla: "3 days",
      priority: "High",
      status: "Active",
    },
    {
      id: 3,
      team: "QA",
      rule: "Testing Completion",
      sla: "48 hours",
      priority: "Critical",
      status: "Active",
    },
    {
      id: 4,
      team: "Marketing",
      rule: "Asset Creation",
      sla: "5 days",
      priority: "Medium",
      status: "Active",
    },
    {
      id: 5,
      team: "Legal",
      rule: "Legal Review",
      sla: "3 days",
      priority: "High",
      status: "Active",
    },
    {
      id: 6,
      team: "Product",
      rule: "PRD Approval",
      sla: "2 days",
      priority: "Critical",
      status: "Active",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return { bg: "rgba(239, 68, 68, 0.15)", color: "var(--accent-red)" };
      case "High":
        return {
          bg: "rgba(245, 158, 11, 0.15)",
          color: "var(--accent-yellow)",
        };
      case "Medium":
        return { bg: "rgba(59, 130, 246, 0.15)", color: "var(--accent-blue)" };
      default:
        return { bg: "var(--bg-tertiary)", color: "var(--text-muted)" };
    }
  };

  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">SLA Rules</h1>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              marginTop: "4px",
            }}
          >
            Service Level Agreement rules for all teams
          </div>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>📊</span>
            View Reports
          </button>
          <button className="btn btn-primary">
            <span>➕</span>
            Add SLA Rule
          </button>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Active SLA Rules</h2>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              {slaRules.length} rules configured
            </div>
          </div>

          <div className="sla-table">
            <div className="sla-table-header">
              <div className="sla-table-cell">Team</div>
              <div className="sla-table-cell">Rule Name</div>
              <div className="sla-table-cell">SLA</div>
              <div className="sla-table-cell">Priority</div>
              <div className="sla-table-cell">Status</div>
              <div className="sla-table-cell">Actions</div>
            </div>
            {slaRules.map((rule) => {
              const priorityStyle = getPriorityColor(rule.priority);
              return (
                <div key={rule.id} className="sla-table-row">
                  <div className="sla-table-cell">
                    <span className="team-badge">{rule.team}</span>
                  </div>
                  <div className="sla-table-cell">
                    <strong>{rule.rule}</strong>
                  </div>
                  <div className="sla-table-cell">{rule.sla}</div>
                  <div className="sla-table-cell">
                    <span
                      className="priority-badge"
                      style={{
                        background: priorityStyle.bg,
                        color: priorityStyle.color,
                      }}
                    >
                      {rule.priority}
                    </span>
                  </div>
                  <div className="sla-table-cell">
                    <span className="status-badge-active">{rule.status}</span>
                  </div>
                  <div className="sla-table-cell">
                    <button className="btn btn-secondary btn-small">
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SLA Performance Overview */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Performance Overview</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span>✅</span>
                <span>Compliance Rate</span>
              </div>
              <div className="stat-value">87%</div>
              <div className="stat-label">across all SLAs</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>⚠️</span>
                <span>At Risk (24h)</span>
              </div>
              <div className="stat-value">5</div>
              <div className="stat-label">items at risk</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>🚨</span>
                <span>Breaches (7d)</span>
              </div>
              <div className="stat-value">3</div>
              <div className="stat-label">SLA breaches</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span>⏱️</span>
                <span>Avg Response Time</span>
              </div>
              <div className="stat-value">18h</div>
              <div className="stat-label">average across teams</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SLARules;
