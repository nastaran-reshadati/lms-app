/** @format */

"use client";

import { createData, readData } from "@/core/http-services";
import { useParams } from "next/navigation";
import { use, useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";

const CourseComments = () => {
  const { slug } = useParams();

  const { data: comments } = useCourseComments({
    params: { slug: slug as string, page: 1 },
  });

  console.log(comments);
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
    </div>
  );
};

export default CourseComments;
