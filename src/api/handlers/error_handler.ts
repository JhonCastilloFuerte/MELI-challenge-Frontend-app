export type HttpErrorHandlerFn = (error: any) => any;

const HttpErrorHandler = (error: any) => {
  const { response } = error ?? {};
  if (response) {
    const { data = {}, status = 500 } = response;
    return {
      ...data,
      status: status,
    };
  } else
    return {
      error: 'Algo salio mal',
      status: 500,
    };
};

const service = {
  HttpErrorHandler,
};
export default service;
export { HttpErrorHandler };
