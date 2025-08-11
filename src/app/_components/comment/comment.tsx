/** @format */

import { CourseCommentsList } from "@/app/(courses)/courses/[slug]/_types/course-comments.interface";
import { CommentProps } from "./comment.types";
import { API_URL } from "@/configs/global";
import { Avatar } from "../avatar";
import { Rating } from "../rating";

export const Comment: React.FC<CommentProps> = ({
  commentText,
  date,
  fullName,
  isResponse,
  score,
  userId,
  variant = "accent",
  className,
}) => {
  const apiUrl = `${API_URL}/picture/${userId}`;

  const userImgPath = userId ? apiUrl : "";
  return (
    <div className={`comment comment-${isResponse ? "end" : "start"}`}>
      <div className="comment-image">
        <Avatar
          src={userImgPath}
          size="tiny"
          variant={isResponse ? "accent" : "neutral"}
        />
      </div>
      <div className="comment-header">
        {fullName}
        <time className="text-xs opacity-60">{date}</time>
      </div>
      <div
        className={`comment-bubble${
          isResponse ? " comment-buble-" + variant : ""
        }`}
      >
        {commentText}
      </div>
      {score && score > 0 && (
        <div className="comment-footer">
          <Rating variant="accent" size="tiny" rating={2} />
        </div>
      )}
    </div>
  );
};
