import React, { useState } from "react";

function Communications() {
  const [activeTab, setActiveTab] = useState("standup");

  const tabs = [
    { id: "standup", label: "🧾 Standup Summary", icon: "🧾" },
    { id: "release", label: "📨 Release Notes", icon: "📨" },
    { id: "slack", label: "💬 Slack Nudges", icon: "💬" },
    { id: "loom", label: "🎥 Loom Videos", icon: "🎥" },
  ];

  const drafts = {
    standup: [
      {
        title: "Weekly GTM Standup - Oct 5",
        status: "Draft",
        content: `📊 **GTM Launch Status Update**

🟢 **On Track:**
- Marketing assets creation (75% complete)
- Blog post draft in final review
- Sales deck ready for distribution

🟡 **At Risk:**
- Legal review delayed, needs attention by Oct 12

🔴 **Blocked:**
- Feature testing behind schedule, impacting launch readiness

**Next Week Priorities:**
1. Complete legal review
2. Accelerate feature testing
3. Finalize pricing page updates`,
        recipients: "gtm-team@company.com",
      },
    ],
    release: [
      {
        title: "Product v2.0 Release Announcement",
        status: "Draft",
        content: `🚀 **Introducing Product v2.0**

We're excited to announce the launch of Product v2.0, bringing you powerful new features and improvements:

✨ **What's New:**
- Automated timeline synchronization
- Enhanced collaboration tools
- Real-time status tracking
- Improved analytics dashboard

🎯 **Key Benefits:**
- Save 10+ hours per week on manual updates
- Reduce launch coordination overhead by 50%
- Improve visibility across all stakeholders

📅 **Availability:** October 15, 2025
💰 **Early Adopter Discount:** 20% off for the first 100 customers

Learn more at our launch webinar on October 18th.`,
        recipients: "all-customers@company.com",
      },
    ],
    slack: [
      {
        title: "Legal Review Reminder",
        status: "Draft",
        content: `Hi @sarah 👋

Just a friendly reminder that the legal review for the GTM launch is due on Oct 12 (in 7 days).

Current status: 40% complete

Let me know if you need any support to get this over the finish line! 🎯`,
        recipients: "#gtm-launch",
      },
      {
        title: "Marketing Assets Ready",
        status: "Draft",
        content: `🎉 Great news team! Marketing assets are 75% complete and on track for the Oct 8 deadline.

Shoutout to @priya for the amazing work! 

Next up: Final review and approval this Friday.`,
        recipients: "#gtm-launch",
      },
    ],
    loom: [
      {
        title: "Product Demo Walkthrough",
        status: "Draft",
        content: `🎥 **Video Summary**

Key Points Covered:
• New feature overview and benefits
• User interface walkthrough
• Integration setup process
• Best practices for launch

Duration: 8:32
Intended Audience: Sales team, Customer success

**AI-Generated Description:**
"In this demo, we walk through the key features of our v2.0 launch, highlighting the automated timeline sync and collaboration improvements that will save teams hours each week."`,
        recipients: "sales-team@company.com, cs-team@company.com",
        videoUrl: "https://loom.com/share/demo123",
      },
      {
        title: "Launch Strategy Update",
        status: "Draft",
        content: `🎥 **Video Summary**

Topics Discussed:
• Timeline adjustments and rationale
• Risk mitigation strategies  
• Stakeholder communication plan
• Next steps and action items

Duration: 5:47
Intended Audience: GTM Team, Leadership

**AI-Generated Transcript Highlights:**
"We've identified three key risks that need immediate attention... The legal review timeline has been adjusted to account for the additional compliance requirements..."`,
        recipients: "#gtm-launch, leadership@company.com",
        videoUrl: "https://loom.com/share/demo456",
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="header-title">Communications Hub</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>🤖</span>
            Generate New Draft
          </button>
          <button className="btn btn-primary">
            <span>✉️</span>
            Compose
          </button>
        </div>
      </div>
      <div className="content">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div>
          {drafts[activeTab].map((draft, index) => (
            <div key={index} className="draft-card">
              <div className="draft-header">
                <div>
                  <div className="draft-title">{draft.title}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                    }}
                  >
                    To: {draft.recipients}
                  </div>
                </div>
                <div className="draft-status">{draft.status}</div>
              </div>
              <div className="draft-content">
                {draft.content.split("\n").map((line, i) => (
                  <div
                    key={i}
                    style={{ marginBottom: line === "" ? "8px" : "0" }}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="draft-actions">
                <button className="btn btn-success btn-small">
                  <span>✓</span>
                  Approve
                </button>
                <button className="btn btn-warning btn-small">
                  <span>✏️</span>
                  Edit
                </button>
                <button className="btn btn-danger btn-small">
                  <span>✗</span>
                  Reject
                </button>
                <button className="btn btn-secondary btn-small">
                  {activeTab === "slack"
                    ? "💬 Send via Slack"
                    : activeTab === "loom"
                    ? "🎥 Share Loom"
                    : "📧 Send via Gmail"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="section" style={{ marginTop: "24px" }}>
          <div className="section-header">
            <h2 className="section-title">Sent Communications</h2>
          </div>
          <div>
            {[
              {
                title: "Weekly Standup - Sep 28",
                type: "Standup",
                date: "Sep 28",
                recipients: "GTM Team",
              },
              {
                title: "PRD Review Complete",
                type: "Slack",
                date: "Sep 27",
                recipients: "#gtm-launch",
              },
              {
                title: "Launch Timeline Update",
                type: "Email",
                date: "Sep 25",
                recipients: "All Stakeholders",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  borderBottom:
                    index < 2 ? "1px solid var(--border-color)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div style={{ fontSize: "24px" }}>
                    {item.type === "Standup"
                      ? "🧾"
                      : item.type === "Slack"
                      ? "💬"
                      : "📧"}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {item.type} · To: {item.recipients} · {item.date}
                    </div>
                  </div>
                </div>
                <button className="btn btn-secondary btn-small">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Communications;
