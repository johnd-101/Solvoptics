export interface Practice {
  id: number;

  practiceName: string;

  contactPerson?: string;
  email?: string;
  phone?: string;

  addressLine?: string;
  city?: string;
  province?: string;
  postalCode?: string;

  createdAt: Date;
  updatedAt: Date;
}