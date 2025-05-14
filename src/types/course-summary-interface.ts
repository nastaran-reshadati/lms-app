import { CourseLevel } from "@/enums/course-level.enum";

export interface CourrseSummary {
  id: number;
  title: string;
  courseCategoryId: number;
  duration: string;
  level: string;
  levelNumber: CourseLevel;
  averageReviewRating: number;
  numOfReviews: number | null;
  coverImageId: number | null;
  recordStatus: string;
  slug: string;
  subTitle: string;
  isFree: boolean;
  basePrice: number;
}
