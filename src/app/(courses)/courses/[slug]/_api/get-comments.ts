/** @format */

import { readData } from "@/core/http-services";
import { CourseCommentsList } from "../_types/course-comments.interface";
import { useQuery } from "@tanstack/react-query";

type getCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: getCommentsOptions): Promise<CourseCommentsList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComments = ({ params }: getCommentsOptions) => {
  const { data } = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => getComments({ params }),
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 60 * 1000,
  });

  return { data };
};
