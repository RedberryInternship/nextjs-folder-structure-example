export type PersonalInformation = {
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
};

export type ChessExperience = {
  experience_level: string;
  character_id: number | null;
  already_participated: boolean;
};
