import { API_URL } from "@/configs/global";
import {
  BadRequestError,
  ValidationError,
  UnhandleException,
  UnauthorizeError,
  Problem,
  NotFoundError,
  NetworkError,
} from "@/types/http-errors.interface";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { errorHandler, networkErrorStartegy } from "./http-error-strategies";

type ApiError =
  | BadRequestError
  | NetworkError
  | ValidationError
  | UnhandleException
  | UnauthorizeError
  | NotFoundError;

export const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    debugger;
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;

        errorHandler[statusCode](errorData);

        // if (statusCode === 400 && !errorData.errors) {
        //   throw {
        //     ...errorData,
        //   } as BadRequestError;
        // }

        // if (statusCode === 400 && errorData.errors) {
        //   throw {
        //     ...errorData,
        //   } as ValidationError;
        // }

        // if (statusCode === 404) {
        //   throw {
        //     ...errorData,
        //     detail: "سرویس موردنظر یافت نشد !",
        //   } as NotFoundError;
        // }

        // if (statusCode === 403) {
        //   throw {
        //     ...errorData,
        //     detail: "دسترسی به سرویس موردنظر امکان پذیر نیست !",
        //   } as UnauthorizeError;
        // }

        // // Unhandle exceptions
        // if (statusCode >= 500) {
        //   throw {
        //     ...errorData,
        //     detail: "خطای سرور !",
        //   } as UnhandleException;
        // }
      }
    } else {
      networkErrorStartegy();
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  debugger;
  const response: AxiosResponse = await httpService(url, options);
  return response.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "GET",
  };

  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  debugger;
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}
async function UpdateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, UpdateData, deleteData };
