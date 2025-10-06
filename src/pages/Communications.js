import React, { useState } from "react";
import { useLaunchContext } from "../context/LaunchContext";

function Communications() {
  const { launch } = useLaunchContext();
  const [activeTab, setActiveTab] = useState("standup");
  const [expandedCitations, setExpandedCitations] = useState({});
  const [showPreview, setShowPreview] = useState({});
  const [showActivityLog, setShowActivityLog] = useState({});
  const [showDiff, setShowDiff] = useState({});
  const [editingDraft, setEditingDraft] = useState({});
  const [editedContent, setEditedContent] = useState({});

  const tabs = [
    { id: "standup", label: "🧾 Standup Summary", icon: "🧾" },
    { id: "release", label: "📨 Release Notes", icon: "📨" },
    { id: "slack", label: "💬 Slack Nudges", icon: "💬" },
    { id: "loom", label: "🎥 Loom Videos", icon: "🎥" },
    { id: "scheduled", label: "⏰ Scheduled", icon: "⏰" },
  ];

  const drafts = {
    standup: [
      {
        id: "standup-1",
        title: "Weekly GTM Standup - Oct 5",
        status: "Draft",
        recipients: "gtm-team@company.com",
        agentInfo: {
          generatedBy: "GTM Agent v2.1",
          generatedAt: "Oct 5, 2025 8:00 AM",
          trigger: "Scheduled: Every Friday at 8:00 AM",
          inputSources: ["Jira Board", "Timeline", "Slack #gtm-launch", "PRD v3.0"],
        },
        lines: [
          {
            text: "📊 **GTM Launch Status Update**",
            type: "header",
          },
          { text: "", type: "blank" },
          {
            text: "🟢 **On Track:**",
            type: "section",
          },
          {
            text: "- Marketing assets creation (75% complete)",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-201",
                url: "https://company.atlassian.net/browse/GTM-201",
                field: "Progress",
                value: "75%",
                timestamp: "Oct 5, 9:30 AM",
              },
              {
                source: "Figma",
                file: "Marketing Assets - Draft v2",
                url: "#",
                note: "12 of 16 assets completed",
                timestamp: "Oct 4, 3:20 PM",
              },
            ],
          },
          {
            text: "- Blog post draft in final review",
            type: "line",
            citations: [
              {
                source: "Google Docs",
                doc: "Launch Blog Post v3",
                url: "#",
                status: "In Review",
                reviewer: "Priya Kumar",
                timestamp: "Oct 4, 2:15 PM",
              },
            ],
          },
          {
            text: "- Sales deck ready for distribution",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-202",
                url: "https://company.atlassian.net/browse/GTM-202",
                status: "Done",
                timestamp: "Oct 3, 4:45 PM",
              },
              {
                source: "Slack",
                channel: "#gtm-launch",
                message: "Sales deck finalized and approved",
                author: "Sarah Lee",
                timestamp: "Oct 3, 5:00 PM",
              },
            ],
          },
          { text: "", type: "blank" },
          {
            text: "🟡 **At Risk:**",
            type: "section",
          },
          {
            text: "- Legal review delayed, needs attention by Oct 12",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-401",
                url: "https://company.atlassian.net/browse/GTM-401",
                dueDate: "Oct 12, 2025",
                progress: "40%",
                status: "At Risk",
                assignee: "Sarah Lee",
                timestamp: "Oct 5, 7:00 AM",
              },
              {
                source: "Slack",
                channel: "#legal",
                message: "Need additional time for compliance review",
                author: "Sarah Lee",
                timestamp: "Oct 4, 11:30 AM",
              },
            ],
          },
          { text: "", type: "blank" },
          {
            text: "🔴 **Blocked:**",
            type: "section",
          },
          {
            text: "- Feature testing behind schedule, impacting launch readiness",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-302",
                url: "https://company.atlassian.net/browse/GTM-302",
                status: "Blocked",
                blockedBy: "3 critical bugs",
                assignee: "Dan Sullivan",
                timestamp: "Oct 5, 6:15 AM",
              },
              {
                source: "GitHub",
                pr: "PR #456",
                url: "https://github.com/company/product/pull/456",
                status: "Changes Requested",
                reviewer: "Tech Lead",
                timestamp: "Oct 4, 8:00 PM",
              },
            ],
          },
          { text: "", type: "blank" },
          {
            text: "**Next Week Priorities:**",
            type: "section",
          },
          {
            text: "1. Complete legal review",
            type: "line",
            citations: [
              {
                source: "Timeline",
                task: "Legal Review",
                url: "#",
                dueDate: "Oct 12",
                owner: "Sarah Lee",
              },
            ],
          },
          {
            text: "2. Accelerate feature testing",
            type: "line",
            citations: [
              {
                source: "Timeline",
                task: "Feature Testing",
                url: "#",
                dueDate: "Oct 16",
                owner: "Dan Sullivan",
                riskLevel: "High",
              },
            ],
          },
          {
            text: "3. Finalize pricing page updates",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-301",
                url: "https://company.atlassian.net/browse/GTM-301",
                status: "In Progress",
                progress: "60%",
                timestamp: "Oct 5, 7:30 AM",
              },
            ],
          },
        ],
        activityLog: [
          {
            step: 1,
            action: "Fetched Jira board",
            result: "Retrieved 12 active tickets for GTM launch",
            timestamp: "8:00:01 AM",
          },
          {
            step: 2,
            action: "Analyzed task statuses",
            result: "Identified 5 on-track, 1 at-risk, 1 blocked",
            timestamp: "8:00:03 AM",
          },
          {
            step: 3,
            action: "Checked Slack #gtm-launch",
            result: "Found 23 new messages since last update",
            timestamp: "8:00:05 AM",
          },
          {
            step: 4,
            action: "Cross-referenced with Timeline",
            result: "Verified due dates and dependencies",
            timestamp: "8:00:08 AM",
          },
          {
            step: 5,
            action: "Generated draft summary",
            result: "Categorized by status with citations",
            timestamp: "8:00:12 AM",
          },
          {
            step: 6,
            action: "Added next week priorities",
            result: "Prioritized based on risk and due dates",
            timestamp: "8:00:15 AM",
          },
        ],
        previousVersion: {
          title: "Weekly GTM Standup - Sep 28",
          date: "Sep 28, 2025",
        content: `📊 **GTM Launch Status Update**

🟢 **On Track:**
- Marketing assets creation (45% complete)
- PRD finalized and approved

🟡 **At Risk:**
- Sales deck design needs review

**Next Week Priorities:**
1. Accelerate marketing assets
2. Begin legal review
3. Start feature testing`,
        },
      },
    ],
    slack: [
      {
        id: "slack-1",
        title: "Legal Review Reminder",
        status: "Draft",
        recipients: "#gtm-launch",
        agentInfo: {
          generatedBy: "GTM Agent v2.1",
          generatedAt: "Oct 5, 2025 9:15 AM",
          trigger: "Automatic: Task 7 days from due date",
          inputSources: ["Jira GTM-401", "Timeline"],
        },
        lines: [
          {
            text: "Hi @sarah 👋",
            type: "line",
          },
          { text: "", type: "blank" },
          {
            text: "Just a friendly reminder that the legal review for the GTM launch is due on Oct 12 (in 7 days).",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-401",
                url: "https://company.atlassian.net/browse/GTM-401",
                dueDate: "Oct 12, 2025",
                assignee: "Sarah Lee",
              },
            ],
          },
          { text: "", type: "blank" },
          {
            text: "Current status: 40% complete",
            type: "line",
            citations: [
              {
                source: "Jira",
                ticket: "GTM-401",
                url: "https://company.atlassian.net/browse/GTM-401",
                field: "Progress",
                value: "40%",
                timestamp: "Oct 5, 7:00 AM",
              },
            ],
          },
          { text: "", type: "blank" },
          {
            text: "Let me know if you need any support to get this over the finish line! 🎯",
            type: "line",
          },
        ],
        activityLog: [
          {
            step: 1,
            action: "Detected task due in 7 days",
            result: "GTM-401 due Oct 12 (trigger condition met)",
            timestamp: "9:15:01 AM",
          },
          {
            step: 2,
            action: "Checked task progress",
            result: "40% complete, assigned to Sarah Lee",
            timestamp: "9:15:02 AM",
          },
          {
            step: 3,
            action: "Generated friendly reminder",
            result: "Personalized nudge with current status",
            timestamp: "9:15:05 AM",
          },
        ],
      },
    ],
    release: [],
    loom: [],
    scheduled: [
      {
        id: "sched-1",
        title: "Weekly GTM Status Update",
        schedule: "Every Friday at 8:00 AM",
        channel: "Email",
        recipients: "gtm-team@company.com",
        template: "Standup Summary",
        active: true,
        nextRun: "Oct 12, 2025 8:00 AM",
        lastRun: "Oct 5, 2025 8:00 AM",
      },
      {
        id: "sched-2",
        title: "At-Risk Task Nudges",
        schedule: "Daily at 9:00 AM",
        channel: "Slack",
        recipients: "#gtm-launch",
        template: "Task Reminder",
        active: true,
        nextRun: "Oct 6, 2025 9:00 AM",
        lastRun: "Oct 5, 2025 9:00 AM",
      },
      {
        id: "sched-3",
        title: "Launch Countdown",
        schedule: "Daily at 5:00 PM",
        channel: "Slack",
        recipients: "#gtm-launch",
        template: "Countdown Update",
        active: false,
        nextRun: "—",
        lastRun: "Oct 3, 2025 5:00 PM",
      },
    ],
  };

  const toggleCitation = (draftId, lineIndex) => {
    const key = `${draftId}-${lineIndex}`;
    setExpandedCitations(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePreview = (draftId) => {
    setShowPreview(prev => ({ ...prev, [draftId]: !prev[draftId] }));
  };

  const toggleActivityLog = (draftId) => {
    setShowActivityLog(prev => ({ ...prev, [draftId]: !prev[draftId] }));
  };

  const toggleDiff = (draftId) => {
    setShowDiff(prev => ({ ...prev, [draftId]: !prev[draftId] }));
  };

  const startEditing = (draftId, lines) => {
    setEditingDraft(prev => ({ ...prev, [draftId]: true }));
    setEditedContent(prev => ({ 
      ...prev, 
      [draftId]: lines ? lines.map(l => l.text).join('\n') : ''
    }));
  };

  const saveEdit = (draftId) => {
    setEditingDraft(prev => ({ ...prev, [draftId]: false }));
    // In a real app, this would save to backend
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

        {activeTab === "scheduled" ? (
          /* Scheduled Communications View */
          <div>
            <div style={{ 
              background: "var(--bg-secondary)", 
              padding: "16px", 
              borderRadius: "8px",
              marginBottom: "16px",
              border: "1px solid var(--border-color)"
            }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center" 
              }}>
                <div>
                  <div style={{ 
                    fontSize: "14px", 
                    fontWeight: "500", 
                    color: "var(--text-primary)" 
                  }}>
                    Scheduled Communications
                  </div>
                  <div style={{ 
                    fontSize: "12px", 
                    color: "var(--text-muted)", 
                    marginTop: "4px" 
                  }}>
                    Automate recurring updates and reminders
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-small"
                  onClick={() => alert('Create new schedule modal (to be implemented)')}
                >
                  <span>+</span>
                  New Schedule
                </button>
              </div>
            </div>

            {drafts.scheduled.map((sched, index) => (
              <div 
                key={sched.id} 
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "flex-start",
                  marginBottom: "16px"
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px",
                      marginBottom: "8px"
                    }}>
                      <h3 style={{ 
                        fontSize: "16px", 
                        fontWeight: "600", 
                        color: "var(--text-primary)",
                        margin: 0
                      }}>
                        {sched.title}
                      </h3>
                      <div style={{
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: "500",
                        background: sched.active ? "rgba(16, 185, 129, 0.1)" : "rgba(107, 114, 128, 0.1)",
                        color: sched.active ? "var(--accent-green)" : "var(--text-muted)",
                      }}>
                        {sched.active ? "Active" : "Inactive"}
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: "13px", 
                      color: "var(--text-secondary)",
                      marginBottom: "4px"
                    }}>
                      ⏰ {sched.schedule}
                    </div>
                    <div style={{ 
                      fontSize: "13px", 
                      color: "var(--text-secondary)" 
                    }}>
                      {sched.channel === "Email" ? "📧" : "💬"} {sched.recipients}
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-small">
                    Edit
                  </button>
                </div>

                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  padding: "12px",
                  background: "var(--bg-secondary)",
                  borderRadius: "6px",
                  fontSize: "12px"
                }}>
                  <div>
                    <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>
                      Next Run
                    </div>
                    <div style={{ color: "var(--text-primary)", fontWeight: "500" }}>
                      {sched.nextRun}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>
                      Last Run
                    </div>
                    <div style={{ color: "var(--text-primary)", fontWeight: "500" }}>
                      {sched.lastRun}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Draft Communications View */
        <div>
          {drafts[activeTab].map((draft, index) => (
              <div key={draft.id} className="draft-card" style={{ marginBottom: "24px" }}>
                {/* Agent Info Banner */}
                {draft.agentInfo && (
                  <div style={{
                    background: "var(--bg-secondary)",
                    padding: "12px 16px",
                    borderRadius: "8px 8px 0 0",
                    borderBottom: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}>
                    <div style={{ fontSize: "20px" }}>🤖</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: "12px", 
                        fontWeight: "600", 
                        color: "var(--text-primary)",
                        marginBottom: "4px"
                      }}>
                        Generated by {draft.agentInfo.generatedBy}
                      </div>
                      <div style={{ 
                        fontSize: "11px", 
                        color: "var(--text-muted)",
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap"
                      }}>
                        <span>⏰ {draft.agentInfo.generatedAt}</span>
                        <span>🔔 {draft.agentInfo.trigger}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Draft Header */}
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
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div className="draft-status">{draft.status}</div>
              </div>
                </div>

                {/* Sources Section */}
                {draft.agentInfo && (
                  <div style={{ 
                    padding: "12px 16px",
                    background: "var(--bg-secondary)",
                    borderBottom: "1px solid var(--border-color)",
                  }}>
                    <div style={{ 
                      fontSize: "11px", 
                      fontWeight: "600", 
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Sources Used
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {draft.agentInfo.inputSources.map((source, i) => (
                        <button
                    key={i}
                          onClick={() => alert(`Open ${source} (to be implemented)`)}
                          style={{
                            padding: "4px 10px",
                            background: "var(--bg-tertiary)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "12px",
                            fontSize: "11px",
                            color: "var(--text-primary)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            transition: "all 0.2s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.borderColor = "var(--accent-blue)";
                            e.target.style.background = "var(--bg-hover)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.borderColor = "var(--border-color)";
                            e.target.style.background = "var(--bg-tertiary)";
                          }}
                        >
                          {source.includes("Jira") ? "🎯" : 
                           source.includes("Slack") ? "💬" : 
                           source.includes("Timeline") ? "📅" : 
                           source.includes("PRD") ? "📄" : 
                           source.includes("Figma") ? "🎨" : 
                           source.includes("GitHub") ? "💻" : "📋"}
                          <span>{source}</span>
                          <span style={{ color: "var(--text-muted)" }}>→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons Row */}
                <div style={{ 
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border-color)",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap"
                }}>
                  {draft.activityLog && (
                    <button 
                      className="btn btn-secondary btn-small"
                      onClick={() => toggleActivityLog(draft.id)}
                      style={{
                        background: showActivityLog[draft.id] ? "var(--bg-hover)" : undefined,
                        borderColor: showActivityLog[draft.id] ? "var(--accent-blue)" : undefined,
                      }}
                    >
                      <span>🔍</span>
                      Activity Log
                    </button>
                  )}
                  {draft.previousVersion && (
                    <button 
                      className="btn btn-secondary btn-small"
                      onClick={() => toggleDiff(draft.id)}
                      style={{
                        background: showDiff[draft.id] ? "var(--bg-hover)" : undefined,
                        borderColor: showDiff[draft.id] ? "var(--accent-blue)" : undefined,
                      }}
                    >
                      <span>📊</span>
                      Show Diff
                    </button>
                  )}
                  <button 
                    className="btn btn-secondary btn-small"
                    onClick={() => togglePreview(draft.id)}
                  >
                    <span>{showPreview[draft.id] ? "📝" : "👁"}</span>
                    {showPreview[draft.id] ? "Show Citations" : "Preview"}
                  </button>
                </div>

                {/* Activity Log */}
                {showActivityLog[draft.id] && draft.activityLog && (
                  <div style={{ 
                    padding: "16px",
                    background: "var(--bg-secondary)",
                    borderBottom: "1px solid var(--border-color)",
                  }}>
                    <div style={{ 
                      fontSize: "13px", 
                      fontWeight: "600", 
                      color: "var(--text-primary)",
                      marginBottom: "12px"
                    }}>
                      Agent Activity Log
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {draft.activityLog.map((log, i) => (
                        <div 
                          key={i}
                          style={{
                            display: "flex",
                            gap: "12px",
                            padding: "10px",
                            background: "var(--bg-tertiary)",
                            borderRadius: "6px",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          <div style={{
                            minWidth: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: "var(--accent-blue)",
                            color: "#1a1a1a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: "600",
                            flexShrink: 0
                          }}>
                            {log.step}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ 
                              fontSize: "12px", 
                              fontWeight: "500", 
                              color: "var(--text-primary)",
                              marginBottom: "2px"
                            }}>
                              {log.action}
                            </div>
                            <div style={{ 
                              fontSize: "11px", 
                              color: "var(--text-muted)"
                            }}>
                              {log.result}
                            </div>
                          </div>
                          <div style={{ 
                            fontSize: "10px", 
                            color: "var(--text-muted)",
                            whiteSpace: "nowrap"
                          }}>
                            {log.timestamp}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Diff View */}
                {showDiff[draft.id] && draft.previousVersion && (
                  <div style={{ 
                    padding: "16px",
                    background: "var(--bg-secondary)",
                    borderBottom: "1px solid var(--border-color)",
                  }}>
                    <div style={{ 
                      fontSize: "13px", 
                      fontWeight: "600", 
                      color: "var(--text-primary)",
                      marginBottom: "12px"
                    }}>
                      Changes Since Last Update ({draft.previousVersion.date})
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                    }}>
                      <div>
                        <div style={{ 
                          fontSize: "11px", 
                          fontWeight: "600",
                          color: "var(--text-muted)",
                          marginBottom: "8px",
                          textTransform: "uppercase"
                        }}>
                          Previous ({draft.previousVersion.date})
                        </div>
                        <div style={{
                          padding: "12px",
                          background: "rgba(239, 68, 68, 0.05)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                          borderRadius: "6px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          whiteSpace: "pre-wrap",
                          color: "var(--text-secondary)",
                        }}>
                          {draft.previousVersion.content}
                        </div>
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: "11px", 
                          fontWeight: "600",
                          color: "var(--text-muted)",
                          marginBottom: "8px",
                          textTransform: "uppercase"
                        }}>
                          Current (Oct 5, 2025)
                        </div>
                        <div style={{
                          padding: "12px",
                          background: "rgba(16, 185, 129, 0.05)",
                          border: "1px solid rgba(16, 185, 129, 0.2)",
                          borderRadius: "6px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          whiteSpace: "pre-wrap",
                          color: "var(--text-secondary)",
                        }}>
                          {draft.lines ? draft.lines.map(l => l.text).join('\n') : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Draft Content */}
                <div className="draft-content" style={{ position: "relative" }}>
                  {showPreview[draft.id] ? (
                    /* Preview Mode - No Citations */
                    <div style={{ 
                      padding: "16px",
                      background: "var(--bg-secondary)",
                      borderRadius: "6px",
                      fontFamily: "system-ui"
                    }}>
                      {draft.lines && draft.lines.map((line, i) => (
                        <div
                          key={i}
                          style={{ 
                            marginBottom: line.type === "blank" ? "12px" : "4px",
                            fontSize: line.type === "header" ? "16px" : "13px",
                            fontWeight: line.type === "header" || line.type === "section" ? "600" : "400",
                            color: "var(--text-primary)",
                          }}
                        >
                          {line.text}
                        </div>
                      ))}
                    </div>
                  ) : editingDraft[draft.id] ? (
                    /* Edit Mode */
                    <textarea
                      value={editedContent[draft.id] || draft.lines.map(l => l.text).join('\n')}
                      onChange={(e) => setEditedContent(prev => ({ 
                        ...prev, 
                        [draft.id]: e.target.value 
                      }))}
                      style={{
                        width: "100%",
                        minHeight: "300px",
                        padding: "16px",
                        border: "2px solid var(--accent-blue)",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontFamily: "system-ui",
                        resize: "vertical",
                      }}
                    />
                  ) : (
                    /* Default Mode - With Citations */
                    draft.lines && draft.lines.map((line, i) => {
                      const citationKey = `${draft.id}-${i}`;
                      const isExpanded = expandedCitations[citationKey];
                      const hasCitations = line.citations && line.citations.length > 0;

                      return (
                        <div key={i}>
                          <div
                            style={{ 
                              marginBottom: line.type === "blank" ? "12px" : "4px",
                              fontSize: line.type === "header" ? "16px" : "13px",
                              fontWeight: line.type === "header" || line.type === "section" ? "600" : "400",
                              color: "var(--text-primary)",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              padding: hasCitations ? "6px 8px" : "0",
                              borderRadius: "4px",
                              cursor: hasCitations ? "pointer" : "default",
                              transition: "background 0.2s",
                              background: hasCitations && isExpanded ? "rgba(59, 130, 246, 0.05)" : "transparent",
                            }}
                            onClick={() => hasCitations && toggleCitation(draft.id, i)}
                            onMouseEnter={(e) => {
                              if (hasCitations) e.currentTarget.style.background = "rgba(59, 130, 246, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                              if (hasCitations && !isExpanded) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <span style={{ flex: 1 }}>{line.text}</span>
                            {hasCitations && (
                              <span style={{
                                fontSize: "10px",
                                background: "var(--accent-blue)",
                                color: "#1a1a1a",
                                padding: "2px 6px",
                                borderRadius: "10px",
                                fontWeight: "600",
                                flexShrink: 0
                              }}>
                                {line.citations.length}
                              </span>
                            )}
                          </div>

                          {/* Expanded Citations */}
                          {hasCitations && isExpanded && (
                            <div style={{
                              marginLeft: "16px",
                              marginTop: "8px",
                              marginBottom: "12px",
                              padding: "12px",
                              background: "var(--bg-secondary)",
                              border: "1px solid var(--border-color)",
                              borderRadius: "6px",
                            }}>
                              <div style={{ 
                                fontSize: "10px", 
                                fontWeight: "600",
                                color: "var(--text-muted)",
                                marginBottom: "8px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px"
                              }}>
                                Evidence & Citations
                              </div>
                              {line.citations.map((citation, ci) => (
                                <div 
                                  key={ci}
                                  style={{
                                    padding: "10px",
                                    background: "var(--bg-tertiary)",
                                    borderRadius: "4px",
                                    marginBottom: ci < line.citations.length - 1 ? "8px" : "0",
                                  }}
                                >
                                  <div style={{ 
                                    display: "flex", 
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "6px"
                                  }}>
                                    <div style={{ 
                                      fontSize: "11px", 
                                      fontWeight: "600",
                                      color: "var(--text-primary)"
                                    }}>
                                      {citation.source === "Jira" ? "🎯" : 
                                       citation.source === "Slack" ? "💬" : 
                                       citation.source === "GitHub" ? "💻" : 
                                       citation.source === "Figma" ? "🎨" : 
                                       citation.source === "Google Docs" ? "📄" : 
                                       citation.source === "Timeline" ? "📅" : "📋"} {citation.source}
                                    </div>
                                    <a
                                      href={citation.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        fontSize: "10px",
                                        color: "var(--accent-blue)",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                      }}
                                    >
                                      Open →
                                    </a>
                                  </div>
                                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                                    {citation.ticket && <div><strong>Ticket:</strong> {citation.ticket}</div>}
                                    {citation.pr && <div><strong>PR:</strong> {citation.pr}</div>}
                                    {citation.doc && <div><strong>Doc:</strong> {citation.doc}</div>}
                                    {citation.file && <div><strong>File:</strong> {citation.file}</div>}
                                    {citation.channel && <div><strong>Channel:</strong> {citation.channel}</div>}
                                    {citation.task && <div><strong>Task:</strong> {citation.task}</div>}
                                    {citation.field && <div><strong>Field:</strong> {citation.field} = {citation.value}</div>}
                                    {citation.status && <div><strong>Status:</strong> {citation.status}</div>}
                                    {citation.progress && <div><strong>Progress:</strong> {citation.progress}</div>}
                                    {citation.dueDate && <div><strong>Due:</strong> {citation.dueDate}</div>}
                                    {citation.assignee && <div><strong>Assignee:</strong> {citation.assignee}</div>}
                                    {citation.owner && <div><strong>Owner:</strong> {citation.owner}</div>}
                                    {citation.reviewer && <div><strong>Reviewer:</strong> {citation.reviewer}</div>}
                                    {citation.author && <div><strong>Author:</strong> {citation.author}</div>}
                                    {citation.message && <div><strong>Message:</strong> {citation.message}</div>}
                                    {citation.note && <div><strong>Note:</strong> {citation.note}</div>}
                                    {citation.blockedBy && <div><strong>Blocked By:</strong> {citation.blockedBy}</div>}
                                    {citation.riskLevel && <div><strong>Risk:</strong> {citation.riskLevel}</div>}
                                    <div style={{ marginTop: "4px", color: "var(--text-muted)", fontSize: "10px" }}>
                                      {citation.timestamp}
                                    </div>
                                  </div>
                  </div>
                ))}
              </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Draft Actions */}
              <div className="draft-actions">
                  {editingDraft[draft.id] ? (
                    <>
                      <button 
                        className="btn btn-success btn-small"
                        onClick={() => saveEdit(draft.id)}
                      >
                        <span>✓</span>
                        Save
                      </button>
                      <button 
                        className="btn btn-secondary btn-small"
                        onClick={() => setEditingDraft(prev => ({ ...prev, [draft.id]: false }))}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                <button className="btn btn-success btn-small">
                  <span>✓</span>
                  Approve
                </button>
                      <button 
                        className="btn btn-warning btn-small"
                        onClick={() => startEditing(draft.id, draft.lines)}
                      >
                  <span>✏️</span>
                  Edit
                </button>
                <button className="btn btn-danger btn-small">
                  <span>✗</span>
                  Reject
                </button>
                <button className="btn btn-secondary btn-small">
                        💬 Send via Slack
                      </button>
                      <button className="btn btn-secondary btn-small">
                        📧 Send via Email
                </button>
                    </>
                  )}
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Sent Communications */}
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
