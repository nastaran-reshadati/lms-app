/** @format */

"use client";

import { createData, readData } from "@/core/http-services";
import { useParams } from "next/navigation";
import { use, useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholder";

const CourseComments = () => {
  const { slug } = useParams();

  const { data: comments, isLoading } = useCourseComments({
    params: { slug: slug as string, page: 1 },
  });

  console.log(isLoading);

  useEffect(() => {
    createData("/bad-request", {
      userId: 123,
      message: "Hello from createData!",
    });
  });
  return (
    <div>
      {comments?.data?.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="primary" />
        // <p key={comment.id}>{comment.commentText}</p>
      ))}
      {isLoading && <TextPlaceholder />}
    </div>
  );
};

export default CourseComments;
