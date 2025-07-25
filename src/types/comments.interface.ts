/** @format */

export interface Comments {
  id: number;
  date: string;
  userId: number;
  fullName: string;
  commentText: string;
  score: number;
  isResponse: boolean;
}
