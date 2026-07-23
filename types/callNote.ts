export interface CallNote {
  id: number;

  supportCallId: number;
  userId?: number;

  note: string;

  createdAt: Date;
}