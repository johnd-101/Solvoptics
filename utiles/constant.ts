export const USER_ROLES = [
  "admin",
  "user",
] as const;



export const CALL_PRIORITIES = [
  "Low",
  "Medium",
  "High",
] as const;



export const CALL_STATUSES = [
  "Open",
  "In Progress",
  "Closed",
] as const;



export const TASK_STATUSES = [
  "Pending",
  "In Progress",
  "Completed",
  "Cancelled",
] as const;



export const TASK_PRIORITIES = [
  "Low",
  "Medium",
  "High",
] as const;



export const APPOINTMENT_STATUSES = [
  "Scheduled",
  "Completed",
  "Cancelled",
  "Rescheduled",
] as const;



export const DASHBOARD_MENU = [

  {
    title: "Dashboard",
    path: "/dashboard",
  },

  {
    title: "Users",
    path: "/dashboard/users",
  },

  {
    title: "Practices",
    path: "/dashboard/practices",
  },

  {
    title: "Support Calls",
    path: "/dashboard/support-calls",
  },

  {
    title: "Tasks",
    path: "/dashboard/tasks",
  },

  {
    title: "Appointments",
    path: "/dashboard/appointments",
  },

  {
    title: "Quick Notes",
    path: "/dashboard/quick-notes",
  },

  {
    title: "Notifications",
    path: "/dashboard/notifications",
  },

];



export const PAGINATION_LIMIT = 10;