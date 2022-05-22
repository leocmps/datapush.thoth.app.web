export interface Question {
  id?: string;
  userId: string;
  userName: string;
  title: string;
  message: string;
  answers: { id: string, message: string }[];
}
