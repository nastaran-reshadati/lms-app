/** @format */

import { CourrseSummary } from "@/types/course-summary-interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { IconBasket } from "./_components/icons/icons";

// async function getNewestCourses(count: number): Promise<CourrseSummary[]> {
//   const res = await fetch(
//     `https://api.classbon.com/api/courses/newest/${count}`
//   );

//   return res.json();
// }

async function getNewestCourses(count: number): Promise<CourrseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);

  console.log(newestCourses);

  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز موندن یادگرفتن نکته های تازه ضروریه ! </p>
        </div>
        <CourseCardList courses={newestCourses} />
        <IconBasket width={250} height={250} />
      </section>
    </>
  );
}
