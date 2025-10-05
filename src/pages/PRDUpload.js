import React, { useState } from "react";

function PRDUpload() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <>
      <div className="header">
        <h1 className="header-title">PRD Upload & Analysis</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <span>📁</span>
            Connect Google Docs
          </button>
        </div>
      </div>
      <div className="content">
        {!uploaded ? (
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
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                Supports PDF, DOCX, Google Docs
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Document Uploaded</h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div className="draft-status">✅ Processing Complete</div>
                </div>
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "var(--bg-tertiary)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ fontSize: "32px" }}>📄</div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "var(--text-primary)",
                    }}
                  >
                    GTM_Product_Launch_v2.0.pdf
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                    }}
                  >
                    Uploaded 2 minutes ago · 2.4 MB
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Extraction Summary</h2>
                <button className="btn btn-secondary btn-small">
                  Re-analyze
                </button>
              </div>
              <div className="extraction-grid">
                <div className="extraction-card">
                  <div className="extraction-label">Deliverables</div>
                  <div className="extraction-item">
                    <span>📱</span>
                    <span>Marketing Collateral</span>
                  </div>
                  <div className="extraction-item">
                    <span>💰</span>
                    <span>Pricing Update</span>
                  </div>
                  <div className="extraction-item">
                    <span>✍️</span>
                    <span>Blog Post</span>
                  </div>
                  <div className="extraction-item">
                    <span>📧</span>
                    <span>Email Campaign</span>
                  </div>
                  <div className="extraction-item">
                    <span>📄</span>
                    <span>Sales Deck</span>
                  </div>
                </div>

                <div className="extraction-card">
                  <div className="extraction-label">Milestones</div>
                  <div className="extraction-item">
                    <span>🎯</span>
                    <span>Pre-launch review (10/8)</span>
                  </div>
                  <div className="extraction-item">
                    <span>🚀</span>
                    <span>Launch (10/15)</span>
                  </div>
                  <div className="extraction-item">
                    <span>📊</span>
                    <span>Post-launch review (10/22)</span>
                  </div>
                  <div className="extraction-item">
                    <span>🎉</span>
                    <span>Marketing push (10/18)</span>
                  </div>
                </div>

                <div className="extraction-card">
                  <div className="extraction-label">Owners</div>
                  <div className="extraction-item">
                    <span>👤</span>
                    <span>Alex Chen (PM)</span>
                  </div>
                  <div className="extraction-item">
                    <span>👤</span>
                    <span>Priya Kumar (Marketing)</span>
                  </div>
                  <div className="extraction-item">
                    <span>👤</span>
                    <span>Dan Sullivan (Engineering)</span>
                  </div>
                  <div className="extraction-item">
                    <span>👤</span>
                    <span>Sarah Lee (Design)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Key Requirements</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Launch new pricing tier with 20% discount for early adopters",
                  "Create comprehensive marketing campaign across email, social, and blog",
                  "Update product documentation and help center",
                  "Coordinate with sales team for demo preparation",
                  "Set up analytics tracking for launch metrics",
                ].map((requirement, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "16px",
                      background: "var(--bg-tertiary)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div style={{ fontSize: "18px" }}>•</div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        lineHeight: "1.6",
                      }}
                    >
                      {requirement}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Next Steps</h2>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button className="btn btn-primary">
                  <span>✅</span>
                  Create Jira Epics + Google Sheet
                </button>
                <button className="btn btn-secondary">
                  <span>✏️</span>
                  Edit Extraction
                </button>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px",
                  background: "rgba(139, 92, 246, 0.1)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                }}
              >
                💡 This will create structured tasks in Jira and populate your
                launch timeline in Google Sheets with automatic owner
                assignments
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PRDUpload;
