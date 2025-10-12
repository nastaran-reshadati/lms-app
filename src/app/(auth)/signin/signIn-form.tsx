"use client";
import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import { useForm } from "react-hook-form";
import { signinProps } from "./types/signin.type";
import { TextInput } from "@/app/_components/form-input";
import { useSignIn } from "./_api/signin";
import { useRouter } from "next/navigation";

export const SinInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<signinProps>();

  const router = useRouter();

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/verify?mobile=${getValues("mobile")}`);
    },
  });
  const onSubmit = (data: signinProps) => {
    console.log(data);
    signIn.submit(data);
  };
  return (
    <>
      <h5 className="text-2xl"> ورود | ثبت نام </h5>
      <p>دنیای شگفت انگیز برنامه نویسی در انتظار شماست !</p>
      <form
        className="mt-16 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput<signinProps>
          register={register}
          name={"mobile"}
          rules={{
            required: "شماره موبایل الزامی است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
        />
        <Button
          isLoading={signIn.isPending}
          type="submit"
          variant="primary"
          shape="full"
        >
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};
