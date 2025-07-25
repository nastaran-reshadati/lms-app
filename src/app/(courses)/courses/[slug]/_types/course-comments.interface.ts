/** @format */

import { Comments } from "@/types/comments.interface";

export interface CourseCommentsList {
  data: Comments[];
  nextPage: number;
}
