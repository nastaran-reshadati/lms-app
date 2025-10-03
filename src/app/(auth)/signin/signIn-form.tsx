/** @format */

import { Button } from "@/app/_components/button";

export const SinInForm = () => {
  return (
    <>
      <h5 className="text-2xl"> ورود | ثبت نام </h5>
      <p>دنیای شگفت انگیز برنامه نویسی در انتظار شماست !</p>
      <form className="mt-16">
        <Button type="submit" variant="primary" shape="full">
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};
