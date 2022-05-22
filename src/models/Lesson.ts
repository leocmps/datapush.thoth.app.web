export interface Lesson {
  tittle: string;
  segment?: { name: string, color: string };
  date: string;
  url: string;
  instructorName?: string;
}
