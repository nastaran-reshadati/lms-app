"use client";
import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import { useForm } from "react-hook-form";
import { signinProps } from "./types/signin.type";
import { TextInput } from "@/app/_components/form-input";

export const SinInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinProps>();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <h5 className="text-2xl"> ورود | ثبت نام </h5>
      <p>دنیای شگفت انگیز برنامه نویسی در انتظار شماست !</p>
      <form
        className="mt-16 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Textbox
          {...register("mobile", { required: "شماره موبایل الزامی است" })}
          variant="info"
          placeholder="شماره موبایل"
          size="normal"
        />

        <TextInput<signinProps>
          register={register}
          name={"mobile"}
          rules={{
            required: "شماره موبایل الزامی است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باد",
            },
            errors = { errors },
          }}
        />
        <Button type="submit" variant="primary" shape="full">
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};
