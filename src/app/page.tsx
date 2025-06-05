/** @format */

import { CourrseSummary } from "@/types/course-summary-interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { IconArrowLeftFill, IconBasket } from "./_components/icons/icons";
import { homeFeatures } from "@/data/home-feature";
import { Feature } from "./_components/feature/feature";
import { Button } from "./_components/button";
import { BlogSummary } from "@/types/blog-summary-interface";
import { BlogCardList } from "./(blog)/components/blogCardList/BlogCardList";
import { API_URL } from "@/configs/global";
import { MockBlogSummaries } from "@/enums/general";
import { Suspense } from "react";
import { CardPlaceholder } from "./_components/placeholder/card/card-placeholder";
import { testimonials } from "@/data/testiMonial";
import { TestMonialList } from "./_components/testiMonial/testimonial-list";

// export const dynamic = "force-dynamic"; // This will disable static generation for this page

// async function getNewestCourses(count: number): Promise<CourrseSummary[]> {
//   const res = await fetch(
//     `https://api.classbon.com/api/courses/newest/${count}`
//   );

//   return res.json();
// }

async function getNewestBlogsData(count: number): Promise<BlogSummary[]> {
  // const res = await fetch(`${API_URL}/blog/newest/${count}`);
  // return res.json();

  return MockBlogSummaries.slice(0, count);
}

export default async function Home() {
  const newestBlogs = getNewestBlogsData(4);

  const [blogs] = await Promise.all([newestBlogs]);

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
            <p className="mt-3 text-lg">
              برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
            </p>
          </div>
          <Suspense fallback={<CardPlaceholder count={4} />}>
            <CourseCardList />
          </Suspense>
        </section>
        <section className="my-40 px-2">
          <div className="relative pt-0 text-center">
            <div className="bg-primary pointer-events-none absolute w-1/2 left-1/2 aspect-square rounded-full -translate-x-1/2 -top-96 opacity-10 blur-3xl"></div>
            {/* <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div> */}
            <h2
              lang="en"
              className="gradient-reverse leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
            >
              React Js & Next Js
            </h2>
            <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
              ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای
              وب! پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان
              یادگیری رو شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و
              کاملاً کاربردی کنارت هستیم.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                variant="primary"
                size="large"
                className="mt-7"
                animatedIcon={true}
              >
                دوره‌های ری اکت و نکست‌ جی‌اس
                <IconArrowLeftFill fill="currentColor" />
              </Button>
              <Button
                variant="neutral"
                size="large"
                className="mt-7"
                animatedIcon={true}
              >
                مقالات ری اکت و نکست‌ جی‌اس
              </Button>
            </div>
          </div>
        </section>

        <section className="flex justify-between pt-20">
          <div className="text-center xl:text-right">
            <div className="bg-primary pointer-events-none absolute w-1/2 left-1/2 aspect-square rounded-full -translate-x-1/2 -top-96 opacity-10 blur-3xl"></div>

            <h2 className="text-2xl font-extrabold">
              تازه ترین مقاله های آموزشی
            </h2>
            <p> به رایگان تازه ترین مقالات آموزشی رو در اختیارت قررا میدیم !</p>
          </div>
          <Button variant="neutral" animatedIcon={true}>
            همه ی مقالات <IconArrowLeftFill />
          </Button>
        </section>
        <BlogCardList blogs={blogs} />
      </section>

      <section className="mt-24">
        <div className="relative pt-0 text-center">
          <div className="bg-info pointer-events-none absolute w-1/2 left-1/2 aspect-square rounded-full -translate-x-1/2 -top-96 opacity-5 blur-2xl"></div>
          {/* <div className="bg-primary pointer-events-none absolute w-1/2 left-1/2 aspect-square rounded-full -translate-x-1/2 -top-96 opacity-10 blur-3xl"></div> */}

          <div className="text-center">
            <h2 className="text-2xl font-extrabold">
              مشتریان ما چه می گویند ؟!
            </h2>
            <p>نظرات صادقانه ی افرادی که با ما تجربه داشته اند ...</p>
            <TestMonialList testimonials={testimonials} />
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
