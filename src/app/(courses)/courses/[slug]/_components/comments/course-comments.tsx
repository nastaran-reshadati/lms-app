/** @format */

"use client";

import { createData, readData } from "@/core/http-services";
import { useParams } from "next/navigation";
import { Fragment, use, useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholder";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/_components/button";

const CourseComments = () => {
  const { slug } = useParams();

  const { ref, inView, entry } = useInView({
    // threshold: 0,
  });

  const {
    data: comments,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: { slug: slug as string, page: 1 },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      (async () => {
        await fetchNextPage();
      })();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (error) {
    return (
      <>
        <p>خطا در برقراری ارتباط</p>
        <div className="text-center">
          <Button variant="neutral" onClick={() => refetch()}>
            تلاش مجدد
          </Button>
        </div>
      </>
    );
  }
  return (
    <div>
      {comments?.pages.map((currentPage) => (
        <Fragment key={`comment-page-${currentPage}`}>
          {currentPage.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="primary"
            />
          ))}
        </Fragment>
      ))}
      {isFetching ||
        (hasNextPage && (
          <div ref={ref}>
            <TextPlaceholder />
          </div>
        ))}
    </div>
  );
};

export default CourseComments;
