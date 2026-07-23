export interface AuditLog {
  id: number;

  userId?: number;

  action: string;

  tableName: string;

  recordId?: number;

  details?: string;

  createdAt: Date;
}