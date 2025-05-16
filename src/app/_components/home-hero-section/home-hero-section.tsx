/** @format */

import Image from "next/image";
import { Button } from "../button";
import React from "react";

export const HomeHeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-hero-pattern bg-center bg-no-repeat mt-5 mb-5 xl:mt-20 xl:bg-left">
        <div
          className="continer flex flex-col-reverse items-center xl:flex-row
      "
        >
          <div
            className="flex flex-col gap-5 mt-12 text-center xl:text-right lg:pr-5
      "
          >
            <h3 className="text-xl xl:text-2xl dark:text-info">
              خوش اومدی به ...
            </h3>{" "}
            <h1 className="text-2xl gradient  xl:text-4xl">
              برنامه نویسی رو با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر
            </h1>
            <p>
              {" "}
              با آکادمی خصوصی ما ، علم برنامه نویسی رو با خیال راحت یاد بگیر و
              پیشرفت کن{" "}
            </p>
            <div className="mt-5 mb-5 flex gap-4">
              <Button variant="primary" size="large">
                {" "}
                دوره های آموزشی فرانت اند
              </Button>
              <Button isOutline={true} variant="neutral" size="large">
                {" "}
                مشاوره برنامه نویسی
              </Button>
            </div>
            <Image
              width="412"
              height="40"
              alt="frameworks"
              src="/images/frameworks.png"
              className="mx-auto grayscale xl:mx-5"
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            alt=""
            width={702}
            height={521}
          />
        </div>

        {/* <Button isOutline={true} variant="secondary" size="wide">
          {" "}
          ورود و ثبت نام
        </Button> */}
      </section>
    </>
  );
};
