import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateLaunch() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [launchData, setLaunchData] = useState({
    launchName: "",
    targetDate: "",
    productArea: "",
    primaryPM: "",
    template: "major-feature",
  });

  const steps = [
    { id: 0, label: "Launch Brief", status: "current" },
    { id: 1, label: "Upload PRD", status: "upcoming" },
    { id: 2, label: "Analyze PRD", status: "upcoming" },
    { id: 3, label: "Generate Plan", status: "upcoming" },
    { id: 4, label: "SLA & Timeline", status: "upcoming" },
    { id: 5, label: "Review & Confirm", status: "upcoming" },
  ];

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "upcoming";
  };

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      // Last step - create launch and navigate to new launch dashboard
      // In a real app, this would create the launch and get the ID
      // For now, navigate to the first launch
      navigate("/launch/launch-1/dashboard");
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="create-launch-container">
      {/* Progress Bar */}
      <div className="create-launch-header">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 10,
          }}
        >
          ← Back to Portfolio
        </button>
        <div className="progress-bar-container">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          <div className="progress-steps">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`progress-step ${getStepStatus(step.id)}`}
                onClick={() =>
                  step.id <= currentStep && setCurrentStep(step.id)
                }
              >
                <div className="progress-step-circle">
                  {getStepStatus(step.id) === "completed" ? (
                    <span>✓</span>
                  ) : (
                    <span>{step.id + 1}</span>
                  )}
                </div>
                <div className="progress-step-label">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="create-launch-content">
        {currentStep === 0 && (
          <Step0LaunchBrief
            launchData={launchData}
            setLaunchData={setLaunchData}
          />
        )}
        {currentStep === 1 && <Step1UploadPRD />}
        {currentStep === 2 && <Step2AnalyzePRD />}
        {currentStep === 3 && <Step3GeneratePlan />}
        {currentStep === 4 && <Step4SLATimeline />}
        {currentStep === 5 && <Step5ReviewConfirm launchData={launchData} />}
      </div>

      {/* Navigation */}
      <div className="create-launch-footer">
        <button
          className="btn btn-secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          ← Back
        </button>
        <button className="btn btn-primary" onClick={nextStep}>
          {currentStep === steps.length - 1 ? "🚀 Create Launch" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// Step 0: Launch Brief
function Step0LaunchBrief({ launchData, setLaunchData }) {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Launch Brief</h2>
        <p className="step-subtitle">
          Give the agent context before parsing your PRD
        </p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label className="form-label">Launch Name *</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., Product v2.0 Launch"
            value={launchData.launchName}
            onChange={(e) =>
              setLaunchData({ ...launchData, launchName: e.target.value })
            }
          />
        </div>

        <div className="form-field">
          <label className="form-label">Target Launch Date *</label>
          <input
            type="date"
            className="form-input"
            value={launchData.targetDate}
            onChange={(e) =>
              setLaunchData({ ...launchData, targetDate: e.target.value })
            }
          />
        </div>

        <div className="form-field">
          <label className="form-label">Linked Product Area</label>
          <select className="form-input">
            <option>Core Product</option>
            <option>Mobile App</option>
            <option>API & Integrations</option>
            <option>Enterprise Features</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Primary PM *</label>
          <select className="form-input">
            <option>Alex Chen</option>
            <option>Priya Kumar</option>
            <option>Dan Sullivan</option>
            <option>Sarah Lee</option>
          </select>
        </div>

        <div className="form-field full-width">
          <label className="form-label">Stakeholder Teams</label>
          <div className="tag-container">
            <div className="tag">Engineering</div>
            <div className="tag">Design</div>
            <div className="tag">Marketing</div>
            <div className="tag">Sales</div>
            <div className="tag-add">+ Add Team</div>
          </div>
        </div>

        <div className="form-field full-width">
          <label className="form-label">Launch Template</label>
          <div className="template-grid">
            <div className="template-card active">
              <div className="template-icon">🚀</div>
              <div className="template-name">Major Feature Release</div>
              <div className="template-desc">
                Full GTM with marketing, sales enablement
              </div>
            </div>
            <div className="template-card">
              <div className="template-icon">🔧</div>
              <div className="template-name">Bugfix Release</div>
              <div className="template-desc">
                Quick fix with minimal coordination
              </div>
            </div>
            <div className="template-card">
              <div className="template-icon">⚡</div>
              <div className="template-name">Beta Launch</div>
              <div className="template-desc">
                Limited release to select customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 1: Upload PRD
function Step1UploadPRD() {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Upload PRD</h2>
        <p className="step-subtitle">
          Upload your PRD or import from connected tools
        </p>
      </div>

      <div className="upload-section">
        <div className="upload-dropzone">
          <div className="upload-icon-large">📄</div>
          <div className="upload-title">Drag & drop your PRD here</div>
          <div className="upload-subtitle">or click to browse</div>
          <div className="upload-formats">Supports .docx, .pdf, .md</div>
        </div>

        <div className="upload-divider">
          <span>or import from</span>
        </div>

        <div className="import-buttons">
          <button className="import-btn">
            <div className="import-icon">📁</div>
            <div>
              <div className="import-name">Google Drive</div>
              <div className="import-desc">Import from Drive</div>
            </div>
          </button>
          <button className="import-btn">
            <div className="import-icon">🔷</div>
            <div>
              <div className="import-name">Confluence</div>
              <div className="import-desc">Import from Confluence</div>
            </div>
          </button>
          <button className="import-btn">
            <div className="import-icon">◼️</div>
            <div>
              <div className="import-name">Notion</div>
              <div className="import-desc">Import from Notion</div>
            </div>
          </button>
        </div>

        <div className="upload-option">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>Auto-sync updates from this document</span>
          </label>
        </div>
      </div>
    </div>
  );
}

// Step 2: Analyze PRD
function Step2AnalyzePRD() {
  const [analyzing, setAnalyzing] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setAnalyzing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (analyzing) {
    return (
      <div className="step-container">
        <div className="analyzing-container">
          <div className="analyzing-spinner"></div>
          <h3 className="analyzing-title">Analyzing PRD...</h3>
          <div className="analyzing-stages">
            <div className="analyzing-stage active">
              📖 Reading product goals
            </div>
            <div className="analyzing-stage">🔍 Extracting requirements</div>
            <div className="analyzing-stage">🔗 Mapping dependencies</div>
            <div className="analyzing-stage">✨ Generating recommendations</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">PRD Analysis Complete</h2>
        <p className="step-subtitle">
          Review what the agent extracted from your document
        </p>
      </div>

      <div className="analysis-section">
        <div className="analysis-card">
          <h3 className="analysis-card-title">Extraction Summary</h3>
          <p className="analysis-text">
            Launch objective: Introduce Product v2.0 with automated timeline
            synchronization and enhanced collaboration tools. Key scope includes
            pricing updates, marketing campaign, and sales enablement. Primary
            dependencies: legal review completion, feature testing sign-off, and
            marketing asset approval.
          </p>
        </div>

        <div className="analysis-card">
          <h3 className="analysis-card-title">Key Requirements</h3>
          <div className="requirements-table">
            <div className="requirements-row header">
              <div>Requirement</div>
              <div>Priority</div>
              <div>Completeness</div>
            </div>
            <div className="requirements-row">
              <div>Marketing collateral creation</div>
              <div>
                <span className="priority-badge high">High</span>
              </div>
              <div>
                <span className="completeness-badge complete">100%</span>
              </div>
            </div>
            <div className="requirements-row">
              <div>Pricing page implementation</div>
              <div>
                <span className="priority-badge high">High</span>
              </div>
              <div>
                <span className="completeness-badge partial">85%</span>
              </div>
            </div>
            <div className="requirements-row">
              <div>Legal compliance review</div>
              <div>
                <span className="priority-badge critical">Critical</span>
              </div>
              <div>
                <span className="completeness-badge complete">100%</span>
              </div>
            </div>
            <div className="requirements-row">
              <div>Sales team training materials</div>
              <div>
                <span className="priority-badge medium">Medium</span>
              </div>
              <div>
                <span className="completeness-badge incomplete">45%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="analysis-card warning">
          <h3 className="analysis-card-title">⚠️ Missing Information</h3>
          <ul className="missing-info-list">
            <li>No success metrics found for post-launch measurement</li>
            <li>No assigned QA owner for final testing phase</li>
            <li>Rollback plan not specified</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Step 3: Generate Execution Plan
function Step3GeneratePlan() {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Agent-Generated Execution Plan</h2>
        <p className="step-subtitle">
          Review and adjust the recommended structure
        </p>
      </div>

      <div className="plan-section">
        <div className="plan-card">
          <h3 className="plan-card-title">
            <span>📋 Recommended Jira Structure</span>
            <span className="ai-badge">✨ AI Generated</span>
          </h3>

          <div className="jira-structure">
            <div className="jira-epic">
              <div className="jira-card-header">
                <span className="jira-type">Epic</span>
                <span>GTM-100: Product v2.0 Launch</span>
              </div>

              <div className="jira-stories">
                <div className="jira-story">
                  <div className="jira-card-header">
                    <span className="jira-type story">Story</span>
                    <span>GTM-101: Marketing Campaign</span>
                  </div>
                  <div className="jira-owner">
                    <span>Owner: Priya Kumar</span>
                    <span
                      className="ai-tooltip"
                      title="Chosen based on past Jira history"
                    >
                      ✨
                    </span>
                  </div>

                  <div className="jira-subtasks">
                    <div className="jira-subtask">
                      → Create social media assets
                    </div>
                    <div className="jira-subtask">→ Draft email campaign</div>
                    <div className="jira-subtask">→ Prepare blog post</div>
                  </div>
                </div>

                <div className="jira-story">
                  <div className="jira-card-header">
                    <span className="jira-type story">Story</span>
                    <span>GTM-102: Technical Implementation</span>
                  </div>
                  <div className="jira-owner">
                    <span>Owner: Dan Sullivan</span>
                    <span
                      className="ai-tooltip"
                      title="Chosen based on past Jira history"
                    >
                      ✨
                    </span>
                  </div>

                  <div className="jira-subtasks">
                    <div className="jira-subtask">→ Update pricing page</div>
                    <div className="jira-subtask">→ Feature testing</div>
                    <div className="jira-subtask">→ Documentation update</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="plan-card">
          <h3 className="plan-card-title">👥 Stakeholder Team Overview</h3>
          <div className="stakeholder-table">
            <div className="stakeholder-row header">
              <div>Team</div>
              <div>Members</div>
              <div>Role</div>
              <div>Actions</div>
            </div>
            <div className="stakeholder-row">
              <div>Engineering</div>
              <div>Dan Sullivan, 2 others</div>
              <div>Implementation</div>
              <div>
                <button className="btn-small btn-secondary">Reassign</button>
              </div>
            </div>
            <div className="stakeholder-row">
              <div>Marketing</div>
              <div>Priya Kumar, 1 other</div>
              <div>Campaign Lead</div>
              <div>
                <button className="btn-small btn-secondary">Reassign</button>
              </div>
            </div>
            <div className="stakeholder-row">
              <div>Design</div>
              <div>Sarah Lee</div>
              <div>Creative Assets</div>
              <div>
                <button className="btn-small btn-secondary">Reassign</button>
              </div>
            </div>
          </div>
        </div>

        <div className="plan-info">
          <span>ℹ️</span>
          <span>
            Preview only — these will be published to Jira as drafts in the
            final step
          </span>
        </div>
      </div>
    </div>
  );
}

// Step 4: SLA & Timeline
function Step4SLATimeline() {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">SLA & Timeline Setup</h2>
        <p className="step-subtitle">
          Configure accountability and monitoring rules
        </p>
      </div>

      <div className="sla-section">
        <div className="sla-card">
          <h3 className="sla-card-title">Timeline Overview</h3>
          <div className="mini-timeline">
            <div className="mini-timeline-item">
              <div className="mini-timeline-dot"></div>
              <div>
                <div className="mini-timeline-title">Pre-launch Review</div>
                <div className="mini-timeline-date">Oct 8, 2025</div>
              </div>
            </div>
            <div className="mini-timeline-item">
              <div className="mini-timeline-dot"></div>
              <div>
                <div className="mini-timeline-title">Legal Sign-off</div>
                <div className="mini-timeline-date">Oct 12, 2025</div>
              </div>
            </div>
            <div className="mini-timeline-item">
              <div className="mini-timeline-dot active"></div>
              <div>
                <div className="mini-timeline-title">🚀 Launch Day</div>
                <div className="mini-timeline-date">Oct 15, 2025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sla-card">
          <h3 className="sla-card-title">SLA Rules</h3>
          <div className="sla-table">
            <div className="sla-row header">
              <div>Stage</div>
              <div>SLA Rule</div>
              <div>Owner</div>
              <div>Editable</div>
            </div>
            <div className="sla-row">
              <div>QA Review</div>
              <div>48h max</div>
              <div>QA Team</div>
              <div>✅</div>
            </div>
            <div className="sla-row">
              <div>Design Handoff</div>
              <div>3d max</div>
              <div>Design Team</div>
              <div>✅</div>
            </div>
            <div className="sla-row">
              <div>Legal Review</div>
              <div>5d max</div>
              <div>Legal Team</div>
              <div>✅</div>
            </div>
            <div className="sla-row">
              <div>Marketing Approval</div>
              <div>2d max</div>
              <div>Marketing Lead</div>
              <div>✅</div>
            </div>
          </div>
          <button className="btn btn-secondary" style={{ marginTop: "16px" }}>
            + Add Custom SLA
          </button>
        </div>

        <div className="sla-info-banner">
          <span>💡</span>
          <div>
            <strong>Automated Monitoring:</strong> GTM Agent will automatically
            monitor these SLAs and send nudges via Slack or email when deadlines
            approach or are breached.
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 5: Review & Confirm
function Step5ReviewConfirm({ launchData }) {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Review & Confirm</h2>
        <p className="step-subtitle">
          Final review before creating your launch
        </p>
      </div>

      <div className="review-section">
        <div className="review-card">
          <h3 className="review-card-title">Launch Summary</h3>
          <div className="review-grid">
            <div className="review-item">
              <div className="review-label">Launch Name</div>
              <div className="review-value">Product v2.0 Launch</div>
            </div>
            <div className="review-item">
              <div className="review-label">Target Date</div>
              <div className="review-value">October 15, 2025</div>
            </div>
            <div className="review-item">
              <div className="review-label">Primary PM</div>
              <div className="review-value">Alex Chen</div>
            </div>
            <div className="review-item">
              <div className="review-label">Teams Involved</div>
              <div className="review-value">
                Engineering, Design, Marketing, Sales
              </div>
            </div>
          </div>
        </div>

        <div className="review-card">
          <h3 className="review-card-title">Generated Assets</h3>
          <div className="review-stats">
            <div className="review-stat">
              <div className="review-stat-value">1</div>
              <div className="review-stat-label">Epic</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-value">5</div>
              <div className="review-stat-label">Stories</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-value">18</div>
              <div className="review-stat-label">Subtasks</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-value">4</div>
              <div className="review-stat-label">SLA Rules</div>
            </div>
          </div>
        </div>

        <div className="review-card">
          <h3 className="review-card-title">Audit Log</h3>
          <div className="audit-log">
            <div className="audit-item">
              <span className="audit-icon">✨</span>
              <div>
                <div className="audit-text">
                  PRD analyzed and requirements extracted
                </div>
                <div className="audit-time">GTM Agent · 2 mins ago</div>
              </div>
            </div>
            <div className="audit-item">
              <span className="audit-icon">📋</span>
              <div>
                <div className="audit-text">
                  Execution plan generated from Confluence page 'PRD v1.2'
                </div>
                <div className="audit-time">GTM Agent · 1 min ago</div>
              </div>
            </div>
            <div className="audit-item">
              <span className="audit-icon">🎯</span>
              <div>
                <div className="audit-text">
                  SLA rules configured based on team history
                </div>
                <div className="audit-time">GTM Agent · Just now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="review-options">
          <label className="checkbox-label-large">
            <input type="checkbox" defaultChecked />
            <div>
              <div className="checkbox-label-title">Sync to Jira as Draft</div>
              <div className="checkbox-label-desc">
                Creates all epics and stories in draft mode for your review
              </div>
            </div>
          </label>
        </div>

        <div className="review-cta">
          <button className="btn btn-primary btn-large">
            🚀 Create Launch
          </button>
          <p className="review-cta-note">
            Once created, GTM Agent will start monitoring your SLAs and provide
            automated updates
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateLaunch;
