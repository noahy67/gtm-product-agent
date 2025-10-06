import React from "react";
import { useNavigate } from "react-router-dom";
import { launches } from "../data/portfolioMock";

function LaunchesList() {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case "on_track":
        return { bg: "rgba(16, 185, 129, 0.15)", color: "var(--accent-green)" };
      case "at_risk":
        return {
          bg: "rgba(245, 158, 11, 0.15)",
          color: "var(--accent-yellow)",
        };
      case "delayed":
        return { bg: "rgba(239, 68, 68, 0.15)", color: "var(--accent-red)" };
      default:
        return { bg: "var(--bg-tertiary)", color: "var(--text-muted)" };
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="header">
        <h1 className="header-title">All Launches</h1>
        <div className="header-actions">
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
        <div className="launches-grid">
          {launches.map((launch) => {
            const statusStyle = getStatusColor(launch.status);
            return (
              <div
                key={launch.id}
                className="launch-card"
                onClick={() => navigate(`/launch/${launch.id}/dashboard`)}
              >
                <div className="launch-card-header">
                  <h3 className="launch-card-title">{launch.name}</h3>
                  <span
                    className="launch-status-badge"
                    style={{
                      background: statusStyle.bg,
                      color: statusStyle.color,
                    }}
                  >
                    {launch.status.replace("_", " ")}
                  </span>
                </div>
                {launch.productArea && (
                  <div className="launch-card-meta">
                    <span>📦</span>
                    <span>{launch.productArea}</span>
                  </div>
                )}
                {launch.goLiveDate && (
                  <div className="launch-card-meta">
                    <span>📅</span>
                    <span>Go-live: {formatDate(launch.goLiveDate)}</span>
                  </div>
                )}
                <div className="launch-card-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/launch/${launch.id}/timeline`);
                    }}
                  >
                    View Timeline
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/launch/${launch.id}/dashboard`);
                    }}
                  >
                    Open →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LaunchesList;
