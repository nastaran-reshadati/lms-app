/** @format */

import { Rating } from "@/app/_components/rating";
import { CourseAsideProps } from "./course-aside/course-aside.types";
import { Price } from "@/app/_components/price/price";
import {
  IconArrowLeftFill,
  IconClock,
  IconComment,
  IconDoc,
  IconDownload,
  IconLevel,
  IconRecord,
  IconStudents,
  IconUserProfile,
} from "@/app/_components/icons/icons";
import { Progress } from "@/app/_components/progress/progress";
import { Avatar } from "@/app/_components/avatar";
import { Button } from "@/app/_components/button";

export const CourseAside: React.FC<CourseAsideProps> = ({
  basePrice,
  numberOfLectures,
  numOfStudents,
  duration,
  recordStatus,
  isDownloadable,
  averageReviewRating,
  level,
  numOfReviews,
  authorName,
  authorSpecialty,
  profileImageId,
  levelNumber,
}) => {
  return (
    <aside className="flex flex-col gap-6 sticky top-35">
      <div className="flex justify-between">
        <Price />
        <Rating size="small" rating={2} />
      </div>
      <div className="flex justify-between rounded-lg border dark:border-base-content/10">
        <div className="flex flex-1 gap-1 items-center border-l dark:border-base-content/10 p-2">
          <IconStudents />
          <span>{numOfStudents}</span>
          شرکت کننده
        </div>
        <div className="flex flex-1 flex-col gap-1 p-2">
          <div className="flex justify-start gap-2">
            <IconLevel width={22} />
            {level}
          </div>
          <Progress value={75} variant="accent" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <IconDoc width={22} />
          تعداد مباحث :
          <span className=" dark:text-info">{numberOfLectures}</span>
        </div>
        <div className="flex gap-2">
          <IconClock width={22} />
          مدت آموزش :<span className=" dark:text-info">{duration}</span>
        </div>
        <div className="flex gap-2">
          <IconRecord width={22} />
          وضعیت : <span className=" dark:text-info">{recordStatus}</span>
        </div>
        <div className="flex gap-2">
          <IconDownload width={22} />
          قابلیت دانلود :{" "}
          <span className=" dark:text-info">
            {isDownloadable ? "بله" : "خیر"}
          </span>
        </div>
        <div className="flex gap-2">
          <IconComment width={22} />
          تعداد نظرات : <span className=" dark:text-info">{numOfReviews}</span>
        </div>
      </div>

      <section className="flex flex-col gap-4 border-t pt-6 dark:border-base-content/10">
        <div className="flex items-center gap-3">
          <Avatar variant="primary" />
          <div className="flex flex-col">
            <p>نسترن رشادتی</p>
            <p>توسعه دهنده فرانت اند</p>
          </div>
        </div>
        <Button shape="full" variant="neutral" animatedIcon={true}>
          مشاهده پروفایل
          <IconArrowLeftFill fill="currentColor" />
        </Button>
      </section>
    </aside>
  );
};
