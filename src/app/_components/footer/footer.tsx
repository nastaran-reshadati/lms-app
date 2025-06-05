/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar } from "../avatar";

const Footer: React.FC = () => {
  return (
    <div className="bg-base-100 text-base-content">
      <footer className="container flex flex-col lg:flex-row items-center gap-5 px-0 lg:px-12 xl:px-40 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image
            src="/images/logo.svg"
            width={180}
            height={36}
            alt="لوگو سایت"
          />

          <p className="opacity-50 mt-2">
            پلتفرم آموزش برنامه‌نویسی
            <br /> یادگیری مداوم - پیشرفت مستمر
          </p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-5 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              آموزش ری‌اکت و نکست
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              دوره‌های پیشرفته ری‌اکت
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              مشاوره برنامه‌نویسی
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              ما در لینکدین
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              کانال تلگرام ما
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              صفحه یوتیوب
            </Link>
          </div>
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              مطالب و مقالات آموزشی
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              پرسش‌های متداول
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              قوانین استفاده و حریم خصوصی
            </Link>
          </div>
        </div>
      </footer>

      <div className="bg-base-200 text-left" lang="en" dir="ltr">
        <div className="container py-10 flex justify-between items-center">
          <div className="flex gap-5 items-center ">
            <Avatar variant="success" src="/images/customer-9.jpg" />
            <div className="flex flex-col">
              <span className="text-base-content/50 ">Developed by:</span>
              <span className="text-lg font-bold tracking-wide">
                Nastaran Reshadati{" "}
              </span>
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright © 2023
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
