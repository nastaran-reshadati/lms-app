import { Button } from "@/app/_components/button";
import Link from "next/link";

export const VerificationForm: React.FC<> = () => {
  return (
    <>
      <h5 className="text-2xl">کد تایید</h5>
      <p className="mt-2">دنیای شگفت انگیزبرنامه نویسی در انتظار شماست</p>
      <form className="flex flex-col gap-6 mt-10 flex-1">
        <p>Auth code</p>
        Timer
        <Button isLink={true}> ارسال مجدد کد تایید</Button>{" "}
        <Button type="submit" variant="primary">
          {" "}
          تایید و ادامه{" "}
        </Button>{" "}
        <div className="flex">
          <span>برای اصلاح شماره تماس</span>
          <Link href="/signin">اینجا</Link>
          <span>کلیک کنید</span>
        </div>
      </form>
    </>
  );
};
