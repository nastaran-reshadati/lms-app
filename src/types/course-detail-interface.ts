/** @format */

export interface CourseDetails {
  title: string;
  basePrice?: number;
  numberOfLectures: number;
  level: string;
  numOfStudents: number;
  duration: string;
  isDownloadable: boolean;
  numOfReviews: number;
  isFree: boolean;
  subTitle: string;
  averageReviewRating: number;
  profileImageId?: number;
  authorName: string;
  recordStatus: string;
  authorSpecialty?: string;
  videoUrl?: string;
  coverImageId: number;
  description: string;
  frequentlyAskedQuestions: any;
  levelNumber: any;
}
