export interface IProfileCard {
  login: string;
  id: number;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  name: string | null;
  email: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;

}
