import React, { useState } from "react";
import { useLaunchContext } from "../context/LaunchContext";

function PRDUpload() {
  const { launch } = useLaunchContext();
  const [uploaded, setUploaded] = useState(true); // Show as already uploaded
  const [autoSync, setAutoSync] = useState(true);

  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-title">
            PRD Upload & Analysis — {launch?.name || "Launch"}
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
            <span>🔄</span>
            Sync Now
          </button>
          <button className="btn btn-primary">
            <span>📊</span>
            Re-analyze PRD
          </button>
        </div>
      </div>
      <div className="content">
        {uploaded ? (
          <>
            {/* PRD Source Info */}
            <div className="prd-source-banner">
              <div className="prd-source-left">
                <div className="prd-source-icon">📄</div>
                <div className="prd-source-info">
                  <div className="prd-source-title">
                    Linear example PRD: priority micro-adjust
                  </div>
                  <div className="prd-source-meta">
                    <span className="prd-source-badge">
                      <img
                        src="https://cdn.simpleicons.org/linear/5E6AD2"
                        alt="Linear"
                        style={{ width: "14px", height: "14px" }}
                      />
                      Linear
                    </span>
                    <span className="prd-source-divider">•</span>
                    <span>Last synced: 2 hours ago</span>
                    <span className="prd-source-divider">•</span>
                    <span className="prd-sync-status">
                      {autoSync ? "🟢 Auto-sync enabled" : "⚪ Manual sync"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prd-source-actions">
                <label className="prd-toggle">
                  <input
                    type="checkbox"
                    checked={autoSync}
                    onChange={(e) => setAutoSync(e.target.checked)}
                  />
                  <span className="prd-toggle-label">Auto-sync updates</span>
                </label>
                <button className="btn btn-secondary btn-small">
                  <span>🔗</span>
                  View in Linear
                </button>
                <button className="btn btn-secondary btn-small">
                  <span>⚙️</span>
                  Configure
                </button>
              </div>
            </div>

            {/* Sync Instructions */}
            {/* <div className="prd-sync-info">
              <div className="prd-sync-info-icon">💡</div>
              <div>
                <strong>How syncing works:</strong> When auto-sync is enabled,
                GTM Agent will automatically pull updates from your Linear PRD
                every hour. Manual sync pulls the latest version immediately.
                Changes are tracked in the timeline below.
              </div>
            </div> */}

            {/* PDF Viewer */}
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">PRD Document</h2>
                <div className="prd-document-actions">
                  <button className="btn btn-secondary btn-small">
                    <span>⬇️</span>
                    Download PDF
                  </button>
                  <button className="btn btn-secondary btn-small">
                    <span>🔍</span>
                    Search in document
                  </button>
                </div>
              </div>

              <div className="pdf-viewer-container">
                <iframe
                  src="/Linear example PRD_ priority micro-adjust.pdf"
                  className="pdf-viewer"
                  title="PRD Document"
                />
              </div>
            </div>

            {/* PRD Analysis Results */}
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">AI Analysis Summary</h2>
                <button className="btn btn-secondary btn-small">
                  View Full Report
                </button>
              </div>

              <div className="analysis-grid">
                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">🎯</span>
                    <span className="analysis-title">Objectives</span>
                  </div>
                  <ul className="analysis-list">
                    <li>
                      Improve priority setting experience for power users
                      through micro-adjustments
                    </li>
                    <li>
                      Enable fine-grained priority control without complexity
                    </li>
                    <li>Maintain simplicity for casual users</li>
                  </ul>
                </div>

                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">📋</span>
                    <span className="analysis-title">Key Requirements</span>
                  </div>
                  <ul className="analysis-list">
                    <li>4 core requirements identified</li>
                    <li>2 marked as high priority</li>
                    <li>All requirements have clear success criteria</li>
                  </ul>
                  <div className="analysis-status success">
                    ✓ All requirements complete
                  </div>
                </div>

                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">👥</span>
                    <span className="analysis-title">Stakeholders</span>
                  </div>
                  <ul className="analysis-list">
                    <li>Product Owner: Identified</li>
                    <li>Engineering Lead: Assigned</li>
                    <li>Design Lead: Assigned</li>
                    <li>QA Owner: Not found</li>
                  </ul>
                  <div className="analysis-status warning">
                    ⚠ 1 stakeholder missing
                  </div>
                </div>

                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">📊</span>
                    <span className="analysis-title">Success Metrics</span>
                  </div>
                  <ul className="analysis-list">
                    <li>User adoption rate: 15% power users</li>
                    <li>Priority adjustment frequency: Tracked</li>
                    <li>Feature discoverability: Measured</li>
                  </ul>
                  <div className="analysis-status success">
                    ✓ Metrics defined
                  </div>
                </div>

                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">🔗</span>
                    <span className="analysis-title">Dependencies</span>
                  </div>
                  <ul className="analysis-list">
                    <li>2 external dependencies found</li>
                    <li>Backend API updates required</li>
                    <li>No blocking dependencies</li>
                  </ul>
                  <div className="analysis-status success">
                    ✓ Dependencies mapped
                  </div>
                </div>

                <div className="analysis-card">
                  <div className="analysis-card-header">
                    <span className="analysis-icon">⚠️</span>
                    <span className="analysis-title">Risks & Gaps</span>
                  </div>
                  <ul className="analysis-list">
                    <li>Performance impact not quantified</li>
                    <li>Mobile experience not specified</li>
                    <li>Rollback strategy not defined</li>
                  </ul>
                  <div className="analysis-status error">
                    ⚠ 3 gaps identified
                  </div>
                </div>
              </div>
            </div>

            {/* Change History */}
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Document History</h2>
              </div>
              <div className="prd-history">
                <div className="prd-history-item">
                  <div className="prd-history-marker current"></div>
                  <div className="prd-history-content">
                    <div className="prd-history-title">
                      Current version synced
                    </div>
                    <div className="prd-history-meta">2 hours ago • Linear</div>
                  </div>
                </div>
                <div className="prd-history-item">
                  <div className="prd-history-marker"></div>
                  <div className="prd-history-content">
                    <div className="prd-history-title">
                      Success metrics updated
                    </div>
                    <div className="prd-history-meta">
                      Yesterday at 3:24 PM • Alex Chen
                    </div>
                  </div>
                </div>
                <div className="prd-history-item">
                  <div className="prd-history-marker"></div>
                  <div className="prd-history-content">
                    <div className="prd-history-title">
                      Requirements section revised
                    </div>
                    <div className="prd-history-meta">
                      Oct 3 at 11:15 AM • Sarah Lee
                    </div>
                  </div>
                </div>
                <div className="prd-history-item">
                  <div className="prd-history-marker"></div>
                  <div className="prd-history-content">
                    <div className="prd-history-title">
                      Initial PRD uploaded
                    </div>
                    <div className="prd-history-meta">
                      Oct 1 at 9:00 AM • Alex Chen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="section">
            <div className="upload-area" onClick={() => setUploaded(true)}>
              <div className="upload-icon">📄</div>
              <div className="upload-title">
                Upload PRD or Connect Google Docs
              </div>
              <div className="upload-subtitle">
                Drag and drop your PRD file here, or click to browse
              </div>
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                <button className="btn btn-secondary">Browse Files</button>
                <button className="btn btn-secondary">
                  Connect Google Docs
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PRDUpload;
