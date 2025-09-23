/** @format */

import Image from "next/image";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container fade-in max-w-5xl dark:bg-base-75 mt-16 rounded-lg border dark:border-base-25 dark:border-opacity-10">
      {/* <section className="flex-1 flex flex-col">{children}</section> */}
      <section className="flex justify-between items-center p-10">
        <div>
          <h6>Sign in page</h6>
        </div>

        <div className="dark:bg-primary-focus rounded-lg p-4 shadow-lg">
          <h5 className="dark:text-white/80 text-center text-lg">
            آموزش متفاوت برنامه نویسی
          </h5>

          <div>
            <div className="dark:bg-primary dark:bg-opacity-90 p-2 rounded-full w-72 h-72 my-6 flex justify-center dark:border-white border dark:border-opacity-10 relative">
              <Image
                src="/images/programmer.svg"
                alt="sign in"
                fill
                // width={300}
                // height={300}
              />
            </div>
            <div className="text-center dark:text-white/70 my-6">
              <h5>آموزش برنامه نویسی در کوتاه ترین زمان ممکن</h5>
              <h6>اینجا سریع میریم سراغ اصل مطلب</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
