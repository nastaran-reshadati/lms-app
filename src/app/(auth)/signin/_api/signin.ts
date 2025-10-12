import { createData } from "@/core/http-services";
import { signinProps } from "../types/signin.type";
import { useMutation } from "@tanstack/react-query";

const signIn = (model: signinProps): Promise<void> =>
  createData<signinProps, void>("/signin", model);

type UseSignInOptions = {
  onSuccess?: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
