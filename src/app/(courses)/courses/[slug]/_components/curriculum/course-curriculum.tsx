/** @format */
"use client";
import { IconChevronDown, IconChevronUp } from "@/app/_components/icons/icons";
import { CourseCurriculurProps } from "./curriculun.types";
import React, { useState } from "react";
import { Badge } from "@/app/_components/badge/badge";

export const CourseCurriculum: React.FC<CourseCurriculurProps> = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };
  return (
    <div className="border border-gradient-second/40 rounded-lg leading-10 overflow-hidden">
      {data.map((chapter, index) => (
        <React.Fragment>
          <div
            onClick={() => toggleAccordion(index)}
            key={`chapter-${chapter.id}`}
            className="h-[70px] flex items-center px-2 justify-between dark:bg-base-75 border-b border-y-base-25 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex justify-center items-center rounded-3xl w-6 h-6 bg-base-50 text-sm
            "
              >
                {index}
              </span>
              <h4>{chapter.title}</h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-self-end gap-2">
                <Badge variant="info" size="small">
                  {chapter.duration}
                </Badge>
                <Badge variant="accent" size="small">
                  {`${chapter.numOfLectures} مبحث`}
                </Badge>
              </div>
              {activeAccordion === index ? (
                <IconChevronUp width={18} className="cursor-pointer" />
              ) : (
                <IconChevronDown width={18} className="cursor-pointer" />
              )}
            </div>
          </div>
          {/* {activeAccordion === index && (
            <div className={`accordion-content`}>
              <ol
                className={`relative  pr-5 border-primary/20 ${
                  chapter.lectures.length > 1 ? "border-r-2" : ""
                }`}
              >
                {chapter.lectures.map((lecture) => (
                  <li
                    className="py-5 border-b border-base-content/10 ml-4 border-dashed last-of-type:border-0"
                    key={`lecture${lecture.title}`}
                  >
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -right-2  bg-primary/30"></span>

                    <h3 className="text-base font-semibold text-gray-900 flex items-center justify-between">
                      {lecture.title}
                      <div className="flex items-center gap-2">
                        <Badge variant="info" className="!w-20 mt-1">
                          {lecture.duration}{" "}
                        </Badge>
                      </div>
                    </h3>
                  </li>
                ))}
              </ol>
            </div>
          )} */}
          {activeAccordion === index && (
            <div
              className="accordion-content"
              onClick={() => toggleAccordion(index)}
              key={`chapter-${chapter.id}`}
            >
              <ol
                className={`py-2 pr-5 relative border-accent/30 ${
                  chapter.lectures.length > 1 ? "border-r-2" : ""
                }`}
              >
                {chapter.lectures.map((lecture) => (
                  <div key={`lecture-${lecture.title}`}>
                    <li className="relative flex justify-between">
                      <span
                        className={`absolute ${
                          chapter?.lectures?.length > 1 ? "flex" : "hidden"
                        } items-center justify-center w-4 h-4 rounded-full bg-accent/60 -right-7 bottom-2`}
                      ></span>
                      {/* <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -right-2  bg-primary/30"></span> */}
                      <h5>{lecture.title}</h5>
                      <Badge variant="info" size="small">
                        {lecture.duration}
                      </Badge>{" "}
                    </li>
                  </div>
                ))}
              </ol>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
