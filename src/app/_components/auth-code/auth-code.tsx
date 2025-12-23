"use client";
import { useRef } from "react";
import { AuthCodeProps, AuthInputProps } from "./auth-code.types";
import { Textbox } from "../textbox";
import classNames from "classnames";

export const AuthCode: React.FC<AuthCodeProps> = ({
  variant = "ghost",
  autoFocus = true,
  length = 5,
  onChange,
  className,
  isDisabled = false,
}) => {
  if (length < 1) {
    throw new Error("تعداد ارقام باید بزرگتر از صفر باشد");
  }

  //   const inputsRef = useRef<HTMLInputElement[]>([]);
  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const inputProps: AuthInputProps = {
    min: "0",
    max: "9",
    pattern: "[0-9]{1}",
  };

  const sendResult = () => {};
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, nextElementSibling },
    } = e;
  };
  ``;

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };
  //   or
  //   const handleOnFocus = (e: FocusEvent) => {
  //     (e.target as HTMLInputElement).select();
  //   };
  const handleOnKeyDown = () => {};

  const classes = classNames("textbox flex-1 w-1 text-center", {
    [`textbox-${variant}`]: variant,
  });
  const inputs = [];

  for (let i = 0; i < length; i++) {
    inputs.push(
      <input
        type="text"
        maxLength={1}
        disabled={isDisabled}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
        className={`${classes}`}
        ref={(element: HTMLInputElement) => {
          inputsRef.current[i] = element;
        }}
      />
    );
  }

  return <div className={`flex gap-4 flex-row-reverse`}>{inputs}</div>;
};
