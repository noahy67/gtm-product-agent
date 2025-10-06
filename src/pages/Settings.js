import React from "react";

function Settings() {
  const integrations = [
    {
      name: "Jira",
      logo: "https://cdn.simpleicons.org/jira/0052CC",
      connected: true,
      description: "Create and manage epics, track issues",
      lastSync: "2 hours ago",
    },
    {
      name: "Google Sheets",
      logo: "https://cdn.simpleicons.org/googlesheets/34A853",
      connected: true,
      description: "Timeline management and tracking",
      lastSync: "5 minutes ago",
    },
    {
      name: "Slack",
      logo: "https://cdn.simpleicons.org/slack/E01E5A",
      connected: true,
      description: "Team notifications and updates",
      lastSync: "1 hour ago",
    },
    {
      name: "Gmail",
      logo: "https://cdn.simpleicons.org/gmail/EA4335",
      connected: true,
      description: "Email communications and drafts",
      lastSync: "30 minutes ago",
    },
    {
      name: "Loom",
      logo: "https://cdn.simpleicons.org/loom/625DF5",
      connected: true,
      description: "Video messages and walkthroughs",
      lastSync: "15 minutes ago",
    },
    {
      name: "Confluence",
      logo: "https://cdn.simpleicons.org/confluence/172B4D",
      connected: false,
      description: "Documentation and knowledge base",
      lastSync: null,
    },
    {
      name: "Google Calendar",
      logo: "https://cdn.simpleicons.org/googlecalendar/4285F4",
      connected: false,
      description: "Schedule milestones and meetings",
      lastSync: null,
    },
    {
      name: "Google Drive",
      logo: "https://cdn.simpleicons.org/googledrive/4285F4",
      connected: false,
      description: "Document storage and sharing",
      lastSync: null,
    },
    {
      name: "Notion",
      logo: "https://cdn.simpleicons.org/notion/000000",
      connected: false,
      description: "Documentation and project management",
      lastSync: null,
    },
    {
      name: "Linear",
      logo: "https://cdn.simpleicons.org/linear/5E6AD2",
      connected: false,
      description: "Issue tracking and project management",
      lastSync: null,
    },
  ];

  return (
    <>
      <div className="header">
        <h1 className="header-title">Settings & Integrations</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>🔄</span>
            Sync All
          </button>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Connected Integrations</h2>
          </div>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card">
                <div className="integration-header">
                  <div className="integration-icon">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="integration-logo"
                    />
                  </div>
                  <div className="integration-name">{integration.name}</div>
                </div>
                <div className="integration-status">
                  <span
                    className={`status-dot ${
                      !integration.connected ? "disconnected" : ""
                    }`}
                  ></span>
                  <span
                    style={{
                      color: integration.connected
                        ? "var(--accent-green)"
                        : "var(--text-muted)",
                    }}
                  >
                    {integration.connected ? "Connected" : "Not Connected"}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                    minHeight: "40px",
                  }}
                >
                  {integration.description}
                </div>
                {integration.connected && integration.lastSync && (
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      marginBottom: "16px",
                    }}
                  >
                    Last synced: {integration.lastSync}
                  </div>
                )}
                <div className="integration-actions">
                  {integration.connected ? (
                    <>
                      <button className="btn btn-secondary btn-small">
                        <span>⚙️</span>
                        Configure
                      </button>
                      <button className="btn btn-secondary btn-small">
                        <span>🔄</span>
                        Sync
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-primary btn-small">
                      <span>🔗</span>
                      Connect
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2 className="section-title">General Settings</h2>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Default Workspace
              </div>
              <select
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                <option>GTM Product Launch</option>
                <option>Q4 Marketing Campaign</option>
                <option>New Feature Release</option>
              </select>
            </div>

            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Notification Preferences
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Notify me when tasks are at risk",
                  "Daily standup summary email",
                  "Slack notifications for approvals",
                  "Weekly progress reports",
                ].map((pref, index) => (
                  <label
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px",
                      background: "var(--bg-tertiary)",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      defaultChecked={index < 2}
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span
                      style={{ fontSize: "14px", color: "var(--text-primary)" }}
                    >
                      {pref}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Auto-sync Interval
              </div>
              <select
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Every 30 minutes</option>
                <option>Every hour</option>
                <option>Manual only</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Team Members</h2>
            <button className="btn btn-primary btn-small">
              <span>+</span>
              Invite Member
            </button>
          </div>
          <div>
            {[
              {
                name: "Alex Chen",
                role: "Product Manager",
                email: "alex@company.com",
                avatar: "👤",
              },
              {
                name: "Priya Kumar",
                role: "Marketing Lead",
                email: "priya@company.com",
                avatar: "👤",
              },
              {
                name: "Dan Sullivan",
                role: "Engineering Lead",
                email: "dan@company.com",
                avatar: "👤",
              },
              {
                name: "Sarah Lee",
                role: "Design Lead",
                email: "sarah@company.com",
                avatar: "👤",
              },
            ].map((member, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  borderBottom:
                    index < 3 ? "1px solid var(--border-color)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div style={{ fontSize: "32px" }}>{member.avatar}</div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "var(--text-primary)",
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {member.role} · {member.email}
                    </div>
                  </div>
                </div>
                <button className="btn btn-secondary btn-small">Manage</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
