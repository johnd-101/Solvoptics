export interface Appointment {
  id: number;

  practiceId?: number;
  userId?: number;

  title: string;

  appointmentDate: Date;

  description?: string;

  status:
    | "Scheduled"
    | "Completed"
    | "Cancelled"
    | "Rescheduled";

  createdAt: Date;
  updatedAt: Date;
}