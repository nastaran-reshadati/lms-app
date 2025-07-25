interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problem {
  //400 status code
}
interface UnauthorizeError extends Problem {
  //403
}
interface ValidationError extends Problem {}

interface NotFoundError extends Problem {}

interface UnhandleException extends Problem {
  // 500 status code
}
interface NetworkError extends Problem {}

type ApiError =
  | BadRequestError
  | NetworkError
  | ValidationError
  | UnhandleException
  | UnauthorizeError
  | NotFoundError;

export type {
  Problem,
  ApiError,
  BadRequestError,
  UnauthorizeError,
  ValidationError,
  NotFoundError,
  NetworkError,
  UnhandleException,
};
