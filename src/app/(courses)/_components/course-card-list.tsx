/** @format */

import { CourrseSummary } from "@/types/course-summary-interface";
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";
import dynamic from "next/dynamic";

type CourseCardListProps = {
  courses: CourrseSummary[];
};

async function getNewestCoursesData(count: number): Promise<CourrseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
    next: {
      revalidate: 0, // Revalidate every 60 seconds
    },
  });
  return res.json();
}

export const CourseCardList: React.FC = async () => {
  const newestCourses = await getNewestCoursesData(4);

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCourses?.map((course) => (
        <CourseCard key={`course${course.slug}`} {...course} />
      ))}
    </div>
  );
};
