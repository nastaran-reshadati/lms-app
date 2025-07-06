/** @format */

import { Progress } from "@/app/_components/progress/progress";
import { Rating } from "@/app/_components/rating";
import { API_URL } from "@/configs/global";
import { CourseDetails } from "@/types/course-detail-interface";
import { CourseAside } from "./_components/course-aside";
import { Tabs } from "@/app/_components/tabs";
import { AccordionItem } from "@/types/accordion.types";
import { Accordion } from "@/app/_components/accordion";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug,
  }));
}
async function getCourse(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}
export default async function CourseDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const courseDetail = await getCourse(slug);

  const afqs: AccordionItem[] = courseDetail.frequentlyAskedQuestions.map(
    (faq) => ({
      id: faq.id,
      title: faq.question,
      content: faq.answer,
    })
  );

  const tabs = [
    {
      label: "مشخصات دوره ",
      content: courseDetail.description,
    },
    {
      label: "دیدگاه ها و پرسش ها ",
      content: "course comment",
    },
    {
      label: "سوالات متداول",
      content: <Accordion data={afqs} />,
    },
  ];
  return (
    <div className="container relative grid grid-cols-10 grid-rows-[auto-auto] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute w-1/2 left-1/2 aspect-square rounded-full -translate-x-1/2 -top-96 opacity-10 blur-3xl"></div>

      <div className="col-span-10 xl:col-span-7">
        <h1
          className="
         text-center xl:text-right text-2xl lg:text-3xl  font-black mb-6"
        >
          {courseDetail.title}
        </h1>
        <h2 className="text-center xl:text-right text-xl">
          {courseDetail.subTitle}
        </h2>
        <div>music player</div>
      </div>

      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...courseDetail} />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs} />
      </div>

      <div className="col-span-10 xl:col-span-4">g </div>
    </div>
  );
}
