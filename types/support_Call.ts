export interface SupportCall {
  id: number;

  practiceId: number;
  userId?: number;

  subject: string;
  description?: string;

  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Closed";

  callDate: Date;
  resolvedDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}