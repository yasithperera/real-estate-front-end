export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  properties: number[];  // Array of property IDs
}
