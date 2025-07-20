import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizeError,
  UnhandleException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStartegy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as ValidationError;
};

export const notFoundErrorStartegy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس موردنظر یافت نشد !",
  } as NotFoundError;
};
export const unauthorizeErrorStartegy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "دسترسی به سرویس موردنظر امکان پذیر نیست !",
  } as UnauthorizeError;
};
export const unhandleExceptionErrorStartegy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای سرور !",
  } as UnhandleException;
};

export const networkErrorStartegy: ApiErrorHandler = (errorData) => {
  throw {
    detail: "خطای شبکه ",
  } as NetworkError;
};

//   number : status code
export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStartegy)(
      errorData
    ),
  403: unauthorizeErrorStartegy,
  404: notFoundErrorStartegy,
  500: unhandleExceptionErrorStartegy,
};
