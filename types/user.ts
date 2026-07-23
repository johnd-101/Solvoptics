export interface User {
  id: number;

  firstName: string;
  lastName: string;

  email: string;
  passwordHash: string;
  phone: string;

  role: "admin" | "user";

  createdAt: Date;
  updatedAt: Date;
}