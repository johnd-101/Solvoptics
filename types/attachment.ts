export interface QuickNote {
  id: number;

  userId?: number;

  title?: string;

  note: string;

  createdAt: Date;
  updatedAt: Date;
}