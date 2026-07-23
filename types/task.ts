export interface Task {
  id: number;

  practiceId?: number;
  supportCallId?: number;
  assignedToId?: number;

  title: string;
  description?: string;

  priority: "Low" | "Medium" | "High";

  status:
    | "Pending"
    | "In Progress"
    | "Completed"
    | "Cancelled";

  dueDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}