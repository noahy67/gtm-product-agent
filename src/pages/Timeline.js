import React, { useState } from "react";
import { useLaunchContext } from "../context/LaunchContext";

function Timeline() {
  const { launch } = useLaunchContext();
  const [viewMode, setViewMode] = useState("month");
  const [selectedTask, setSelectedTask] = useState(null);

  // Generate dates for the timeline (current month)
  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const dates = generateDates();

  // Task details for the floating panel
  const taskDetails = {
    11: {
      owner: "Alex Chen",
      role: "Product Manager",
      email: "alex@company.com",
      avatar: "AC",
      jiraTicket: "GTM-101",
      jiraUrl: "https://company.atlassian.net/browse/GTM-101",
      description:
        "Complete final review of the PRD with all stakeholders and ensure alignment on scope, timeline, and success metrics.",
      communications: [
        {
          type: "email",
          date: "Oct 3",
          message: "Sent PRD v3.0 for final review",
        },
        {
          type: "slack",
          date: "Oct 2",
          message: "Discussed timeline concerns with leadership",
        },
        {
          type: "loom",
          date: "Oct 1",
          message: "Recorded PRD walkthrough video (8:32)",
        },
      ],
      relatedDocs: [
        { name: "GTM Product Launch v2.0 PRD", type: "Google Docs", url: "#" },
        { name: "Launch Requirements", type: "Confluence", url: "#" },
      ],
    },
    12: {
      owner: "Alex Chen",
      role: "Product Manager",
      email: "alex@company.com",
      avatar: "AC",
      jiraTicket: "GTM-102",
      jiraUrl: "https://company.atlassian.net/browse/GTM-102",
      description:
        "Align all key stakeholders on launch strategy, messaging, and go-to-market approach.",
      communications: [
        {
          type: "email",
          date: "Oct 5",
          message: "Stakeholder sync meeting notes shared",
        },
        {
          type: "slack",
          date: "Oct 4",
          message: "Quick check-in on alignment status",
        },
      ],
      relatedDocs: [
        { name: "Stakeholder Matrix", type: "Google Sheets", url: "#" },
      ],
    },
    21: {
      owner: "Priya Kumar",
      role: "Marketing Lead",
      email: "priya@company.com",
      avatar: "PK",
      jiraTicket: "GTM-201",
      jiraUrl: "https://company.atlassian.net/browse/GTM-201",
      description:
        "Create comprehensive marketing assets including social media graphics, email templates, and web banners.",
      communications: [
        {
          type: "slack",
          date: "Oct 5",
          message: "Shared draft assets in #marketing channel",
        },
        {
          type: "email",
          date: "Oct 4",
          message: "Requested feedback on initial concepts",
        },
        {
          type: "loom",
          date: "Oct 3",
          message: "Design walkthrough with rationale (5:20)",
        },
      ],
      relatedDocs: [
        { name: "Marketing Assets - Draft v2", type: "Figma", url: "#" },
        { name: "Brand Guidelines", type: "Confluence", url: "#" },
        { name: "Launch Messaging Doc", type: "Google Docs", url: "#" },
      ],
    },
    22: {
      owner: "Sarah Lee",
      role: "Design Lead",
      email: "sarah@company.com",
      avatar: "SL",
      jiraTicket: "GTM-202",
      jiraUrl: "https://company.atlassian.net/browse/GTM-202",
      description:
        "Design and finalize the sales deck presentation with product screenshots and value propositions.",
      communications: [
        {
          type: "slack",
          date: "Oct 5",
          message: "First draft ready for review",
        },
        { type: "email", date: "Oct 3", message: "Gathered sales team input" },
      ],
      relatedDocs: [
        { name: "Sales Deck v1.0", type: "Google Slides", url: "#" },
        { name: "Product Screenshots", type: "Figma", url: "#" },
      ],
    },
    31: {
      owner: "Dan Sullivan",
      role: "Engineering Lead",
      email: "dan@company.com",
      avatar: "DS",
      jiraTicket: "GTM-301",
      jiraUrl: "https://company.atlassian.net/browse/GTM-301",
      description:
        "Implement and deploy the new pricing page with updated tiers and feature comparison.",
      communications: [
        { type: "slack", date: "Oct 5", message: "PR submitted for review" },
        {
          type: "email",
          date: "Oct 4",
          message: "Technical spec shared with team",
        },
        {
          type: "loom",
          date: "Oct 3",
          message: "Code walkthrough for pricing logic (12:15)",
        },
      ],
      relatedDocs: [
        { name: "Pricing Technical Spec", type: "Confluence", url: "#" },
        { name: "Pricing Calculator", type: "Google Sheets", url: "#" },
      ],
    },
    32: {
      owner: "Dan Sullivan",
      role: "Engineering Lead",
      email: "dan@company.com",
      avatar: "DS",
      jiraTicket: "GTM-302",
      jiraUrl: "https://company.atlassian.net/browse/GTM-302",
      description:
        "Complete end-to-end feature testing and resolve any critical bugs before launch.",
      communications: [
        {
          type: "slack",
          date: "Oct 5",
          message: "⚠️ 3 critical bugs found, working on fixes",
        },
        {
          type: "email",
          date: "Oct 4",
          message: "Test plan results - 70% complete",
        },
      ],
      relatedDocs: [
        { name: "QA Test Plan", type: "Confluence", url: "#" },
        { name: "Bug Tracker", type: "Jira", url: "#" },
      ],
    },
  };

  const timelineData = [
    {
      id: 1,
      title: "📄 PRD & Planning",
      type: "group",
      items: [
        {
          id: 11,
          title: "PRD Review & Finalization",
          startDay: 1,
          endDay: 5,
          status: "completed",
          owner: "Alex Chen",
        },
        {
          id: 12,
          title: "Stakeholder Alignment",
          startDay: 3,
          endDay: 7,
          status: "completed",
          owner: "Alex Chen",
        },
      ],
    },
    {
      id: 2,
      title: "🎨 Design & Creative",
      type: "group",
      items: [
        {
          id: 21,
          title: "Marketing Assets Creation",
          startDay: 5,
          endDay: 12,
          status: "on-track",
          owner: "Priya Kumar",
        },
        {
          id: 22,
          title: "Sales Deck Design",
          startDay: 8,
          endDay: 14,
          status: "on-track",
          owner: "Sarah Lee",
        },
        {
          id: 23,
          title: "Blog Post Draft",
          startDay: 10,
          endDay: 13,
          status: "on-track",
          owner: "Priya Kumar",
        },
      ],
    },
    {
      id: 3,
      title: "⚙️ Engineering & Product",
      type: "group",
      items: [
        {
          id: 31,
          title: "Pricing Page Update",
          startDay: 6,
          endDay: 14,
          status: "on-track",
          owner: "Dan Sullivan",
        },
        {
          id: 32,
          title: "Feature Testing",
          startDay: 8,
          endDay: 16,
          status: "at-risk",
          owner: "Dan Sullivan",
        },
        {
          id: 33,
          title: "Documentation Update",
          startDay: 12,
          endDay: 18,
          status: "pending",
          owner: "Alex Chen",
        },
      ],
    },
    {
      id: 4,
      title: "⚖️ Legal & Compliance",
      type: "group",
      items: [
        {
          id: 41,
          title: "Legal Review",
          startDay: 7,
          endDay: 16,
          status: "at-risk",
          owner: "Sarah Lee",
        },
        {
          id: 42,
          title: "Compliance Check",
          startDay: 14,
          endDay: 18,
          status: "pending",
          owner: "Sarah Lee",
        },
      ],
    },
    {
      id: 5,
      title: "🚀 Launch",
      type: "group",
      items: [
        {
          id: 51,
          title: "Pre-launch QA",
          startDay: 13,
          endDay: 15,
          status: "pending",
          owner: "Dan Sullivan",
        },
        {
          id: 52,
          title: "Go Live",
          startDay: 15,
          endDay: 15,
          status: "pending",
          owner: "All Team",
          milestone: true,
        },
        {
          id: 53,
          title: "Post-launch Monitoring",
          startDay: 15,
          endDay: 20,
          status: "pending",
          owner: "Dan Sullivan",
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "var(--accent-green)";
      case "on-track":
        return "var(--accent-blue)";
      case "at-risk":
        return "var(--accent-yellow)";
      case "pending":
        return "var(--text-muted)";
      default:
        return "var(--text-muted)";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "completed":
        return "rgba(16, 185, 129, 0.2)";
      case "on-track":
        return "rgba(59, 130, 246, 0.2)";
      case "at-risk":
        return "rgba(245, 158, 11, 0.2)";
      case "pending":
        return "rgba(107, 114, 128, 0.15)";
      default:
        return "rgba(107, 114, 128, 0.15)";
    }
  };

  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">
            Launch Roadmap — {launch?.name || "Launch"}
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
          <div className="view-mode-toggle">
            <button
              className={`view-mode-btn ${viewMode === "week" ? "active" : ""}`}
              onClick={() => setViewMode("week")}
            >
              Week
            </button>
            <button
              className={`view-mode-btn ${
                viewMode === "month" ? "active" : ""
              }`}
              onClick={() => setViewMode("month")}
            >
              Month
            </button>
            <button
              className={`view-mode-btn ${
                viewMode === "quarter" ? "active" : ""
              }`}
              onClick={() => setViewMode("quarter")}
            >
              Quarter
            </button>
          </div>
          <button className="btn btn-secondary">
            <span>↓</span>
            Export
          </button>
          <button className="btn btn-primary">
            <span>+</span>
            Add Task
          </button>
        </div>
      </div>
      <div className="content">
        <div className="roadmap-container">
          {/* Timeline Header */}
          <div className="roadmap-header">
            <div className="roadmap-sidebar-header">
              <div
                style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "var(--text-secondary)",
                }}
              >
                October 2025
              </div>
            </div>
            <div className="roadmap-timeline-header">
              {dates.map((day) => {
                const isToday = day === 5; // Mock today as Oct 5
                return (
                  <div
                    key={day}
                    className={`roadmap-date ${isToday ? "today" : ""}`}
                  >
                    <div className="roadmap-date-number">{day}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="roadmap-content">
            {timelineData.map((group) => (
              <div key={group.id} className="roadmap-group">
                <div className="roadmap-group-title">
                  <span>{group.title}</span>
                </div>
                {group.items.map((item) => (
                  <div key={item.id} className="roadmap-row">
                    <div className="roadmap-sidebar">
                      <div className="roadmap-task-info">
                        <div className="roadmap-task-title">{item.title}</div>
                        <div className="roadmap-task-meta">{item.owner}</div>
                      </div>
                    </div>
                    <div className="roadmap-timeline">
                      <div className="roadmap-timeline-grid">
                        {dates.map((day) => {
                          const isToday = day === 5; // Mock today as Oct 5
                          return (
                            <div 
                              key={day} 
                              className={`roadmap-grid-cell ${isToday ? "today" : ""}`}
                              style={isToday ? {
                                background: "rgba(191, 219, 254, 0.1)",
                              } : {}}
                            ></div>
                          );
                        })}
                      </div>
                      <div
                        className={`roadmap-bar ${
                          item.milestone ? "milestone" : ""
                        }`}
                        style={{
                          left: `${((item.startDay - 1) / 31) * 100}%`,
                          width: item.milestone
                            ? "auto"
                            : `${
                                ((item.endDay - item.startDay + 1) / 31) * 100
                              }%`,
                          background: item.milestone
                            ? "transparent"
                            : getStatusBg(item.status),
                          borderColor: getStatusColor(item.status),
                        }}
                        onClick={() =>
                          taskDetails[item.id] && setSelectedTask(item)
                        }
                      >
                        {item.milestone ? (
                          <div
                            className="milestone-marker"
                            style={{ borderColor: getStatusColor(item.status) }}
                          >
                            <div
                              className="milestone-dot"
                              style={{
                                background: getStatusColor(item.status),
                              }}
                            ></div>
                          </div>
                        ) : (
                          <div className="roadmap-bar-content">
                            <span className="roadmap-bar-label">
                              {item.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="section" style={{ marginTop: "24px" }}>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "16px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "rgba(16, 185, 129, 0.3)",
                  border: "1px solid var(--accent-green)",
                }}
              ></div>
              <span style={{ color: "var(--text-secondary)" }}>Completed</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "16px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "rgba(59, 130, 246, 0.3)",
                  border: "1px solid var(--accent-blue)",
                }}
              ></div>
              <span style={{ color: "var(--text-secondary)" }}>On Track</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "16px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "rgba(245, 158, 11, 0.3)",
                  border: "1px solid var(--accent-yellow)",
                }}
              ></div>
              <span style={{ color: "var(--text-secondary)" }}>At Risk</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "16px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "rgba(107, 114, 128, 0.2)",
                  border: "1px solid var(--text-muted)",
                }}
              ></div>
              <span style={{ color: "var(--text-secondary)" }}>Pending</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent-purple)",
                  border: "2px solid var(--accent-purple)",
                }}
              ></div>
              <span style={{ color: "var(--text-secondary)" }}>Milestone</span>
            </div>
          </div>
        </div>

        {/* Task Detail Panel */}
        {selectedTask && taskDetails[selectedTask.id] && (
          <>
            <div
              className="task-panel-overlay"
              onClick={() => setSelectedTask(null)}
            ></div>
            <div className="task-detail-panel">
              <div className="task-panel-header">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div className="task-panel-avatar">
                    {taskDetails[selectedTask.id].avatar}
                  </div>
                  <div>
                    <h3 className="task-panel-title">{selectedTask.title}</h3>
                    <div className="task-panel-subtitle">
                      {taskDetails[selectedTask.id].owner} ·{" "}
                      {taskDetails[selectedTask.id].role}
                    </div>
                  </div>
                </div>
                <button
                  className="task-panel-close"
                  onClick={() => setSelectedTask(null)}
                >
                  ✕
                </button>
              </div>

              <div className="task-panel-content">
                {/* Status Badge */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "6px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "500",
                      background: getStatusBg(selectedTask.status),
                      color: getStatusColor(selectedTask.status),
                      border: `1px solid ${getStatusColor(
                        selectedTask.status
                      )}`,
                    }}
                  >
                    {selectedTask.status === "completed"
                      ? "✓ Completed"
                      : selectedTask.status === "on-track"
                      ? "→ On Track"
                      : selectedTask.status === "at-risk"
                      ? "⚠ At Risk"
                      : "○ Pending"}
                  </div>
                </div>

                {/* Description */}
                <div className="task-panel-section">
                  <h4 className="task-panel-section-title">Description</h4>
                  <p className="task-panel-text">
                    {taskDetails[selectedTask.id].description}
                  </p>
                </div>

                {/* Stakeholder Info */}
                <div className="task-panel-section">
                  <h4 className="task-panel-section-title">Stakeholder</h4>
                  <div className="stakeholder-card">
                    <div className="stakeholder-info">
                      <div className="stakeholder-name">
                        {taskDetails[selectedTask.id].owner}
                      </div>
                      <div className="stakeholder-role">
                        {taskDetails[selectedTask.id].role}
                      </div>
                      <div className="stakeholder-email">
                        {taskDetails[selectedTask.id].email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Communications */}
                <div className="task-panel-section">
                  <h4 className="task-panel-section-title">
                    Recent Communications
                  </h4>
                  <div className="communication-list">
                    {taskDetails[selectedTask.id].communications.map(
                      (comm, idx) => (
                        <div key={idx} className="communication-item">
                          <div className="communication-icon">
                            {comm.type === "email"
                              ? "📧"
                              : comm.type === "slack"
                              ? "💬"
                              : "🎥"}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div className="communication-message">
                              {comm.message}
                            </div>
                            <div className="communication-date">
                              {comm.date}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Jira Link */}
                <div className="task-panel-section">
                  <h4 className="task-panel-section-title">Jira Ticket</h4>
                  <a
                    href={taskDetails[selectedTask.id].jiraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jira-link"
                  >
                    <span>🎯</span>
                    <span>{taskDetails[selectedTask.id].jiraTicket}</span>
                    <span style={{ marginLeft: "auto", fontSize: "12px" }}>
                      →
                    </span>
                  </a>
                </div>

                {/* Related Documents */}
                <div className="task-panel-section">
                  <h4 className="task-panel-section-title">
                    Related Documents
                  </h4>
                  <div className="document-list">
                    {taskDetails[selectedTask.id].relatedDocs.map(
                      (doc, idx) => (
                        <a key={idx} href={doc.url} className="document-item">
                          <span>📄</span>
                          <div style={{ flex: 1 }}>
                            <div className="document-name">{doc.name}</div>
                            <div className="document-type">{doc.type}</div>
                          </div>
                          <span
                            style={{
                              fontSize: "12px",
                              color: "var(--text-muted)",
                            }}
                          >
                            →
                          </span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Timeline;
