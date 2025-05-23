/** @format */

import { CourrseSummary } from "@/types/course-summary-interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { IconBasket } from "./_components/icons/icons";
import { homeFeatures } from "@/data/home-feature";
import { Feature } from "./_components/feature/feature";

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
      <section className="container">
        <section className="dark:bg-base-75 mt-10">
          <div className="container flex flex-col lg:flex-row justify-center gap-8 xl:gap-10 py-10">
            {homeFeatures.map((feature) => (
              <Feature key={`feature${feature.title}`} feature={feature} />
            ))}
          </div>
        </section>
        <section className="container  pt-20">
          <div className="text-center xl:text-right">
            <h2 className="text-2xl font-extrabold">
              تازه ترین دوره های آموزشی
            </h2>
            <p>برای به روز موندن یادگرفتن نکته های تازه ضروریه ! </p>
          </div>
        </section>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
