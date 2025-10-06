// Type definitions for portfolio data structures
// Note: These are JSDoc comments for documentation purposes in a JavaScript project

/**
 * @typedef {string} LaunchId
 */

/**
 * @typedef {Object} LaunchMeta
 * @property {LaunchId} id
 * @property {string} name
 * @property {string} [productArea]
 * @property {string} [goLiveDate] - ISO date string
 * @property {"on_track" | "at_risk" | "delayed"} status
 */

/**
 * @typedef {Object} PortfolioKPIs
 * @property {number} onTimeRate - 0..1
 * @property {number} slaRisksNext72h
 * @property {number} pendingApprovals
 * @property {number} blockers
 */

/**
 * @typedef {Object} TimelinePhase
 * @property {string} name
 * @property {string} start
 * @property {string} end
 * @property {"on_track" | "at_risk" | "delayed"} status
 */

/**
 * @typedef {Object} TimelineRow
 * @property {LaunchId} launchId
 * @property {string} launchName
 * @property {Array<TimelinePhase>} phases
 */

/**
 * @typedef {Object} HeatmapBreach
 * @property {LaunchId} launchId
 * @property {string} rule
 */

/**
 * @typedef {Object} HeatmapCell
 * @property {string} team
 * @property {string} weekStart
 * @property {number} metPct - 0..1
 * @property {Array<HeatmapBreach>} [topBreaches]
 */

/**
 * @typedef {Object} InboxItem
 * @property {string} id
 * @property {"approval" | "review" | "mention" | "blocked"} type
 * @property {string} title
 * @property {LaunchId} launchId
 * @property {string} launchName
 * @property {string} [dueAt]
 * @property {number} [slaTimeRemainingH]
 * @property {string} link - deep link
 */

/**
 * @typedef {Object} ChangeEntry
 * @property {string} id
 * @property {LaunchId} launchId
 * @property {string} launchName
 * @property {"date_shift" | "scope" | "owner" | "sla"} changeType
 * @property {string} [before]
 * @property {string} [after]
 * @property {string} sourceLabel - e.g., 'PRD §3.2' or 'Jira EP-142'
 * @property {string} timestamp
 */

// Export empty object to make this a module
export {};
