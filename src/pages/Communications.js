import React, { useState } from "react";
import { useLaunchContext } from "../context/LaunchContext";

function Communications() {
  const { launch } = useLaunchContext();
  const [activeFilter, setActiveFilter] = useState("all");
  const [showPastCommunications, setShowPastCommunications] = useState(false);

  // All communications with timestamps
  const allCommunications = [
    {
      id: 1,
      type: "standup",
      title: "Weekly GTM Standup - Oct 12",
      status: "scheduled",
      scheduledDate: "2025-10-12T09:00:00",
      audience: "GTM Team (24 people)",
      channel: "Email + Slack",
      content: `📊 **GTM Launch Status Update**

🟢 **On Track:**
- Marketing assets creation (95% complete)
- Blog post finalized and approved
- Sales deck distributed to all teams

🟡 **At Risk:**
- Legal review still pending, escalated to leadership

🔴 **Completed:**
- Feature testing completed successfully
- All stakeholder approvals received

**Next Steps:**
- Final legal approval by Oct 14
- Go-live preparation begins Oct 15`,
      sources: [
        { type: "Jira", label: "GTM-142, GTM-156, GTM-189" },
        { type: "Google Sheets", label: "Launch Tracker Q4" },
        { type: "Slack", label: "#gtm-launch channel" },
      ],
      aiGenerated: true,
    },
    {
      id: 2,
      type: "release",
      title: "Product v2.0 Release Notes - Customer Announcement",
      status: "scheduled",
      scheduledDate: "2025-10-15T14:00:00",
      audience: "All Customers (5,240 contacts)",
      channel: "Email",
      content: `**Introducing Product v2.0 - Powerful New Features**

We're excited to announce the launch of Product v2.0, packed with features our customers have been asking for.

**What's New:**
- Priority micro-adjustments for better task management
- Enhanced collaboration tools
- Improved performance and reliability

**Getting Started:**
Visit our help center to learn more about these new features.

Best regards,
The Product Team`,
      sources: [
        { type: "PRD", label: "Product v2.0 PRD §3.1" },
        { type: "Confluence", label: "Release Notes Template" },
        { type: "Google Docs", label: "Customer Messaging Guide" },
      ],
      aiGenerated: true,
    },
    {
      id: 3,
      type: "slack",
      title: "Reminder: Legal Review Deadline Approaching",
      status: "scheduled",
      scheduledDate: "2025-10-10T16:00:00",
      audience: "Sarah Johnson (Legal)",
      channel: "Slack DM",
      content: `Hi Sarah 👋

Just a friendly reminder that the legal review for Product v2.0 launch materials is due by Oct 12.

Current status: ⚠️ In Review (48h remaining)

Documents pending review:
- Customer announcement email
- Terms of service updates
- Privacy policy changes

Let me know if you need any additional context!`,
      sources: [
        { type: "SLA Rules", label: "Legal Review - 3 days" },
        { type: "Jira", label: "GTM-203" },
      ],
      aiGenerated: true,
      automatedNudge: true,
    },
    {
      id: 5,
      type: "standup",
      title: "Weekly GTM Standup - Oct 5",
      status: "sent",
      sentDate: "2025-10-05T09:00:00",
      audience: "GTM Team (24 people)",
      channel: "Email + Slack",
      content: `📊 **GTM Launch Status Update**

🟢 **On Track:**
- Marketing assets creation (75% complete)
- Blog post draft in final review
- Sales deck ready for distribution

🟡 **At Risk:**
- Legal review delayed, needs attention by Oct 12

🔴 **Blocked:**
- Feature testing behind schedule, impacting launch readiness

**Next Steps:**
- Complete legal review
- Finalize blog post
- Begin sales enablement sessions`,
      sources: [
        { type: "Jira", label: "GTM-128, GTM-142, GTM-156" },
        { type: "Google Sheets", label: "Launch Tracker Q4" },
      ],
      aiGenerated: true,
    },
    {
      id: 6,
      type: "slack",
      title: "Feature Testing Complete - Ready for Launch",
      status: "sent",
      sentDate: "2025-10-04T15:30:00",
      audience: "Engineering Team",
      channel: "Slack #engineering",
      content: `Great news team! 🎉

All feature testing for Product v2.0 has been completed successfully. QA sign-off received.

**Test Results:**
✅ Functional testing: Pass
✅ Performance testing: Pass
✅ Security review: Pass
✅ Accessibility audit: Pass

We're cleared for launch on Oct 15!`,
      sources: [
        { type: "Jira", label: "GTM-189" },
        { type: "Confluence", label: "QA Test Results" },
      ],
      aiGenerated: true,
    },
    {
      id: 7,
      type: "release",
      title: "Internal Launch Announcement - Product v2.0",
      status: "sent",
      sentDate: "2025-10-03T10:00:00",
      audience: "All Employees (245 people)",
      channel: "Email",
      content: `Team,

We're thrilled to announce that Product v2.0 will launch on October 15th!

This release represents months of hard work and includes features our customers have been eagerly awaiting.

**Launch Timeline:**
- Oct 12: Final approvals
- Oct 13-14: Go-live preparation
- Oct 15: Public launch

Thank you all for your contributions to this milestone!`,
      sources: [
        { type: "PRD", label: "Product v2.0 PRD" },
        { type: "Google Docs", label: "Internal Comms Template" },
      ],
      aiGenerated: true,
    },
  ];

  const filterTypes = [
    { id: "all", label: "All Communications", icon: "📬" },
    { id: "standup", label: "Status Updates", icon: "🧾" },
    { id: "release", label: "Release Notes", icon: "📨" },
    {
      id: "slack",
      label: "Slack Messages",
      logo: "https://cdn.simpleicons.org/slack/E01E5A",
    },
  ];

  const getSourceLogo = (type) => {
    const logos = {
      Jira: "https://cdn.simpleicons.org/jira/0052CC",
      "Google Sheets": "https://cdn.simpleicons.org/googlesheets/34A853",
      Slack: "https://cdn.simpleicons.org/slack/E01E5A",
      PRD: null,
      Confluence: "https://cdn.simpleicons.org/confluence/172B4D",
      "Google Docs": "https://cdn.simpleicons.org/googledocs/4285F4",
      Figma: "https://cdn.simpleicons.org/figma/F24E1E",
      "SLA Rules": null,
      "Google Drive": "https://cdn.simpleicons.org/googledrive/4285F4",
      Notion: "https://cdn.simpleicons.org/notion/000000",
    };
    return logos[type];
  };

  const upcomingCommunications = allCommunications
    .filter((comm) => comm.status === "scheduled")
    .filter((comm) => activeFilter === "all" || comm.type === activeFilter)
    .sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));

  const pastCommunications = allCommunications
    .filter((comm) => comm.status === "sent")
    .filter((comm) => activeFilter === "all" || comm.type === activeFilter)
    .sort((a, b) => new Date(b.sentDate) - new Date(a.sentDate));

  const getTypeLabel = (type) => {
    const labels = {
      standup: "Status Update",
      release: "Release Notes",
      slack: "Slack Message",
    };
    return labels[type] || type;
  };

  const getTypeColor = (type) => {
    const colors = {
      standup: { bg: "rgba(59, 130, 246, 0.15)", color: "var(--accent-blue)" },
      release: { bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" },
      slack: { bg: "rgba(236, 72, 153, 0.15)", color: "#ec4899" },
    };
    return (
      colors[type] || { bg: "var(--bg-tertiary)", color: "var(--text-muted)" }
    );
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };
  };

  const getTimeRemaining = (scheduledDate) => {
    const now = new Date();
    const scheduled = new Date(scheduledDate);
    const diffMs = scheduled - now;

    if (diffMs < 0) return null;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    const remainingHours = diffHours % 24;
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffDays > 0) {
      return {
        text: `${diffDays}d ${remainingHours}h`,
        urgent: diffDays < 1,
        veryUrgent: false,
      };
    } else if (diffHours > 0) {
      return {
        text: `${diffHours}h ${diffMinutes}m`,
        urgent: diffHours < 24,
        veryUrgent: diffHours < 6,
      };
    } else {
      return {
        text: `${diffMinutes}m`,
        urgent: true,
        veryUrgent: true,
      };
    }
  };

  const CommunicationCard = ({ communication, isPast = false }) => {
    const typeColor = getTypeColor(communication.type);
    const dateTime = formatDateTime(
      isPast ? communication.sentDate : communication.scheduledDate
    );
    const timeRemaining = !isPast
      ? getTimeRemaining(communication.scheduledDate)
      : null;

    return (
      <div className="comm-card">
        <div className="comm-card-header">
          <div className="comm-card-header-left">
            <span
              className="comm-type-badge"
              style={{
                background: typeColor.bg,
                color: typeColor.color,
              }}
            >
              {getTypeLabel(communication.type)}
            </span>
          </div>
          <div className="comm-card-header-right">
            {!isPast && timeRemaining && (
              <span
                className={`comm-time-remaining ${
                  timeRemaining.veryUrgent
                    ? "very-urgent"
                    : timeRemaining.urgent
                    ? "urgent"
                    : ""
                }`}
              >
                <span className="comm-time-icon">⏱️</span>
                <span className="comm-time-text">
                  Sends in {timeRemaining.text}
                </span>
              </span>
            )}
          </div>
        </div>

        <h3 className="comm-card-title">{communication.title}</h3>

        <div className="comm-card-meta">
          <div className="comm-meta-item">
            <span className="comm-meta-icon">{isPast ? "✓" : "📅"}</span>
            <span>
              {isPast ? "Sent" : "Scheduled"}: {dateTime.date} at{" "}
              {dateTime.time}
            </span>
          </div>
          <div className="comm-meta-item">
            <span className="comm-meta-icon">👥</span>
            <span>{communication.audience}</span>
          </div>
          <div className="comm-meta-item">
            <span className="comm-meta-icon">📤</span>
            <span>{communication.channel}</span>
          </div>
          {communication.duration && (
            <div className="comm-meta-item">
              <span className="comm-meta-icon">⏱️</span>
              <span>{communication.duration}</span>
            </div>
          )}
        </div>

        <div className="comm-card-content">
          <pre className="comm-content-text">{communication.content}</pre>
        </div>

        <div className="comm-card-footer">
          <div className="comm-sources">
            <span className="comm-sources-label">Sources & Citations:</span>
            {communication.sources.map((source, idx) => {
              const logo = getSourceLogo(source.type);
              return (
                <span key={idx} className="comm-source-tag">
                  {logo && (
                    <img
                      src={logo}
                      alt={source.type}
                      className="comm-source-logo"
                    />
                  )}
                  <span className="comm-source-type">{source.type}</span>
                  <span className="comm-source-label">{source.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="comm-card-actions">
          <button className="btn btn-secondary btn-small">Edit</button>
          <button className="btn btn-primary btn-small">
            {isPast ? "Resend" : "Approve"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">
            Communications Hub — {launch?.name || "Launch"}
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
            <span>🤖</span>
            Generate New Draft
          </button>
          <button className="btn btn-primary">
            <span>📤</span>
            Send Communication
          </button>
        </div>
      </div>
      <div className="content">
        {/* Filter Bar */}
        <div className="comm-filter-bar">
          {filterTypes.map((filter) => (
            <button
              key={filter.id}
              className={`comm-filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.logo ? (
                <img
                  src={filter.logo}
                  alt={filter.label}
                  className="comm-filter-logo"
                />
              ) : (
                <span>{filter.icon}</span>
              )}
              <span>{filter.label}</span>
              {filter.id === "all" && (
                <span className="comm-filter-count">
                  {allCommunications.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Upcoming Communications */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">
              Upcoming Communications ({upcomingCommunications.length})
            </h2>
          </div>
          <div className="comm-cards-container">
            {upcomingCommunications.length > 0 ? (
              upcomingCommunications.map((comm) => (
                <CommunicationCard key={comm.id} communication={comm} />
              ))
            ) : (
              <div className="comm-empty-state">
                <div className="comm-empty-icon">📭</div>
                <div className="comm-empty-text">
                  No upcoming communications scheduled
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Past Communications */}
        <div className="section">
          <div
            className="comm-past-header"
            onClick={() => setShowPastCommunications(!showPastCommunications)}
          >
            <div className="comm-past-header-left">
              <span className="comm-past-icon">
                {showPastCommunications ? "▼" : "▶"}
              </span>
              <h2 className="section-title">
                Previous Communications ({pastCommunications.length})
              </h2>
            </div>
            <button className="btn btn-secondary btn-small">View All</button>
          </div>

          {showPastCommunications && (
            <div className="comm-cards-container">
              {pastCommunications.map((comm) => (
                <CommunicationCard key={comm.id} communication={comm} isPast />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Communications;
