import { FieldValues, get } from "react-hook-form";
import { TextInputprops } from "./text-input.types";
import { Textbox } from "../../textbox";

const TextInput = <TFormvalues extends FieldValues>({
  name,
  register,
  rules,
  errors,
  variant,
  ...rest
}: TextInputprops<TFormvalues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  // const hasError = Boolean(error)
  return (
    <>
      <Textbox
        {...register(name, rules)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
      />
      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error?.message}</p>
      )}
    </>
  );
};

export default TextInput;
