/** @format */

import { CourseDetails } from "@/types/course-detail-interface";

export type CourseAsideProps = Pick<
  CourseDetails,
  | "basePrice"
  | "numberOfLectures"
  | "numOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "levelNumber"
  | "profileImageId"
  | "authorSpecialty"
  | "authorName"
>;
