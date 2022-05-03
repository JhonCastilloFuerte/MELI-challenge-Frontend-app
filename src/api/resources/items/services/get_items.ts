import { HttpErrorHandlerFn } from "../../../handlers/error_handler";
import { AxiosStatic } from 'axios';

type Dependencies = {
  http: AxiosStatic
  errorHandler: HttpErrorHandlerFn;
  basePath: string;
};


const build = ({http, errorHandler, basePath }: Dependencies) => {
  const PATH = '/api/items';
  const execute = async (data: any) =>{
    try {
      const response = await http.get(
        `${basePath}${PATH}`,{params: data}
      );
      return response.data;
    } catch (err: any) {
      console.log('error', err)
      throw errorHandler(err);
    }
  }
  return execute
};

export { build };