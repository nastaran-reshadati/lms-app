"use client";

import { createData, readData } from "@/core/http-services";
import { useEffect } from "react";

const CourseComments = () => {
  useEffect(() => {
    createData("/bad-request", {
      userId: 123,
      message: "Hello from createData!",
    });
  });
  return <></>;
};

export default CourseComments;
