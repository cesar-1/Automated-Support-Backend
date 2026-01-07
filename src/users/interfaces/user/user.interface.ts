export interface User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: 'USER' | 'ADMIN' | 'AGENT';
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
