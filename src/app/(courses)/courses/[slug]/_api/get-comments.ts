/** @format */

import { readData } from "@/core/http-services";
import { CourseCommentsList } from "../_types/course-comments.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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
  const {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["courseComments", params.slug],
    queryFn: ({ pageParam }) =>
      getComments({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 60 * 1000,
  });

  return {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};
