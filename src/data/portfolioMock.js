export const launches = [
  {
    id: "launch-1",
    name: "Product v2.0 Launch",
    productArea: "Core Product",
    goLiveDate: "2025-10-15",
    status: "on_track",
  },
  {
    id: "launch-2",
    name: "Q4 Marketing Campaign",
    productArea: "Marketing",
    goLiveDate: "2025-11-01",
    status: "on_track",
  },
  {
    id: "launch-3",
    name: "Mobile App Release",
    productArea: "Mobile",
    goLiveDate: "2025-10-28",
    status: "at_risk",
  },
  {
    id: "launch-4",
    name: "Enterprise Feature Rollout",
    productArea: "Enterprise",
    goLiveDate: "2025-11-15",
    status: "delayed",
  },
];

export const portfolioKPIs = {
  onTimeRate: 0.75,
  slaRisksNext72h: 8,
  pendingApprovals: 12,
  blockers: 3,
};

export const timelineRows = [
  {
    launchId: "launch-1",
    launchName: "Product v2.0 Launch",
    phases: [
      {
        name: "Planning",
        start: "2025-10-01",
        end: "2025-10-05",
        status: "on_track",
      },
      {
        name: "Development",
        start: "2025-10-06",
        end: "2025-10-12",
        status: "on_track",
      },
      {
        name: "Launch",
        start: "2025-10-13",
        end: "2025-10-15",
        status: "on_track",
      },
    ],
  },
  {
    launchId: "launch-2",
    launchName: "Q4 Marketing Campaign",
    phases: [
      {
        name: "Planning",
        start: "2025-10-15",
        end: "2025-10-20",
        status: "on_track",
      },
      {
        name: "Execution",
        start: "2025-10-21",
        end: "2025-10-31",
        status: "on_track",
      },
      {
        name: "Launch",
        start: "2025-11-01",
        end: "2025-11-01",
        status: "on_track",
      },
    ],
  },
  {
    launchId: "launch-3",
    launchName: "Mobile App Release",
    phases: [
      {
        name: "Development",
        start: "2025-10-01",
        end: "2025-10-15",
        status: "on_track",
      },
      {
        name: "Testing",
        start: "2025-10-16",
        end: "2025-10-25",
        status: "at_risk",
      },
      {
        name: "Launch",
        start: "2025-10-26",
        end: "2025-10-28",
        status: "at_risk",
      },
    ],
  },
  {
    launchId: "launch-4",
    launchName: "Enterprise Feature Rollout",
    phases: [
      {
        name: "Planning",
        start: "2025-10-01",
        end: "2025-10-10",
        status: "delayed",
      },
      {
        name: "Development",
        start: "2025-10-11",
        end: "2025-11-05",
        status: "delayed",
      },
      {
        name: "Launch",
        start: "2025-11-06",
        end: "2025-11-15",
        status: "delayed",
      },
    ],
  },
];

export const heatmap = [
  { team: "Engineering", weekStart: "2025-10-01", metPct: 0.9 },
  { team: "Engineering", weekStart: "2025-10-08", metPct: 0.85 },
  {
    team: "Engineering",
    weekStart: "2025-10-15",
    metPct: 0.7,
    topBreaches: [{ launchId: "launch-3", rule: "Code Review SLA" }],
  },
  { team: "Design", weekStart: "2025-10-01", metPct: 1.0 },
  { team: "Design", weekStart: "2025-10-08", metPct: 0.95 },
  { team: "Design", weekStart: "2025-10-15", metPct: 0.9 },
  { team: "Marketing", weekStart: "2025-10-01", metPct: 0.8 },
  { team: "Marketing", weekStart: "2025-10-08", metPct: 0.75 },
  { team: "Marketing", weekStart: "2025-10-15", metPct: 0.85 },
  { team: "QA", weekStart: "2025-10-01", metPct: 0.9 },
  {
    team: "QA",
    weekStart: "2025-10-08",
    metPct: 0.6,
    topBreaches: [{ launchId: "launch-3", rule: "Testing SLA" }],
  },
  { team: "QA", weekStart: "2025-10-15", metPct: 0.7 },
  { team: "Legal", weekStart: "2025-10-01", metPct: 0.95 },
  { team: "Legal", weekStart: "2025-10-08", metPct: 0.85 },
  { team: "Legal", weekStart: "2025-10-15", metPct: 0.8 },
];

export const inbox = [
  {
    id: "inbox-1",
    type: "approval",
    title: "Marketing assets need approval",
    launchId: "launch-1",
    launchName: "Product v2.0 Launch",
    dueAt: "2025-10-10T17:00:00Z",
    slaTimeRemainingH: 24,
    link: "/launch/launch-1/communications",
  },
  {
    id: "inbox-2",
    type: "review",
    title: "PRD review pending",
    launchId: "launch-2",
    launchName: "Q4 Marketing Campaign",
    dueAt: "2025-10-12T17:00:00Z",
    slaTimeRemainingH: 48,
    link: "/launch/launch-2/prd",
  },
  {
    id: "inbox-3",
    type: "blocked",
    title: "Legal review blocking progress",
    launchId: "launch-3",
    launchName: "Mobile App Release",
    dueAt: "2025-10-08T17:00:00Z",
    slaTimeRemainingH: 6,
    link: "/launch/launch-3/dashboard",
  },
  {
    id: "inbox-4",
    type: "mention",
    title: "You were mentioned in timeline update",
    launchId: "launch-4",
    launchName: "Enterprise Feature Rollout",
    link: "/launch/launch-4/timeline",
  },
  {
    id: "inbox-5",
    type: "approval",
    title: "Release notes draft ready",
    launchId: "launch-1",
    launchName: "Product v2.0 Launch",
    dueAt: "2025-10-11T17:00:00Z",
    slaTimeRemainingH: 36,
    link: "/launch/launch-1/communications",
  },
];

export const changes = [
  {
    id: "change-1",
    launchId: "launch-3",
    launchName: "Mobile App Release",
    changeType: "date_shift",
    before: "2025-10-25",
    after: "2025-10-28",
    sourceLabel: "Jira EP-142",
    timestamp: "2025-10-05T14:30:00Z",
  },
  {
    id: "change-2",
    launchId: "launch-1",
    launchName: "Product v2.0 Launch",
    changeType: "owner",
    before: "Sarah Lee",
    after: "Dan Sullivan",
    sourceLabel: "PRD §3.2",
    timestamp: "2025-10-05T10:15:00Z",
  },
  {
    id: "change-3",
    launchId: "launch-4",
    launchName: "Enterprise Feature Rollout",
    changeType: "scope",
    before: "Full rollout",
    after: "Phased rollout (10% → 100%)",
    sourceLabel: "Confluence: Launch Plan",
    timestamp: "2025-10-04T16:45:00Z",
  },
  {
    id: "change-4",
    launchId: "launch-2",
    launchName: "Q4 Marketing Campaign",
    changeType: "sla",
    before: "48h",
    after: "24h",
    sourceLabel: "Jira SLA Update",
    timestamp: "2025-10-03T09:00:00Z",
  },
];
